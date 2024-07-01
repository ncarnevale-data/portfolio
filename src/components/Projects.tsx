import projectsMap from "../data/projectsMap";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="mx-auto  max-w-7xl" id="projects">
      <div className="p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Proyectos</h2>
        <div className="flex flex-wrap gap-10">
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
    </section>
  );
};

export default Projects;
