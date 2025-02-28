import { NavLink } from "react-router-dom";
import { navLinks } from "../../lib/navlinks";

function Navbar() {
  return (
    <nav className="md:flex gap-2 justify-end w-full text-[14px] lg:text-[20px] hidden ">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-[#E80D0D] px-2 py-1 lg:px-2 lg:py-1"
              : "px-2 py-1 lg:px-2 lg:py-1"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
