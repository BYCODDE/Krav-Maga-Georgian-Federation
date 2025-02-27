import Navbar from "../Navbar/Navbar";
import ReusableTitle from "../ReusableTitle/ReusableTitle";

function Header() {
  return (
    <header className="bg-[#c2c2c2] p-8 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <ReusableTitle />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
