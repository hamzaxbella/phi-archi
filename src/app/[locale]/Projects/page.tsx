import PageTitle from "@/components/PageTitle";
import ProjectsGrid from "@/components/projectComponents/ProjectsGrid/ProjectsGrid";
import SideMenu from "@/components/SideMenu/SideMenu";
import Wrapper from "@/components/Wrapper";

export default async function Projects({ params }) {
  const { locale } = await params;

  return (
    <Wrapper
      path={"/"}
      locale={locale}
      PageTitle={<PageTitle label={{en: "projects", fr: "projets", ar: "المشاريع"}} locale={locale} />}
      side={<SideMenu locale={locale} />}
      main={<ProjectsGrid locale={locale} />}
    />
  );
}
