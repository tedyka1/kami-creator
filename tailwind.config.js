/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}