import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import skillsMap from "../data/skillsMap";

interface Props {
  name: string;
  description: string;
  logoPath: string;
  technologies: string[];
  deploy?: string;
  github?: string;
}

const ProjectCard = ({
  name,
  description,
  logoPath,
  technologies,
  deploy,
  github,
}: Props) => {
  const skillsUsed = skillsMap.filter((skill) =>
    technologies.includes(skill.name),
  );

  // bg-gradient-to-t from-slate-600 to-cyan-800

  return (
    <div className=" hover:border-brand-orange flex h-[30rem] w-[20rem] flex-wrap overflow-hidden rounded-2xl border-[3px] border-brand-cyan transition-all duration-300 hover:scale-105">
      <img
        src={`/projects/${logoPath}`}
        alt="test"
        className="h-2/5 overflow-hidden object-cover"
      ></img>
      <div className="flex  h-3/5 w-full flex-col justify-between space-y-4 p-4">
        <ul className="flex flex-wrap gap-2 text-sm">
          {skillsUsed.map(({ name, colorrgb }, index) => (
            <li
              key={index}
              className="rounded px-2.5 py-1.5"
              style={{
                backgroundColor: `rgba(${colorrgb}, 0.3)`,
                boxShadow: `0 1px rgba(${colorrgb}, 0.3) inset`,
              }}
            >
              {name}
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-xs">{description}</p>
        </div>
        <div className="flex flex-row items-center justify-evenly">
          {deploy && (
            <a
              href={deploy}
              className="flex flex-row items-center gap-1 rounded-2xl bg-slate-800 px-4 py-2 transition-colors duration-500 hover:bg-slate-900"
            >
              <h5>Deploy</h5>
              <FiLink />
            </a>
          )}
          {github && (
            <a
              href={github}
              className="flex flex-row items-center gap-1  rounded-2xl bg-slate-800 px-4 py-2 transition-colors duration-500 hover:bg-slate-900"
            >
              <h5>Repositorio</h5>
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
