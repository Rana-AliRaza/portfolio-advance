/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: "#112C53"
      }
    },
  },
  plugins: [],
}