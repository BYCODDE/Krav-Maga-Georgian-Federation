import { useState, useEffect, useRef } from "react";
import i18n from "i18next";
import { FaGlobe } from "react-icons/fa";

const languages = [
  { code: "en", flag: "EN", label: "English" },
  { code: "ka", flag: "KA", label: "ქართული" },
  { code: "ru", flag: "RU", label: "Русский" },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 text-white"
      >
        <FaGlobe className="text-lg text-white" />
        <span className="hidden sm:inline text-white">
          {currentLanguage.flag}
        </span>
        <span className="hidden md:inline text-white">
          {currentLanguage.label}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg overflow-hidden z-50 sm:w-40">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 w-full px-4 py-2 text-left text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ${
                i18n.language === lang.code
                  ? "font-semibold bg-gray-200 dark:bg-gray-700"
                  : ""
              }`}
            >
              <span className="text-white">{lang.flag}</span>
              <span className="hidden sm:inline text-white">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
