import projectsMap from "../data/projectsMap";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Proyectos</h2>
        <div className="flex flex-wrap justify-evenly gap-6 md:gap-8">
          {projectsMap.map(
            (
              { name, description, logoPath, technologies, deploy, github },
              index,
            ) => (
              <ProjectCard
                key={index}
                name={name}
                description={description}
                logoPath={logoPath}
                technologies={technologies}
                deploy={deploy}
                github={github}
              />
            ),
          )}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
