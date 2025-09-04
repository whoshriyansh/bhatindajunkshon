import { useState } from "react";
import logo from "../assets/logo2.png";
import Button from "./ui/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <div className="bg-gradient-to-b from-primary-red via-secondary-red to-accent-red py-2">
      <div className="container mx-auto px-4 md:px-0 flex items-center justify-between">
        {/* Logo */}
        <div className="h-10 w-auto">
          <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
        </div>

        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button onClick={toggleMenu}>
            <Menu />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center gap-4">
          <Button name="Reserve a Table" />
          <Button name="Locate Us" />
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen z-50 bg-gradient-to-b from-primary-red via-secondary-red to-accent-red transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          <button onClick={toggleMenu}>
            <X />
          </button>
        </div>
        <ul className="flex flex-col items-center mt-10 space-y-6 text-primary-golden">
          <li>
            <Button name="Reserve a Table" />
          </li>
          <li>
            <Button name="Locate Us" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
