/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

