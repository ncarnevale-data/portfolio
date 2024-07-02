import { useTranslation } from "react-i18next";
import photo from "../assets/portrait.jpg";
import Section from "./Section";
import Socials from "./Socials";

const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
        <div className="my-auto space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl ">Data Scientist & Web Developer</h3>
            <h1 className="text-4xl font-bold">Nicolás Carnevale</h1>
            <p>{t("description")}</p>
          </div>
          <div className="flex flex-row items-center gap-8">
            <a
              className="rounded-lg bg-brand-white px-4 py-2 text-brand-black transition-colors duration-300 hover:bg-brand-darkblue hover:text-brand-orange"
              href={t("cvpath")}
              download="Nicolás Carnevale CV.pdf"
            >
              {t("download") + " CV"}
            </a>
            <Socials />
          </div>
        </div>
        <div>
          <img
            src={photo}
            alt="Nicolás Carnevale"
            className="mx-auto max-h-96 overflow-hidden rounded-full"
          ></img>
        </div>
      </div>
    </Section>
  );
};

export default About;
