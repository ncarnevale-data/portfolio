import skillsMap from "../data/skillsMap";
import SkillContainer from "./SkillContainer";

const Skills = () => {
  return (
    <section className="mx-auto  max-w-7xl" id="skills">
      <div className="p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Habilidades</h2>
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
    </section>
  );
};

export default Skills;
