'use client'
// Import necessary dependencies
import React, { useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap' // For animations
import Link from 'next/link'
import Image from 'next/image'

// Define the Press item interface
interface Press {
  title: string
  slug: string
  image: string
  description: string
  content: string
}

const PressListTemplate = ({press, locale}) => {
  // State for managing visible press items and pagination
  const [visiblePress, setVisiblePress] = useState<Press[]>([])
  const [page, setPage] = useState(1)
  const pressPerPage = 4 // Number of items to show per page
  const loaderRef = useRef<HTMLDivElement>(null) // Reference for infinite scroll loader
  const gridRef = useRef<HTMLDivElement>(null) // Reference for the grid container
  const prevPressCount = useRef(0) // Track previous number of items for animation

  // Function to group press items into rows of alternating sizes (1 and 2 columns)
  const groupPress = (press: Press[]): Press[][] => {
    const groups: Press[][] = [];
    let i = 0;
    while (i < press.length) {
      const isOddRow = groups.length % 2 === 0;
      const groupSize = isOddRow ? 1 : 2; // Alternate between 1 and 2 items per row
      groups.push(press.slice(i, i + groupSize));
      i += groupSize;
    }
    return groups;
  };

  // Update visible press items when page changes
  useEffect(() => {
    setVisiblePress(press.slice(0, page * pressPerPage))
  }, [page, press])

  // Animation effect for newly loaded press items
  useEffect(() => {
    if (!gridRef.current) return
    const press = Array.from(gridRef.current.children)
    const newPress = press.slice(prevPressCount.current) // Get only new items

    if (newPress.length > 0) {
      // Animate new items with fade in and scale effect
      gsap.fromTo(newPress, 
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
      )
    }
    prevPressCount.current = press.length
  }, [visiblePress])

  // Intersection Observer callback for infinite scroll
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && visiblePress.length < press.length) {
      setPage((prev) => prev + 1); // Load more items when reaching bottom
    }
  }, [visiblePress, press])

  // Set up Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 0
    })

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()
  }, [handleObserver])

  const groups = groupPress(visiblePress);
  
  return (
    <>
      {/* Main grid container */}
      <div ref={gridRef} className="grid gap-4 mt-4 md:mx-2 md:my-4 lg:mx-12">
        {groups.map((group, idx) => (
          <div
            key={idx}
            className={`grid gap-4 ${group.length === 1 ? "grid-cols-1" : "md:grid-cols-2"}`}
          >
            {group.map((pressItem) => {
              const href = `/${locale}/PressMedia/${pressItem.slug}`;
              return (
                // Press item card with hover effects
                <Link
                  href={href}
                  key={pressItem.slug}
                  className="group relative bg-white h-[200px] md:h-[300px] ring-dark ring-opacity-15 ring-1 overflow-hidden rounded-lg shadow-md"
                >
                  {/* Press item image with hover zoom effect */}
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    src={pressItem.image}
                    alt={pressItem.title}
                    width={1000}
                    height={1000}
                  />
                  {/* Overlay with title and description */}
                  <div className='z-10 left-0 top-0 absolute w-full h-full bg-black/20 flex flex-col justify-between  py-4 px-2 md:py-8 md:px-4'>
                    <h1 className='font-medium uppercase text-white text-2xl max-w-[30ch] tracking-wide'>{pressItem.title[locale]}</h1>
                    <p className='font-light text-white text-sm'>{pressItem.description[locale]}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      {/* Infinite scroll loader element */}
      <div ref={loaderRef} className="h-10" />
    </>
  )
}

export default PressListTemplate