import BurgerMenu from "../../ui/BurgerMenu";
import Navbar from "../Navbar/Navbar";
import ReusableTitle from "../ReusableTitle/ReusableTitle";

function Header() {
  return (
    <header className=" p-8 w-full">
      <div className="flex flex-row justify-between items-center">
        <ReusableTitle />
        <Navbar />
        <BurgerMenu />
      </div>
    </header>
  );
}

export default Header;
