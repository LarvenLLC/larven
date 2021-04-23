module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00AB44",
        secondary: "#353744",
        light: "#666666",
      },
    },
  },
  variants: {
    extend: {},
  },
  important: true,
  plugins: [require("@tailwindcss/typography")],
};
