import Link from "next/link";
import Image from "next/image";
import { Navigators } from "@/app/[locale]/constants";
const Navigator = ({ locale, isRtl }) => {
  return (
    <div
      className={`grid h-full grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-6 py-3 `}
    >
      {Navigators.map((nav , index) => (
        <Link
          key={index}
          href={`./${locale}${nav.path}`}
          className="relative overflow-hidden rounded-xl w-full h-[1fr] bg-blue-300 first-of-type:col-span-2 first-of-type:row-span-2 md:first-of-type:col-span-1 md:first-of-type:row-span-2 "
        >
          <Image
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            src={nav.image}
            alt=""
            width={1000}
            height={1000}
          />
          <h1
            className={`absolute top-4 ${isRtl ? "right-4" : "left-4"} text-xl font-semibold text-blue-50 z-[2]`}
          >
            {nav.title.find((t) => t[locale])?.[locale] || "Default Title"}
          </h1>
          <div className="bg-black opacity-20 w-full h-full absolute top-0 left-0 z-[1] pointer-events-none" />
        </Link>
      ))}
    </div>
  );
};

export default Navigator;
