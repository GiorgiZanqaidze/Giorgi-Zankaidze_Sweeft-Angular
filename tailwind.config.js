/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    screens: {
      'sm': '640px',
      'md': '800px',
      'lg': '900px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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

