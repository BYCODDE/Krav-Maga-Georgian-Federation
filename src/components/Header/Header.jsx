import BurgerMenu from "../../ui/BurgerMenu";
import Navbar from "../Navbar/Navbar";
import ReusableTitle from "../ReusableTitle";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

function Header() {
  const { t } = useTranslation();
  return (
    <header className="flex flex-row justify-between items-center  w-full mb-4">
      <ReusableTitle
        img_src={"mainLogo.png"}
        h1_text={t("krav", { defaultValue: "Krav Maga Georgian Federation" })}
      />
      <Navbar />
      <BurgerMenu />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
