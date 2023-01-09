/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'primary':'rgb(114 226 174)',
          'heading':'rgb(250 250 250)',
          'grey':'rgb(15 23 42)',
          'body':'rgb(191 190 203)',
        }
      },
      fontFamily: {
        sans:'Radio Canada, sans-serif'
      }
    },
    plugins: [],
  }