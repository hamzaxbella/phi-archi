"use client";
import { Testimonial } from "@/lib/interface";
import { useState, useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper"; // Import Swiper class for typing
import "swiper/css";
import Image from "next/image";
import { quote_left, quote_right } from "../../../../public";

interface TestimonialsProps {
  locale: string;
  testimonials: Testimonial[];
}

const TestimonialsTemplate = ({ locale, testimonials }: TestimonialsProps) => {
  const isRtl = locale === 'ar'
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false); // State to track grabbing
  
  const handleMouseDown = () => setIsGrabbing(true); // On mouse down, set grabbing
  const handleMouseUp = () => setIsGrabbing(false); // On mouse up, reset grabbing
  return (
    <div className="my-12">
      <h1 className="my-6 text-2xl text-dark font-semibold">Ce qu&apos;ils disent de nous</h1>
      <Swiper
        className={` transition-all duration-200 ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper instance
        onTouchStart={handleMouseDown} // For touch devices
        onTouchEnd={handleMouseUp}
        pagination={{ clickable: true }}
        onMouseDown={handleMouseDown} // For desktop (mouse grab)
        onMouseUp={handleMouseUp} // For desktop (mouse release)}
        breakpoints={{
          // When the window width is >= 320px (mobile)
          320: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          // When the window width is >= 768px (tablet/desktop)
          768: {
            slidesPerView: 1.25,
            spaceBetween: 50,
          },
        }}
      >
        {testimonials.map((testimo , idx) => (
          <SwiperSlide className="relative mt-5 " key={idx}>
            <div  className="bg-background lg:bg-white px-8 py-4 rounded-3xl">
              <p dir={`${isRtl && 'rtl'}`} className={`${'text-justify'}`}><span className="text-dark font-bold">{`"`}</span>{testimo.testimonial?.[locale]}<span className="text-dark font-bold">{`"`}</span></p>
              <h3 dir={`${isRtl && 'rtl'}`}  className="font-bold mt-4 text-sm">{testimo.person?.[locale] || "Unknown Author"}</h3>
            </div>
            <Image alt="quote-left" src={quote_left} width={30} height={30} className="absolute z-50 top-0 left-0  -translate-y-1/2" />
            <Image alt="quote-right" src={quote_right} width={30} height={30} className="absolute z-50 bottom-0 right-0 translate-x-1/2 " />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default TestimonialsTemplate;
