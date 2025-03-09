import { NavLink } from "react-router-dom";
import { navLinksArray } from "../lib/footerInfo";
import { useTranslation } from "react-i18next";

const NavLinks = ({ toggleMenu, variant }) => {
  const { t } = useTranslation();

  return (
    <>
      {navLinksArray.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          onClick={toggleMenu}
          className={({ isActive }) =>
            variant === "mobile"
              ? "w-full text-center text-2xl font-semibold py-4 pr-6 hover:bg-gray-200 transition-all duration-300 rounded-md"
              : isActive
              ? "text-[#E80D0D] pr-2 py-1 lg:pr-2 lg:py-1"
              : "pr-2 py-1 lg:pr-2 lg:py-1"
          }
        >
          {t(link.name, { defaultValue: link.name })}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
