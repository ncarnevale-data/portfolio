import projectsMap from "../data/projectsMap";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Proyectos</h2>
        <div className="flex flex-wrap justify-evenly gap-6 md:gap-8">
          {projectsMap.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
