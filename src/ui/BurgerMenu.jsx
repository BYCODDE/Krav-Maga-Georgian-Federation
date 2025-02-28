import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../lib/navlinks";
import { motion, AnimatePresence } from "framer-motion";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = (e) => {
    if (e.target.id === "menu-overlay") {
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="focus:outline-none text-2xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="menu-overlay"
            onClick={closeMenu}
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col justify-center items-center w-full h-full bg-white shadow-xl rounded-lg p-6 relative"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-3xl text-gray-800"
              >
                <FaTimes />
              </button>

              <motion.nav
                className="flex flex-col items-center space-y-6 mt-[30px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }} // Smooth fade-in for items
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    onClick={toggleMenu}
                    className="w-full text-center text-2xl font-semibold py-4 px-6 hover:bg-gray-200 transition-all duration-300 rounded-md"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BurgerMenu;
