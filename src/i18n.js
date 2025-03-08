import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Load translations from JSON files
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: "/locals/{{lng}}/translation.json", // Adjust this path if needed
    },
    detection: {
      order: ["localStorage", "navigator"], // Prioritize localStorage, fallback to browser language
      caches: ["localStorage"], // Store user-selected language
    },
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;
