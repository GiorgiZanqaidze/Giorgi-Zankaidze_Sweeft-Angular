/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        'pink': '#0F2C59',
        'red': '#F8F0E5',
        'orange': '#DAC0A3',
        'yellow': '#F39F5A'
      },
    },
  },
  plugins: [],
}

