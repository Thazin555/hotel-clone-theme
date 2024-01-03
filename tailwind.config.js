/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",

    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      san: ["Playfair Display", "sans-serif"],
      heading: ["Lato", "serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
