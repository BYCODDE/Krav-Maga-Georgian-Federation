import BurgerMenu from "../../ui/BurgerMenu";
import Navbar from "../Navbar/Navbar";
import ReusableTitle from "../ReusableTitle";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <header className="flex flex-row justify-between items-center  w-full mb-4">
      <ReusableTitle
        img_src={"mainLogo.png"}
        h1_text={t("krav", { defaultValue: "Krav Maga In Georgia" })}
      />

      <Navbar />
      <BurgerMenu />
      <div className="flex flex-row gap-5">
        <button onClick={() => i18n.changeLanguage("en")}>🇬🇧 EN</button>
        <button onClick={() => i18n.changeLanguage("ka")}>🇬🇪 KA</button>
      </div>
    </header>
  );
}

export default Header;
