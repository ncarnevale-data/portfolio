import Section from "./Section";
import Socials from "./Socials";

const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <Section id="footer" animation={false} bgColor="blue" textColor="white">
      <div className="flex flex-row items-center justify-between p-8">
        <p>
          {`© ${year}`} <span className="font-bold">Nicolás Carnevale</span>
        </p>
        <Socials />
      </div>
    </Section>
  );
};

export default Footer;
