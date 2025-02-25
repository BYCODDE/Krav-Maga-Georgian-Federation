import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/aboutKrav-maga"
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
      >
        About Krav-Maga
      </NavLink>
      <NavLink
        to="/training"
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
      >
        Training
      </NavLink>
      <NavLink
        to="/instructor"
        className={({ isActive }) => (isActive ? "text-blue-500" : "")}
      >
        Instructor
      </NavLink>
    </nav>
  );
}

export default Navbar;
