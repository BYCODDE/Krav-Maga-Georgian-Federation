import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";


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
