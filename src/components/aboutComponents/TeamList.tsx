'use client'
import TeamMember from "./TeamMember";
import { useEffect } from "react";
import gsap from "gsap";

const TeamListTemplate = ({ locale, team }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".team-member", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 my-8 lg:grid-rows-3 gap-4">
      {team.map((item, idx) => (
        <div 
          key={idx} 
          className="team-member translate-y-[25px] opacity-0"
        >
          <TeamMember item={item} locale={locale} />
        </div>
      ))}
    </div>
  );
};

export default TeamListTemplate;
