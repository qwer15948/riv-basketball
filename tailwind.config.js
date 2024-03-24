/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003049",
        secondary: "#d62828",
        tertiary: "#f77f00",
        quaternary: "#f4a261",
        quinary: "#EAE2B7",
      },
    },
    plugins: [],
  },
});
