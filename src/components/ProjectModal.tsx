import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import Modal from "react-modal";
import skillsMap from "../data/skillsMap";

interface Props {
  isOpen: boolean;
  onRequestClose: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void;
  name: string;
  description: string;
  logoPath: string;
  technologies: string[];
  extraDesc?: string;
  imgPaths?: string[];
  paragraphs?: string[];
  deploy?: string;
  github?: string;
}

const ProjectModal = ({
  isOpen,
  onRequestClose,
  name,
  description,
  logoPath,
  extraDesc,
  technologies,
  imgPaths,
  paragraphs,
  deploy,
  github,
}: Props) => {
  const skillsUsed = skillsMap.filter((skill) =>
    technologies.includes(skill.name),
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={name}
      className="absolute bottom-auto left-1/2 right-auto top-1/2 mr-[-50%] max-h-[480px] w-[320px] -translate-x-2/4 -translate-y-2/4 
                transform overflow-y-scroll rounded border border-brand-orange outline-none md:max-h-[640px] md:w-[760px] lg:max-h-[920px] lg:w-[920px]"
      overlayClassName="fixed top-0 right-0 bottom-0 left-0 bg-brand-black/50 z-50"
    >
      <div className="mx-auto flex w-full flex-col gap-8 bg-brand-darkblue p-8 text-brand-lavender">
        <div className="space-y-2">
          <img className="w-full" src={`/projects/${logoPath}`} alt={name} />
          <ul className="flex flex-wrap gap-2 text-base">
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
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold">{name}</h1>
          <p>{description}</p>
        </div>
        <div className="flex flex-row items-center justify-evenly">
          {deploy && (
            <a
              href={deploy}
              target="_blank"
              className="flex flex-row items-center gap-1 rounded-2xl bg-slate-800 px-4 py-2 text-lg transition-colors duration-500 hover:bg-slate-900"
            >
              <h5>Deploy</h5>
              <FiLink />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex flex-row items-center gap-1 rounded-2xl bg-slate-800 px-4 py-2 text-lg transition-colors duration-500 hover:bg-slate-900"
            >
              <h5>Repositorio</h5>
              <FaGithub />
            </a>
          )}
        </div>
        {extraDesc && <p>{extraDesc}</p>}
        {imgPaths?.map((path, index) => (
          <div className="space-y-8" key={index}>
            <img className="w-full" src={`/projects/${path}`} />
            {paragraphs && paragraphs[index] && <p>{paragraphs[index]}</p>}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ProjectModal;
