/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B00",
          light: "#FF8F33",
          dark: "#CC5600",
        },
      },
    },
  },
  plugins: [],
};
