import BurgerMenu from "../../ui/BurgerMenu";
import Navbar from "../Navbar/Navbar";
import ReusableTitle from "../ReusableTitle";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center  w-full">
      <ReusableTitle
        img_src={"mainLogo.png"}
        h1_text={"Krav Maga In Georgia"}
      />
      <Navbar />
      <BurgerMenu />
    </header>
  );
}

export default Header;
