/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{ejs,html}", // Adjust paths to include EJS files
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

