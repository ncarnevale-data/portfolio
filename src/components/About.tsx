import photo from "../assets/portrait.jpg";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
        <div className="my-auto space-y-4">
          <h3 className="text-2xl ">Data Scientist & Web Developer</h3>
          <h1 className="text-4xl font-bold">Nicolás Carnevale</h1>
          <p>
            Aspiro a un rol donde pueda aprovechar mis habilidades en ciencia de
            datos y desarrollo web para impulsar soluciones innovadoras que
            mejoren la experiencia del cliente o usuario, aborden desafíos
            empresariales y/o optimicen los procesos de la empresa.
          </p>
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
