'use client'
import Image from "next/image";
import { motif } from "../../public";
import { useEffect } from "react";
import gsap from "gsap";

const Motifs = () => {
  useEffect(() => {
    gsap.to(".motif", { opacity: 1, y: 0, duration: 1 , delay : 1 });
  }, []);

  return (
    <>
      <Image
        alt="motif"
        width={1000}
        height={1000}
        src={motif}
        className="motif  z-[-1] w-[250px] hidden lg:block absolute top-[80px] left-4 opacity-0 translate-y-10"
      />
      <Image
        alt="motif"
        width={1000}
        height={1000}
        src={motif}
        className="motif z-[-1] w-[250px] hidden lg:block absolute bottom-[80px] right-4 opacity-0 translate-y-10"
      />
    </>
  );
};

export default Motifs;