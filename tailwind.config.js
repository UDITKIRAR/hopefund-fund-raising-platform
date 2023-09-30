/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'floral-pattern': 'url(https://assets-give.milaap.org/packs/_/assets/images/home/floral-r-00bca32d72a342738327e70c835a5554.png) ,url(https://assets-give.milaap.org/packs/_/assets/images/home/floral-r-00bca32d72a342738327e70c835a5554.png)',
      },
      backgroundPosition:{
        'floral-pattern':'right 0px bottom -150px, left -60px bottom -80px'
      },
      fontFamily: {
        sans: ['"Avenir LT Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}