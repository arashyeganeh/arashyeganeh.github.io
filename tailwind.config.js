/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#00D4FF',
        secondary: '#00F9B6',
      },
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1400px", //default is 1536px
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        "m-2xl": { max: "1399px" },
        // => @media (max-width: 1535px) { ... }

        "m-xl": { max: "1199px" },
        // => @media (max-width: 1279px) { ... }

        "m-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "m-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "m-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
