import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export const footerInfo = [
  {
    id: 1,
    gmail: "gmail",
    phone: "phone",
    address: "address",
    style: "font-oswald text-[13px] lg:text-[20px] font-bold",
  },
];
export const navLinksArray = [
  { id: 1, path: "/", name: "home" },
  { id: 2, path: "/about", name: "about" },
  { id: 5, path: "/exam", name: "Krav Maga Exam" },
  { id: 4, path: "/instructor", name: "instructor" },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com/groups/1686844202090845",
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
    url: "https://www.linkedin.com/in/krav-maga-georgian-federation-8265b4352/",
    icon: FaLinkedin,
    style: "px-3 py-1 lg:px-4 lg:py-2 text-2xl md:text-3xl hover:text-blue-700",
  },
];
