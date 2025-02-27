import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-2 justify-end w-full text-[20px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#E80D0D] px-3 py-1 lg:px-4 lg:py-2"
            : "px-3 py-1 lg:px-4 lg:py-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#E80D0D] px-3 py-1 lg:px-4 lg:py-2"
            : "px-3 py-1 lg:px-4 lg:py-2"
        }
      >
        About Krav-Maga
      </NavLink>
      <NavLink
        to="/training"
        className={({ isActive }) =>
          isActive
            ? "text-[#E80D0D] px-3 py-1 lg:px-4 lg:py-2"
            : "px-3 py-1 lg:px-4 lg:py-2"
        }
      >
        Training
      </NavLink>
      <NavLink
        to="/instructor"
        className={({ isActive }) =>
          isActive
            ? "text-[#E80D0D] px-3 py-1 lg:px-4 lg:py-2"
            : "px-3 py-1 lg:px-4 lg:py-2"
        }
      >
        Instructor
      </NavLink>
    </nav>
  );
}

export default Navbar;
