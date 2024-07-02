const NavBar = () => {
  const scrollTo = (id: string) => {
    const to = document.getElementById(id);
    const navbarHeight = document.getElementById("navbar")!.offsetHeight;
    if (to) {
      const scrollTo = to.offsetTop - navbarHeight;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-10 md:mb-8" id="navbar">
      <div className="flex items-center justify-around bg-brand-green p-4">
        <h3 className="cursor-pointer text-2xl lg:text-3xl">
          <a href="/">NCarnevale</a>
        </h3>
        <ul className="hidden lg:flex lg:w-auto lg:items-center lg:space-x-3">
          <li>
            <button
              onClick={() => scrollTo("about")}
              className="text-sm transition-colors duration-300 hover:text-brand-orange"
            >
              SOBRE MÍ
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("skills")}
              className="text-sm transition-colors duration-300 hover:text-brand-orange"
            >
              HABILIDADES
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("projects")}
              className="text-sm transition-colors duration-300 hover:text-brand-orange"
            >
              PROYECTOS
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className="text-sm transition-colors duration-300 hover:text-brand-orange"
            >
              CONTACTO
            </button>
          </li>
        </ul>
        <div className="">Socials/ColorModeSwitch</div>
      </div>
    </header>
  );
};

export default NavBar;
