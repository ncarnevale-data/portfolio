import { useTranslation } from "react-i18next";
import skillsMap from "../data/skillsMap";
import Section from "./Section";
import SkillContainer from "./SkillContainer";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section id="skills">
      <div className="p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">{t("skills")}</h2>
        <div className="flex flex-wrap">
          {skillsMap.map((skill, index) => (
            <SkillContainer
              key={index}
              name={skill.name}
              logoPath={skill.logoPath}
              colorrgb={skill.colorrgb}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
