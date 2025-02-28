import ReusableTitle from "../ReusableTitle/ReusableTitle";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#c2c2c2] p-8 w-full">
      <div className="flex flex-row justify-between items-start gap-8">
        <div>
          <ReusableTitle />
          <p className="mb-2">Email: krav_maga_in_georgia@mail.ru</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Address: 2 University St, Tbilisi</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-8 text-[20px]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 px-3 py-1 lg:px-4 lg:py-2  text-3xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 px-3 py-1 lg:px-4 lg:py-2 text-3xl"
            >
              <AiFillTikTok />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 px-3 py-1 lg:px-4 lg:py-2  text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 px-3 py-1 lg:px-4 lg:py-2  text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
