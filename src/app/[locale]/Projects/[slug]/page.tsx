import { getProject } from "@/lib/ProjectHelper";
import PageTitle from "@/components/PageTitle";
import ProjectDetails from "@/components/projectComponents/ProjectDetails";
import ProjectGallery from "@/components/projectComponents/ProjectGallery";
import Wrapper from "@/components/Wrapper";

export default async function SingleProject({ params }) {
  // Await params to ensure it is resolved
  const { slug, locale } = params as { slug: string; locale: string };

  const project = await getProject(slug);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Wrapper
      path={"./Projects"}
      locale={locale}
      PageTitle={<PageTitle label={project.title?.[locale]} />}
      side={<ProjectDetails project={project} locale={locale} />}
      main={<ProjectGallery project={project} />}
    />
  );
}
