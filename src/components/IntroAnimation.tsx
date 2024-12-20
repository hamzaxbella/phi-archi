"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { logo_bg, vectorL, vectorH , front_arrow } from '../../public';
const IntroAnimation = ({ loading, onEnter }: { loading: boolean; onEnter: () => void }) => {
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<HTMLSpanElement[]>([]);
  const quoteRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!loading || !logoRef.current) return;

    const tl = gsap.timeline();

    tl.to(Array.from(logoRef.current.children || []), {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 1
    })

    // Animate each letter
    letterRefs.current.forEach((letter, index) => {
      tl.to(letter, {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      }, `-=${index ? 0.35 : 0}`);
    });

    // Animate quote and button
    tl.to(Array.from(quoteRef.current?.children || []), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 1,
      ease: "power3.out"
    })
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    });

  }, [loading]);

  const handleEnter = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onEnter();
      }
    });

    tl.to(overlayRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1.5,
      ease: "power3.inOut"
    })
    .to([logoRef.current, textRef.current, quoteRef.current, buttonRef.current], {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.1
    }, 0);
  };

  if (!loading) return null;

  const text = "HLE Architecture";

  return (
    <div className="fixed inset-0 z-50">
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-[#111111]"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
        <div ref={logoRef} className='relative'>
            <Image src={logo_bg} className='w-[150px] h-[150px] opacity-0 scale-[30]' alt="HLE Architecture" width={100} height={100} />
            <Image src={vectorL} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] opacity-0 scale-[30]' alt="HLE Architecture" width={100} height={100} />
            <Image src={vectorH} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] opacity-0 scale-[30]' alt="HLE Architecture" width={100} height={100} />
        </div>
        <div 
          ref={textRef}
          className="text-[2rem] md:text-[3rem] uppercase text-white flex overflow-hidden font-thin tracking-wider"
        >
          {text.split('').map((letter, index) => (
            <span
              key={index}
              ref={el => {
                if (el) letterRefs.current[index] = el;
              }}
              className="inline-block opacity-0 translate-y-[50px] rotate-y-[90deg]"
              style={{ transformOrigin: "center" }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
        <div ref={quoteRef} className='flex flex-col gap-4 text-white text-center uppercase font-thin tracking-wider'> 
          <p className='text-md md:text-lg opacity-0 translate-y-[20px]'>ÉCOUTER | ÉDITER | Innover</p>
          <p className='text-md md:text-lg opacity-0 translate-y-[20px]'>rabat | paris</p>
        </div>
        <button 
          ref={buttonRef}
          onClick={handleEnter}
          className="group text-white hover:bg-white hover:text-dark hover:bg-opacity-90 flex gap-4 border-[.5px] border-opacity-70 border-white rounded-full justify-center items-center py-4 px-12 opacity-0 "
        >
          <p className='text-lg font-thin tracking-wider'>Entrer</p>
          <Image src={front_arrow} className='w-[35px] h-[20px] invert group-hover:invert-0' alt="HLE Architecture" width={100} height={100} />
        </button>
      </div>
    </div>
  );
};

export default IntroAnimation;