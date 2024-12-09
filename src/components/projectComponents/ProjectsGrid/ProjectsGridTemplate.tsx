"use client";
import { useFilter } from "@/context/FilterContext";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";

interface Project {
  area: { ar: string; en: string; fr: string };
  budget: number | null;
  category: string;
  client: { fr: string; ar: string; en: string };
  currentSlug: string;
  description: { fr: string; ar: string; en: string };
  mainImage: { _ref: string };
  images: { asset: string }[];
  location: { fr: string; ar: string; en: string };
  title: { fr: string; ar: string; en: string };
}

interface ProjectsGridProps {
  data: Project[];
  locale: string;
}

const ProjectsGridTemplate = ({ data, locale }: ProjectsGridProps) => {
  const { selectedFilter } = useFilter();
  const [filteredData, setFilteredData] = useState<Project[]>(data);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const projectsPerPage = 9;
  const prevProjectsCount = useRef(0);

  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredData(data);
    } else {
      const updatedData = data.filter(
        (project) => project.category === selectedFilter
      );
      setFilteredData(updatedData);
    }
    setPage(1);
    prevProjectsCount.current = 0;
  }, [selectedFilter, data]);

  useEffect(() => {
    setVisibleProjects(filteredData.slice(0, page * projectsPerPage));
  }, [filteredData, page]);

  useEffect(() => {
    if (!gridRef.current) return;

    const projects = Array.from(gridRef.current.children);
    const newProjects = projects.slice(prevProjectsCount.current);
    
    if (newProjects.length > 0) {
      gsap.fromTo(newProjects, 
        {
          opacity: 0,
          y: 50,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    prevProjectsCount.current = projects.length;
  }, [visibleProjects]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && visibleProjects.length < filteredData.length) {
      setPage((prev) => prev + 1);
    }
  }, [visibleProjects.length, filteredData.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 0
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <>
      <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mx-2 md:my-4">
        {visibleProjects.map((project) => {
          const href = `/${locale}/Projects/${project.currentSlug}`;
          return (
            <Link
              href={href}
              key={project.currentSlug}
              className="bg-white h-[150px] md:h-[200px] ring-dark ring-opacity-15 ring-1 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                className="w-full h-full object-cover"
                src={urlFor(project.mainImage).url()}
                alt={project.title.en}
                width={1000}
                height={1000}
              />
            </Link>
          );
        })}
      </div>
      <div ref={loaderRef} className="h-10" />
    </>
  );
};

export default ProjectsGridTemplate;
