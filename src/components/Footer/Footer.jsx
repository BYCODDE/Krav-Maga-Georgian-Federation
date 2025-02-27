import ReusableTitle from "../ReusableTitle/ReusableTitle";

function Footer() {
  return (
    <footer className="bg-[#c2c2c2] p-8 w-full">
      <div className="flex flex-row justify-between items-start gap-8">
        {/* Left Column: Contact Info */}
        <div>
          <ReusableTitle />
          <p className="mb-2">Email: info@company.com</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
        </div>
        {/* Right Column: Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-[20px]">
            <a
              href="https://facebook.com"
              className="hover:text-blue-700 px-3 py-1 lg:px-4 lg:py-2"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-500 px-3 py-1 lg:px-4 lg:py-2"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-500 px-3 py-1 lg:px-4 lg:py-2"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-blue-800 px-3 py-1 lg:px-4 lg:py-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
