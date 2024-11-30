"use client";
import { useFilter } from "@/context/FilterContext";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [filteredData, setFilteredData] = useState<Project[]>(data); // Initialize state with the original data

  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredData(data);
    } else {
      const updatedData = data.filter(
        (project) => project.category === selectedFilter
      );
      setFilteredData(updatedData);
    }
  }, [selectedFilter, data]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mx-2 md:my-4">
      {filteredData.map((project) => {
        const href = `/${locale}/Projects/${project.currentSlug}`; // Explicitly construct the path
        return (
          <Link
            href={href} // Use the dynamically constructed URL
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
  );
};

export default ProjectsGridTemplate;
