/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      lime: colors.lime,
      blue: colors.blue,
    },
    fontFamily: {
      sans: ['Bitter', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

