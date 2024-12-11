'use client'
import TeamMember from "./TeamMember"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const TeamListTemplate = ({locale , team}) => {
  const teamRef = useRef(null)

  useEffect(() => {
    if (!teamRef.current) return;
    const teamMembers = teamRef.current
    
    gsap.to(teamMembers, 
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      },
    )
  }, [])

  return (
    <div ref={teamRef} className="w-full h-full grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4">
        {team.map((item  , idx) => (
            <TeamMember key={idx} item={item} locale={locale} />
        ))}
    </div>
  )
}

export default TeamListTemplate