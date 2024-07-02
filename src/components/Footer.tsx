import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "./Section";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <Section id="footer" animation={false} bgColor="blue" textColor="white">
      <div className="flex flex-row items-center justify-between p-8">
        <p>
          {`© ${year}`} <span className="font-bold">Nicolás Carnevale</span>
        </p>
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
      </div>
    </Section>
  );
};

export default Footer;
