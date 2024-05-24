/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    screens: {
      mobile: "0",
      desktop: "1000px",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-dir")()],
};
