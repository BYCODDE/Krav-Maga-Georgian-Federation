import BurgerMenu from "../../ui/BurgerMenu";
import Navbar from "../Navbar/Navbar";
import ReusableTitle from "../ReusableTitle/ReusableTitle";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center  w-full">
      <ReusableTitle />
      <Navbar />
      <BurgerMenu />
    </header>
  );
}

export default Header;
