/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#f8f9fa",
          2: "#adb5bd",
          3: "#212529",
        },
      },
    },
  },
  plugins: [],
};
