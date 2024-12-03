import PageTitle from "@/components/PageTitle";
import SideNav from "@/components/SideNav";
import Wrapper from "@/components/Wrapper";
import React from "react";

const links = [
  { label: "About Us", url: "/Agency/" },
  { label: "Our Philosophy", url: "/Agency/OurPhilosophy" },
  { label: "Team", url: "/Agency/Team" },
]

export default async function layout  ({ params , children }) {
  const { locale } = await params;
  return (
    <Wrapper
      locale={locale}
      path={"/"}
      PageTitle={<PageTitle label="Agency" />}
      side={<SideNav links={links} locale = {locale} />}
      main={children}
    />
  );
};

