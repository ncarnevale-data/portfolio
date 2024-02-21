const NavBar = () => {
  return (
    <header className="sticky top-0 z-10 md:mb-8">
      <div className="flex items-center justify-around bg-gray-600 p-4">
        <h3 className="cursor-pointer text-2xl lg:text-3xl">
          <a href="#">NCarnevale</a>
        </h3>
        <ul className="hidden lg:flex lg:w-auto lg:items-center lg:space-x-3">
          <li>
            <a href="#" className="text-sm">
              SOBRE MÍ
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              HABILIDADES
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              PROYECTOS
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              CONTACTO
            </a>
          </li>
        </ul>
        <div className="">Socials/ColorModeSwitch</div>
      </div>
    </header>
  );
};

export default NavBar;
