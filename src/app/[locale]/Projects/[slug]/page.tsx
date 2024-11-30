import { getProject } from "@/lib/ProjectHelper";
import InvertedLayer from "@/components/InvertedLayer";
import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
import ProjectDetails from "@/components/projectComponents/ProjectDetails";
import ProjectGallery from "@/components/projectComponents/ProjectGallery";


export default async function SingleProject({
  params,
}) {
  // Await params to ensure it is resolved
  const { slug, locale } = params as { slug: string; locale: string };

  const project = await getProject(slug);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="max-container margin-x md:remaining-height ">
      <div id="wrapper" className="md:px-4 md:pt-6 pt-4 min-remaining-height">
        <div className="flex flex-col md:h-full md:flex-row gap-6">
          <div className="md:w-[280px] md:h-5/6 ">
            <PageTitle label={project.title?.[locale]} />
            <ProjectDetails project={project} locale={locale} />
          </div>
          <div className="md:flex-1 md:overflow-y-scroll">
            <ProjectGallery project={project} />
          </div>
        </div>
        <InvertedLayer />
        <BackButton path={`./`} />
      </div>
    </section>
  );
}
