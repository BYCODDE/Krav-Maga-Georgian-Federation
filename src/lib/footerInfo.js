import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export const footerInfo = [
  {
    id: 1,
    info: "Email: krav_maga_in_georgia@mail.ru",
    style: "font-oswald text-[13px] lg:text-[20px]",
  },
  {
    id: 2,
    info: "Phone: (123) 456-7890",
    style: "font-oswald text-[13px] lg:text-[20px]",
  },
  {
    id: 3,
    info: " Address: 2 University St, Tbilisi",
    style: "font-oswald text-[13px] lg:text-[20px]",
  },
];

export const navLinksArray = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About Krav-Maga" },
  { id: 3, path: "/training", name: "Training" },
  { id: 4, path: "/instructor", name: "Instructor" },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://facebook.com",
    icon: FaFacebook,
    style: "px-3 py-1 lg:px-4 lg:py-2 text-2xl md:text-3xl hover:text-blue-600",
  },
  {
    id: 2,
    url: "https://www.tiktok.com",
    icon: AiFillTikTok,
    style: "px-3 py-1 lg:px-4 lg:py-2 text-2xl md:text-3xl hover:text-red-600",
  },
  {
    id: 3,
    url: "https://instagram.com",
    icon: FaInstagram,
    style:
      " px-3 py-1 lg:px-4 lg:py-2 text-2xl md:text-3xl hover:text-pink-500",
  },
  {
    id: 4,
    url: "https://linkedin.com",
    icon: FaLinkedin,
    style: "px-3 py-1 lg:px-4 lg:py-2 text-2xl md:text-3xl hover:text-blue-700",
  },
];
