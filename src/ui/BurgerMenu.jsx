import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../lib/navlinks";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = (e) => {
    // Close only if clicking on the background overlay
    if (e.target.id === "menu-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      {/* Burger Button */}
      <button onClick={toggleMenu} className="focus:outline-none text-2xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Fullscreen Modal Menu */}
      {isOpen && (
        <div
          id="menu-overlay"
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="w-full bg-white shadow-lg rounded-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl"
            >
              <FaTimes />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center space-y-4 mt-[20px]">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  onClick={toggleMenu}
                  className="w-full text-center text-lg py-2 hover:bg-gray-200 transition duration-300 rounded-md"
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
