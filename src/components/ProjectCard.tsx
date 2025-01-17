import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import skillsMap from "../data/skillsMap";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { Project } from "../data/projectsMap";
import { getTranslatedText } from "../utils";
import { useTranslation } from "react-i18next";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {
    name,
    description,
    logoPath,
    technologies,
    deploy,
    github,
    professional,
  } = project;

  const skillsUsed = skillsMap.filter((skill) =>
    technologies.includes(skill.name),
  );

  // bg-gradient-to-t from-slate-600 to-cyan-800

  return (
    <>
      <div
        className="group flex h-[30rem] w-[24rem] cursor-pointer flex-wrap overflow-hidden rounded-2xl border-[3px] border-brand-cyan transition-all duration-300 hover:scale-105 hover:border-brand-orange"
        onClick={() => setModalIsOpen(true)}
        onKeyDown={() => setModalIsOpen(true)}
      >
        <div className="relative h-[45%] overflow-hidden">
          <img
            src={`projects/${logoPath}`}
            alt="test"
            className="w-full object-cover"
          ></img>
          <div className="absolute right-0 top-4 rounded-bl-lg rounded-tl-lg bg-brand-green py-2 pl-2 pr-1 text-base font-semibold text-brand-lavender transition-all duration-300 group-hover:bg-brand-orange group-hover:text-brand-darkblue md:pl-4 md:pr-3 md:text-lg">
            {professional ? t("professional") : "Personal"}
          </div>
        </div>
        <div className="flex h-[55%] w-full flex-col justify-between space-y-4 p-4">
          <ul className="flex flex-wrap gap-2 text-sm">
            {skillsUsed.map(({ name, colorrgb }) => (
              <li
                key={name}
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
            <h3 className="text-lg font-bold transition-all duration-300 group-hover:text-brand-orange">
              {getTranslatedText(name)}
            </h3>
            <p className="text-xs">{getTranslatedText(description)}</p>
          </div>
          <div className="flex flex-row items-center justify-evenly">
            {deploy && (
              <a
                href={deploy}
                target="_blank"
                className="flex flex-row items-center gap-1 rounded-2xl bg-slate-800 px-4 py-2 transition-colors duration-500 hover:bg-slate-900"
              >
                <h5>Deploy</h5>
                <FiLink />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                className="flex flex-row items-center gap-1 rounded-2xl bg-slate-800 px-4 py-2 transition-colors duration-500 hover:bg-slate-900"
              >
                <h5>{t("repository")}</h5>
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
      <ProjectModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        project={project}
      />
    </>
  );
};

export default ProjectCard;
