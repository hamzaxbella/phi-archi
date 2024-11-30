"use client";

import { SideMenuProps } from "@/lib/interface";
import { useFilter } from "@/context/FilterContext";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { front_arrow } from "../../../public";

const SideMenuTemplate = ({ filters }: SideMenuProps) => {
  const { selectedFilter, setSelectedFilter } = useFilter();
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(true);
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!selectedFilter) {
      setSelectedFilter("all");
    }
  }, [selectedFilter, setSelectedFilter]);
  
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsScrollableLeft(container.scrollLeft > 0);
      setIsScrollableRight(
        container.scrollWidth > container.clientWidth &&
          container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", checkScrollPosition);

    return () => {
      container?.removeEventListener("scroll", checkScrollPosition);
    };
  });

  return (
    <div className="w-full h-[90%] relative">
      {/* Fading effect for left and right */}
      {isScrollableLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-10 h-full  bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none md:hidden z-10"></div>
      )}
      {isScrollableRight && (
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none md:hidden z-10"></div>
      )}

      <ul
        ref={scrollContainerRef}
        className="w-full my-2 px-3 flex justify-between gap-3 py-4 text-nowrap md:flex-col md:gap-4 md:px-0 md:mt-6 md:text-lg overflow-x-scroll overflow-y-opacity-0 md:overflow-x-hidden"
      >
        <li
          key={0}
          className={`group flex items-center gap-2 relative cursor-pointer capitalize font-light text-md ${
            selectedFilter === "all" && "active-selector"
          } relative w-fit`}
        onClick={() => setSelectedFilter("all")}
        >
          {selectedFilter === "all" && (
            <span className="md:hidden absolute w-1 h-1 bg-dark rounded-full left-1/2 -translate-x-1/2 -bottom-[10px]" />
          )}
            <Image src={front_arrow} className={`hidden md:block opacity-0 md:absolute md:left-3 ${selectedFilter === "all" && '!left-0 md:opacity-100'} md:group-hover:-left-0 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-500 md:ease-in-out  `} alt="arrow"  width={30} height={30}/>
            <p className={` md:group-hover:ml-10 md:group-hover:font-semibold ${selectedFilter === "all" && 'md:ml-10 md:font-semibold'} md:transition-all md:duration-500 md:ease-in-out `}>all</p>
        </li>

        {filters.map((filter, index) => (
          <li
            key={index}
            className={`group flex items-center gap-2 relative cursor-pointer capitalize font-light text-md ${
              selectedFilter === filter.currentSlug && "active-selector"
            } relative w-fit`}
            onClick={() => setSelectedFilter(filter.currentSlug)}
          >
            {selectedFilter === filter.currentSlug && (
              <span className="md:hidden absolute w-1 h-1 bg-dark rounded-full left-1/2 -translate-x-1/2 -bottom-[10px]" />
            )}
            <Image src={front_arrow} className={`hidden md:block opacity-0 md:absolute md:left-3 ${selectedFilter === filter.currentSlug && '!left-0 md:opacity-100'} md:group-hover:-left-0 md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-500 md:ease-in-out  `} alt="arrow"  width={30} height={30}/>
            <p className={` md:group-hover:ml-10 md:group-hover:font-semibold ${selectedFilter === filter.currentSlug && 'md:ml-10 md:font-semibold'} md:transition-all md:duration-500 md:ease-in-out `}>{filter.title}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenuTemplate;
