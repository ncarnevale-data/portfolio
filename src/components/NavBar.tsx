import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

const NavBar = () => {
  const [english, setEnglish] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollTo = (id: string) => {
    const to = document.getElementById(id);
    const navbarHeight = document.getElementById("navbar")!.offsetHeight;
    if (to) {
      const scrollTo = to.offsetTop - navbarHeight;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  const handleChangeLanguage = () => {
    if (english) {
      setEnglish(false);
      i18n.changeLanguage("es");
    } else {
      setEnglish(true);
      i18n.changeLanguage("en");
    }
  };

  return (
    <header className="sticky top-0 z-10 md:mb-8" id="navbar">
      <div className="flex items-center justify-around bg-brand-green py-4">
        <h3 className="cursor-pointer text-2xl lg:text-3xl">
          <a href="/">NCarnevale</a>
        </h3>
        <ul className="hidden lg:flex lg:w-auto lg:items-center lg:space-x-3">
          <li>
            <button
              onClick={() => scrollTo("about")}
              className="text-sm transition-colors duration-300 hover:text-brand-orange"
            >
              {t("about").toUpperCase()}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("skills")}
              className="text-sm transition-colors duration-300 hover:text-brand-orange"
            >
              {t("skills").toUpperCase()}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("projects")}
              className="text-sm transition-colors duration-300 hover:text-brand-orange"
            >
              {t("projects").toUpperCase()}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className="text-sm transition-colors duration-300 hover:text-brand-orange"
            >
              {t("contact").toUpperCase()}
            </button>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-1">
          <MdLanguage
            className="h-6 w-6 cursor-pointer transition-colors duration-300 hover:text-brand-orange"
            onClick={handleChangeLanguage}
          />
          {english ? (
            <h4 className="mt-0.5 text-lg">EN</h4>
          ) : (
            <h4 className="mt-0.5 text-lg">ES</h4>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
