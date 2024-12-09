"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper"; // Import Swiper class for typing
import "swiper/css";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { ctr_left } from "../../../../public";
import { ctr_right } from "../../../../public";

interface ImageAsset {
  _ref: string;
  asset: {
    _ref: string;
  };
  alt?: string;
}

interface PhotoGalleryTemplateProps {
  images: ImageAsset[];
}

const PhotoGalleryTemplate = ({ images }: PhotoGalleryTemplateProps) => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const SwiperRef = useRef<SwiperClass | null>(null);
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleMouseDown = (): void => setIsGrabbing(true);
  const handleMouseUp = (): void => setIsGrabbing(false);

  const handleImageClick = (event: React.MouseEvent): void => {
    event.preventDefault();
  };

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

  return (
    <div className="mb-12">
      <h1 className="my-6 text-2xl text-dark font-semibold">
        Gallery De photos:
      </h1>
      <div ref={galleryRef} className="relative my-6 mx-12 ">
        <Swiper
          className={`rounded-3xl overflow-hidden transition-all duration-200 ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
          onSwiper={(swiper) => (SwiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          breakpoints={{
            1: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {images.map((img, idx) => {
            const ref = img.asset._ref;
            const dimensionsMatch = ref.match(/-(\d+)x(\d+)-/);
            const width = dimensionsMatch
              ? parseInt(dimensionsMatch[1], 10)
              : 900;
            const height = dimensionsMatch
              ? parseInt(dimensionsMatch[2], 10)
              : 900;

            return (
              <SwiperSlide key={idx}>
                <a
                  href={urlFor(img.asset).url()}
                  data-pswp-width={width}
                  data-pswp-height={height}
                  className="w-[200px] h-[200px]"
                  onClick={handleImageClick}
                >
                  <Image
                    src={urlFor(img.asset).url()}
                    className="w-full h-[400px] object-cover"
                    alt={img.alt || "Image"}
                    width={width}
                    height={height}
                  />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Image
          className="bg-dark z-10 absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg cursor-pointer hover:scale-110 transition-all duration-300"
          src={ctr_left}
          width={50}
          height={50}
          alt="control-left"
          onClick={() => {
            SwiperRef.current?.slidePrev();
          }}
        />
        <Image
          className="bg-dark z-10 absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rounded-lg cursor-pointer hover:scale-110 transition-all duration-300"
          src={ctr_right}
          width={50}
          height={50}
          alt="control-right"
          onClick={() => {
            SwiperRef.current?.slideNext();
          }}
        />
      </div>
      <div className="flex justify-center items-center gap-0 ">
        {Array.from({ length: images.length }).map((_, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="w-[1px] h-[15px] -rotate-12 bg-dark opacity-85" />
            <div className={`relative py-2 cursor-pointer`}>
              <div className={`${currentSlide === i && '!font-bold opacity-100'} absolute left-1/2 -translate-x-1/2 font-extralight text-sm opacity-60`}>{i}</div>
              <div className={`transition-all duration-300 w-[40px] h-[1px] bg-dark opacity-85`} />
            </div>
          </div>
        ))}
        <div className="w-[1px] h-[15px] -rotate-12 bg-dark opacity-85" />
      </div>
    </div>
  );
};

export default PhotoGalleryTemplate;
