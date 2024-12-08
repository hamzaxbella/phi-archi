"use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { PhiloSlides } from "@/app/[locale]/constants";

const Philosophy = ({ locale }: { locale: string }) => {
  console.log(locale)
  // // const [currentSlide, setCurrentSlide] = useState<number>(0);
  // // const [isAnimating, setIsAnimating] = useState<boolean>(false);
  // const container = useRef<HTMLDivElement | null>(null);
  // const timeline = useRef<gsap.core.Timeline | null>(null);

  // // initialize GSAP animation
  // const setupTimeline = () => {
  //   if (!container.current) return;
  //   timeline.current = gsap.timeline({ paused: true });
  //   timeline.current
  //     .fromTo(
  //       container.current.querySelector(".first-child"),
  //       { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
  //       {
  //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //         duration: 1.5,
  //         ease: "power4.inOut",
  //       }
  //     )
  //     .fromTo(
  //       container.current.querySelector(".second-child"),
  //       { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
  //       {
  //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //         duration: 1.5,
  //         ease: "power4.inOut",
  //       },
  //       0
  //     );
  // };

  // // Play entrance animation for the current slide
  // const playEntranceAnimation = () => {
  //   if (timeline.current) {
  //     timeline.current.restart();
  //   }
  // };

  // // On Mount: setup animations and play entrace animation
  // useEffect(() => {
  //   setupTimeline();
  //   playEntranceAnimation();
  // }, []);

  // // Play entrance animation on slide change
  // useEffect(() => {
  //   if(!isAnimating) playEntranceAnimation();
  // }, [currentSlide, isAnimating, playEntranceAnimation]);

  return <div>Philosophy</div>;
};

export default Philosophy;
