/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ffffffff",
      secondary: "#284B63",
      disable: "#D9D9D9",
      accent: "#3C6E71",
      text: "#353535",
    },
    extend: {
      fontSize: {
        "10xl": "8.5rem",
      },
    },
  },
  plugins: ["@tailwindcss/prettier-plugin"],
};
