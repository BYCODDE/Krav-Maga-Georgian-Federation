import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="md:flex gap-2 justify-end w-full text-[14px] lg:text-[20px] hidden ">
      <NavLinks />
    </nav>
  );
}

export default Navbar;
