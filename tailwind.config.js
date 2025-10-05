/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#EDE7F6",
        accent: "#EEC9C1",
        gold: "#C5A880"
      }
    }
  },
  plugins: []
};
