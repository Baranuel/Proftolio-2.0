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
      },
      animation: {
        bgPan: "bgPan 4s linear infinite",
      },
      keyframes: {
        bgPan: {
          "0%, 100%": { backgroundPosition: "left center" },
          "50%": { backgroundPosition: " right center" },
        },
      },
    },
    plugins: [],
  },
};
