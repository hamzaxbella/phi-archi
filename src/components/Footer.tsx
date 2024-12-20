'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
const Footer = () => {

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(".credits-text", { opacity: 0, duration: 0.5 })
      .to(".credits-text", { text: "zyllux digital", opacity: 1, duration: 0.5 })
      .to(".credits-text", { opacity: 0, duration: 0.5 })
      .to(".credits-text", { text: "credits", opacity: 1, duration: 0.5 });
    
    return () => {
      tl.kill(); // Cleanup on unmount
    }; // Ensure this returns void
  }, []);

  return (
    <footer className="max-container w-full relative flex flex-col md:flex-row justify-center items-center h-100px text-center">
      <p className="md:py-2">© 2024 HlE Architectes. All rights reserved.</p>
      <div className="flex justify-center items-center pb-2">
        <Link href="https://www.instagram.com/hamzaxbella/" target='_blank' className=" md:absolute right-2 text-sm font-light Link capitalize ">design by <span className="font-bold">zyllux digital</span> </Link>
      </div>
    </footer>
  )
}

export default Footer