import { NavLink } from "react-router-dom";
import { navLinksArray } from "../../lib/footerInfo";
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
              ? "w-full text-center text-2xl font-semibold py-4 pr-6 rounded-md"
              : isActive
              ? "text-red-600 pr-2 py-1 font-semibold text-base lg:text-lg xl:text-xl"
              : "pr-2 py-1 font-medium text-sm lg:text-lg xl:text-xl"
          }
        >
          {t(link.name, { defaultValue: link.name })}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
