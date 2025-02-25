import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header>
      <div>
        <img className="max-w-[50px]" src="mainLogo.png" alt="mainLogo" />
      </div>
      <h1> Krav Maga In Georgia</h1>
      <Navbar />
    </header>
  );
}

export default Header;
