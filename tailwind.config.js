/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Bebas: ["Bebas Neue", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },

    extend: {},
  },
  plugins: [require("daisyui")],
};
