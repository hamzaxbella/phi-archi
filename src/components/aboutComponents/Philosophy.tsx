// Client-side component for displaying philosophy slides with animations
"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { PhiloSlides } from "@/app/[locale]/constants";
import Image from "next/image";
import { ctr_left, ctr_right } from "../../../public";

// Props interface for Philosophy component
interface PhilosophyProps {
  locale: string;
}

// Interface for DOM elements used in animations
interface AnimationElements {
  firstChild: Element | null;
  secondChild: Element | null;
  textHolder: Element | null;
  description: Element | null;
  slideNav: Element | null;
}

// Animation configuration constants
const ANIMATION_CONFIG = {
  DURATION: 1.2,
  EASE: "power3.inOut",
  CLIP_PATH: {
    HIDDEN_TOP: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    HIDDEN_LEFT: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    HIDDEN_BOTTOM: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    VISIBLE: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
} as const;

const Philosophy: React.FC<PhilosophyProps> = ({ locale }) => {
  // State for tracking current slide and animation status
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isRtl = locale === 'ar';

  // Get references to DOM elements needed for animations
  const getAnimationElements = useCallback((): AnimationElements => {
    if (!containerRef.current) {
      return {
        firstChild: null,
        secondChild: null,
        textHolder: null,
        description: null,
        slideNav: null,
      };
    }

    return {
      firstChild: containerRef.current.querySelector(".first-child"),
      secondChild: containerRef.current.querySelector(".second-child"),
      textHolder: containerRef.current.querySelector(".text-holder"),
      description: containerRef.current.querySelector(".description"),
      slideNav: containerRef.current.querySelector(".slide-nav"),
    };
  }, []);

  // Create GSAP animation timeline based on direction (in/out)
  const createAnimation = useCallback((direction: "in" | "out") => {
    const elements = getAnimationElements();
    if (!elements.firstChild) return null;

    const tl = gsap.timeline();
    const { DURATION, EASE, CLIP_PATH } = ANIMATION_CONFIG;

    if (direction === "in") {
      // Animate elements in
      tl.fromTo(
        elements.firstChild,
        { clipPath: CLIP_PATH.HIDDEN_TOP },
        { clipPath: CLIP_PATH.VISIBLE, duration: DURATION, ease: EASE }
      )
        .fromTo(
          elements.secondChild,
          { clipPath: CLIP_PATH.HIDDEN_LEFT },
          { clipPath: CLIP_PATH.VISIBLE, duration: DURATION, ease: EASE },
          0
        )
        .fromTo(
          elements.textHolder,
          { y: 75 },
          { y: 0, duration: DURATION, ease: EASE },
          0
        )
        .fromTo(
          elements.description,
          { y: 75, opacity: 0 },
          { y: 0, opacity: 1, duration: DURATION, ease: EASE },
          0
        );
      tl.fromTo(
        elements.slideNav,
        { opacity: 0, duration: DURATION, ease: EASE, x: -20 },
        { opacity: 1, duration: DURATION, ease: EASE, x: 0 },
        0
      );
    } else {
      // Animate elements out
      tl.to(elements.textHolder, { y: 75, duration: DURATION, ease: EASE }, 0)
        .to(
          elements.description,
          { y: 75, opacity: 0, duration: DURATION, ease: EASE },
          0
        )
        .to(
          elements.firstChild,
          { clipPath: CLIP_PATH.HIDDEN_BOTTOM, duration: DURATION, ease: EASE },
          0
        )
        .to(
          elements.secondChild,
          { clipPath: CLIP_PATH.HIDDEN_LEFT, duration: DURATION, ease: EASE },
          0
        )
        .to(
          elements.slideNav,
          { opacity: 0, duration: 1, ease: EASE, x: -20 },
          0
        );
    }

    return tl;
  }, [getAnimationElements]);

  // Handle slide changes (next/prev)
  const changeSlide = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating || !containerRef.current) return;
      setIsAnimating(true);

      const animation = createAnimation("out");
      if (!animation) return;

      animation.then(() => {
        setCurrentSlide((prev) =>
          direction === "next"
            ? (prev + 1) % PhiloSlides.length
            : (prev - 1 + PhiloSlides.length) % PhiloSlides.length
        );
        setIsAnimating(false);
      });
    },
    [isAnimating, createAnimation]
  );

  // Trigger animation when slide changes
  useEffect(() => {
    if (!isAnimating) {
      createAnimation("in");
    }
  }, [currentSlide, isAnimating, createAnimation]);

  // Get current slide content based on locale
  const currentPhiloSlide = PhiloSlides[currentSlide];
  const slideTitle = currentPhiloSlide.title[locale];
  const slideDescription = currentPhiloSlide.description[locale];

  return (
    <div
      ref={containerRef}
      className="relative  overflow-hidden md:px-8 w-full h-full flex flex-col gap-12 justify-center items-center"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex lg:flex-row flex-col  justify-center items-center h-full">
        {/* Image container */}
        <div className="first-child flex-1 h-[95%] md:max-h-[1000px] max-h-[300px] overlay-clip flex justify-center items-center text-white text-2xl">
          <Image
            src={currentPhiloSlide.image}
            className="h-full w-full object-cover"
            alt={`Philosophy - ${slideTitle}`}
            width={1000}
            height={1000}
            priority
          />
        </div>
        {/* Text content container */}
        <div className={`relative second-child flex-1 h-[90%] flex-col lg:overflow-y-auto pt-5 lg:pt-12 bg-dark px-6 overlay-clip flex text-xl -translate-y-[150px] lg:translate-y-0 max-w-[320px] lg:max-w-[600px] ${isRtl ? 'lg:translate-x-[20px]' : 'lg:-translate-x-[20px]'}`}>
          <div className="text-clip">
            <div className="text-holder">
              <h1 className="text-4xl font-thin text-white">{slideTitle}</h1>
            </div>
          </div>
          <p className="font-extralight text-[12px] lg:text-[14px] text-justify text-white py-5 description">
            {slideDescription}
          </p>
        </div>
        {/* Navigation buttons */}
        <nav
          className={`flex flex-row md:flex-col justify-between absolute ${isRtl ? 'left-0' : 'right-0'} top-1/2 slide-nav  lg:h-[calc(90%)] -translate-y-1/2`}
          aria-label="Slide Navigation"
        >
          {["prev", "next"].map((direction) => (
            <button
              key={direction}
              onClick={() => changeSlide(direction as "prev" | "next")}
              className="w-[50px] h-[50px] flex justify-center items-center text-white bg-[#353535] hover:bg-[#454545] transition-colors"
              disabled={isAnimating}
              aria-label={`${direction === "prev" ? "Previous" : "Next"} slide`}
            >
              <Image
                className={`rotate-90 ${isRtl ? 'rotate-180' : ''}`}
                src={direction === "prev" ? ctr_left : ctr_right}
                alt={direction === "prev" ? "Previous" : "Next"}
                width={30}
                height={30}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Philosophy;
