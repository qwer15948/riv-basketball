/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
