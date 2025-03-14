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
              ? "w-full text-center text-2xl font-bebas py-4 pr-6 hover:bg-gray-200 transition-all duration-300 rounded-md"
              : isActive
              ? "text-[#E80D0D] pr-2 py-1 font-bebas text-[15px] lg:text-[20px] lg:pr-2 lg:py-1 transition-all duration-300"
              : "pr-2 py-1 font-bebas text-[13px] lg:text-[20px] xl:text-[30px] lg:pr-2 lg:py-1"
          }
        >
          {t(link.name, { defaultValue: link.name })}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
