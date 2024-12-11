import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

const TeamMember = ({ item, locale }) => {
  const href = `/${locale}/Agency/Team/${item.slug.current}`;
  
  return (
    <div className="translate-y-[25px] opacity-0 text-center flex flex-col items-center justify-center gap-2">
      <Link href={href} className="ring-1 ring-dark  ring-opacity-25 rounded-full h-[120px] w-[120px] overflow-hidden">
        <Image
          className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          src={urlFor(item.image).url()}
          alt={item.team_member}
          width={300}
          height={300}
        />
      </Link>
      <h3 className="text-lg font-bold">{item.name[locale]}</h3>
      <p>{item.occupation[locale]}</p>
    </div>
  );
};

export default TeamMember;
