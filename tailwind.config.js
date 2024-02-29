/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      blue: colors.blue,
    },
    fontFamily: {
      sans: ['Bitter', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

