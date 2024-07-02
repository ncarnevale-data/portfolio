import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Socials = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <a href="https://github.com/ncarnevale-data/" target="_blank">
        <FaGithub className="h-8 w-8 transition-colors duration-300 hover:text-brand-orange" />
      </a>
      <a
        href="https://www.linkedin.com/in/nicol%C3%A1s-carnevale-b7362224a/"
        target="_blank"
      >
        <FaLinkedin className="h-8 w-8 transition-colors duration-300 hover:text-brand-orange" />
      </a>
      <a href="mailto:ncarnevaledata@gmail.com" target="_blank">
        <MdOutlineEmail className="h-8 w-8 transition-colors duration-300 hover:text-brand-orange" />
      </a>
    </div>
  );
};

export default Socials;
