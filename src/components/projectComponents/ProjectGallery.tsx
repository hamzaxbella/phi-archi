"use client";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useEffect, useRef } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

interface ImageAsset {
  asset: {
    _ref: string;
  };
}

interface Project {
  images: ImageAsset[];
}

interface ProjectGalleryProps {
  project: Project;
}

const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Configure and initialize PhotoSwipe Lightbox
  useEffect(() => {
    if (!galleryRef.current) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  // Function to create dynamic layout
  const groupImages = (images: ImageAsset[]): ImageAsset[][] => {
    const groups: ImageAsset[][] = [];
    let i = 0;

    while (i < images.length) {
      const isOddRow = groups.length % 2 === 0; // Determines row type
      const groupSize = isOddRow ? 1 : 2; // Alternates between 1 and 2 images per row
      groups.push(images.slice(i, i + groupSize)); // Add group to groups
      i += groupSize; // Increment index by group size
    }

    return groups;
  };

  // Group the images dynamically
  const groups = groupImages(project.images);

  return (
    <div className="my-4 lg:mx-12 photoswipe-gallery" ref={galleryRef}>
      {groups.map((group, idx: number) => (
        <div
          key={idx}
          className={`grid gap-4 mt-4 ${group.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}
        >
          {group.map((image, imgIdx: number) => {
            const ref = image.asset._ref;
            const dimensionsMatch = ref.match(/-(\d+)x(\d+)-/);
            const width = dimensionsMatch
              ? parseInt(dimensionsMatch[1], 10)
              : 900;
            const height = dimensionsMatch
              ? parseInt(dimensionsMatch[2], 10)
              : 900;
            
            return (
              <a
                key={`${idx}-${imgIdx}`} // Unique key for each image
                href={urlFor(image.asset).url()} // Image URL
                data-pswp-width={width}
                data-pswp-height={height}
                className="w-[1fr] h-full"
              >
                <Image
                  alt={`image ${imgIdx + 1}`}
                  src={urlFor(image.asset).url()}
                  width={1000}
                  height={1000}
                  className=" shadow-sm object-cover w-full h-[250px] lg:h-[350px]  rounded-lg"
                />
              </a>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
