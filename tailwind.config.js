/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        layout: "1240px",
        inner: "1120px",
      },
      width: {
        layout: "1440px",
        inner: "1200px",
      },
      colors: {
        primary: "#FC1C26",
        secondary: "#2544B8",
        accent: "#E9EDFE",
      },
      backgroundColor: {
        primary: "#FC1C26",
        secondary: "#2544B8",
        accent: "#E9EDFE",
      },
      fontSize: {
        header: "48px",
        h3: "36px",
      },
    },
  },
  plugins: [],
});
