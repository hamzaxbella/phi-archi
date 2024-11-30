import BackButton from "@/components/BackButton";
import InvertedLayer from "@/components/InvertedLayer";
import PageTitle from "@/components/PageTitle";
import ProjectsGrid from "@/components/projectComponents/ProjectsGrid/ProjectsGrid";
import SideMenu from "@/components/SideMenu/SideMenu";

export default async function Projects({ params }) {
  const { locale } = await params;

  return (
    <section className="max-container margin-x md:remaining-height ">
      <div id="wrapper" className="md:px-4 md:pt-6 pt-4 min-remaining-height">
        <div className="flex flex-col md:h-full md:flex-row gap-6">
          <div className="md:w-[280px] md:h-5/6 ">
            <PageTitle label={"PROJECTS."} />
            <SideMenu />
          </div>
          <div className="md:flex-1 md:overflow-y-scroll ">
            <ProjectsGrid locale={locale} />
          </div>
        </div>
        <InvertedLayer />
        <BackButton path={`/${locale}`} />
      </div>
    </section>
  );
}
