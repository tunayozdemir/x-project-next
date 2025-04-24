/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        padding: "2rem",
      },
      colors: {
        primary: "#1E40AF",
        secondary: {
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
        },
      },
    },
  },
  plugins: [],
}
