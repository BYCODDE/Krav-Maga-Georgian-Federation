/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
      },

      fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },

      colors: {
        mainColor: "#c2c2c2",
      },
    },
  },
  plugins: [],
};
