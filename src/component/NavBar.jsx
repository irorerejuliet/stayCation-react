
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
     return setMenu((currentMenu) => !currentMenu);
   }
   
  


  return (
    <div>
      <header className="w-full py-5 relative">
        <nav className="flex  justify-between items-center container max-w-[1141px]  mx-auto">
          <Logo />
          <button className="lg:hidden block mr-5" onClick={toggleMenu}>
            <IoMenu className="text-2xl" />
          </button>
          <menu className="md:flex hidden gap-5 items-center">
            <li>
              <a href="#" className="text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/">Browse by</a>
            </li>
            <li>
              <a href="/">Stories</a>
            </li>
            <li>
              <a href="/">Agent</a>
            </li>
            <li>
              <a href="/">companies</a>
            </li>
          </menu>
        </nav>

        {menu && (
          <nav className="absolute left-0 bottom-0 z-40">
            <div className="flex">
              <div className="flex justify-end items-center">
                <button onClick={toggleMenu}>
                  <IoClose className="text-2xl" />
                </button>
              </div>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

export default NavBar
