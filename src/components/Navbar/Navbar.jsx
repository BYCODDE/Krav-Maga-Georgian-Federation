import { NavLink } from "react-router-dom";
import { navLinks } from "../../lib/navlinks";

function Navbar() {
  return (
    <nav className="flex gap-2 justify-end w-full text-[20px]">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-[#E80D0D] px-3 py-1 lg:px-4 lg:py-2"
              : "px-3 py-1 lg:px-4 lg:py-2"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
