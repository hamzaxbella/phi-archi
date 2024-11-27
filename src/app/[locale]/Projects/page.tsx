import BackButton from "@/components/BackButton";
import InvertedLayer from "@/components/InvertedLayer";
import PageTitle from "@/components/PageTitle";
import ProjectsGrid from "@/components/projectComponents/ProjectsGrid/ProjectsGrid";
import SideMenu from '@/components/SideMenu/SideMenu'


const Projects = () => {

  
  return (
    <section className="max-container margin-x remaining-height ">
      <div id="wrapper" className="md:px-4 lg:px-8 lg:pt-6 pt-4">
        
        <div>
          <PageTitle label={"PROJECTS."} />
          <SideMenu />
        </div>
        <div>
          <ProjectsGrid />
        </div>
        <InvertedLayer />
        <BackButton />
      </div>
    </section>
  );
};

export default Projects;
