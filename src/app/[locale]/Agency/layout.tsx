import PageTitle from "@/components/PageTitle";
import SideNav from "@/components/SideNav";
import Wrapper from "@/components/Wrapper";
import React from "react";

const links = [
  { 
    label: {
      en: "About Us",
      fr: "À propos",
      ar: "من نحن"
    }, 
    url: "/Agency/" 
  },
  { 
    label: {
      en: "Our Philosophy",
      fr: "Notre Philosophie", 
      ar: "فلسفتنا"
    },
    url: "/Agency/OurPhilosophy"
  },
  { 
    label: {
      en: "Team",
      fr: "Équipe",
      ar: "الفريق"
    },
    url: "/Agency/Team"
  },
]

export default async function layout  ({ params , children }) {
  const { locale } = await params;
  return (
    <div className={`${locale === 'ar' && 'font-cairo' }`}>
      <Wrapper
        locale={locale}
        path={"/"}
        PageTitle={<PageTitle label={{ en: "Agency", fr: "Agence", ar: "وكالة" }} locale={locale} />}
        side={<SideNav links={links} locale={locale} />}
        main={children}
      />
    </div>
  );
};
