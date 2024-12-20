"use client";
import { Testimonial } from "@/lib/interface";
import { useState, useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper"; // Import Swiper class for typing
import "swiper/css";
import Image from "next/image";
import { ctr_left, ctr_right, quote_left, quote_right } from "../../../../public";

interface TestimonialsProps {
  locale: string;
  testimonials: Testimonial[];
}

const TestimonialsTemplate = ({ locale, testimonials }: TestimonialsProps) => {
  const isRtl = locale === 'ar';
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false); // State to track grabbing
  const [currentIndex, setCurrentIndex] = useState<number>(0); // State to track current testimonial index

  const handleMouseDown = () => setIsGrabbing(true); // On mouse down, set grabbing
  const handleMouseUp = () => setIsGrabbing(false); // On mouse up, reset grabbing

  const updateIndex = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    if (swiperRef.current) {
      swiperRef.current.slideTo(newIndex);
      updateIndex(newIndex);
    }
  };

  const handleNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    if (swiperRef.current) {
      swiperRef.current.slideTo(newIndex);
      updateIndex(newIndex);
    }
  };

  return (
    <div className="my-12">
      <h1 dir={isRtl ? 'rtl' : 'ltr'} className="my-6 text-2xl text-dark font-semibold">{locale === 'ar' ? 'ماذا يقولون عنا :' : 'Ce qu\'ils disent de nous'}</h1>
      <Swiper
        className={` transition-all duration-200 ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; 
          swiper.on('slideChange', () => {
            updateIndex(swiper.activeIndex);
          });
        }} // Swiper instance
        onTouchStart={handleMouseDown} // For touch devices
        onTouchEnd={handleMouseUp}
        pagination={{ clickable: true }}
        onMouseDown={handleMouseDown} // For desktop (mouse grab)
        onMouseUp={handleMouseUp} // For desktop (mouse release)
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
        {testimonials.map((testimo, idx) => (
          <SwiperSlide className="relative mt-5" key={idx}>
            <div className="bg-background lg:bg-white px-8 py-4 rounded-3xl">
              <p dir={`${isRtl && 'rtl'}`} className={`${'text-justify'}`}><span className="text-dark font-bold">{`"`}</span>{testimo.testimonial?.[locale]}<span className="text-dark font-bold">{`"`}</span></p>
              <h3 dir={`${isRtl && 'rtl'}`} className="font-bold mt-4 text-sm">{testimo.person?.[locale] || "Unknown Author"}</h3>
            </div>
            <Image alt="quote-left" src={quote_left} width={30} height={30} className="absolute z-50 top-0 left-0 -translate-y-1/2" />
            <Image alt="quote-right" src={quote_right} width={30} height={30} className="absolute z-50 bottom-0 right-0 translate-x-1/2 " />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`relative flex gap-4 items-center mt-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
        <button onClick={handlePrev} className="bg-dark text-white p-2 rounded"><Image src={ctr_left} alt="arrow-left" width={20} height={20} /></button>
        <p>{currentIndex + 1} / {testimonials.length}</p>
        <button onClick={handleNext} className="bg-dark text-white p-2 rounded"><Image src={ctr_right} alt="arrow-right" width={20} height={20} /></button>
      </div>
    </div>
  );
};

export default TestimonialsTemplate;
