import Navbar from "../Navbar/Navbar";

function Header() {
  return (
   <header className="bg-[#c2c2c2] p-4 w-full">
  <div className="flex flex-col lg:flex-row items-center justify-center">
    <div className="flex items-center gap-4 justify-center lg:justify-start w-full ">
      <img className="max-w-[50px]" src="mainLogo.png" alt="mainLogo" />
      <h1 className="text-xl font-bold">Krav Maga In Georgia</h1>
    </div>
    <Navbar />
  </div>
</header>

  );
}

export default Header;
