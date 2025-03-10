import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    return setMenu((currentMenu) => !currentMenu);
  };

  return (
    <div>
      <header className="w-full py-5 relative">
        <nav className="flex  justify-between items-center container max-w-[1141px]  mx-auto">
          <Logo />
          <button className="lg:hidden block mr-5" onClick={toggleMenu}>
            <IoMenu className="text-2xl" />
          </button>
          <Menu menuStyle="md:flex hidden gap-5 items-center" />
        </nav>

        {menu && (
          <nav className="absolute left-0 top-0 z-40 text-white bg-blue-900 w-full h-[200px] p-5">
            <div className="flex justify-between items-center">
              <Logo toggleMenu={toggleMenu}/>
              <button onClick={toggleMenu}>
                <IoClose className="text-2xl" />
              </button>
            </div>
            <Menu menuStyle="space - y - 3" />
          </nav>
        )}
      </header>
    </div>
  );
};

export default NavBar;
