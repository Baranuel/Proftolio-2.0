/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        lightBlue: "#35B4D0",
        lightGreen: "#5ED2A0",
        darkPurple: "#728FE6",
        lightPink: "#B763FE",
        bgWhite: "#FCFCFF",
        hazyPink: "#FEF9FE",
      },
      animation: {
        bgPan: "bgPan 4s linear infinite",
      },
      boxShadow: {
        button: " 9px 9px 18px #DEDDF7, -9px -9px 18px #ffffff",
        "button-pressed": " 9px 9px 18px #DEDDF7,-9px -9px 18px #ffffff",
      },
      backgroundImage: {
        grains: 'url("/grains.jpg")',
      },
      keyframes: {
        bgPan: {
          "0%, 100%": { backgroundPosition: "left center" },
          "50%": { backgroundPosition: " right center" },
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "547px" },
      // => @media (max-width: 639px) { ... }
    },
    plugins: [],
  },
};
