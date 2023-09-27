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
        'orange': '#121212',
        'yellow': '#F39F5A',
        "light-pink": "#8E24AA",
        "font-pink": "#FF78F0",
        "white": "#ffffff"
      },
    },
  },
  plugins: [],
}

