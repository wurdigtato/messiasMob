/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    fontFamily: {
      'poppins': 'Poppins, sans-serif',
      'raleway': 'Raleway, sans-serif' 
    },
    extend: {
      colors: {
        'preto': '#393D3F',
        'cinza': '#B9B6B5',
        'ciano': '#62929E',
        'grullo': '#AA8E7E'
      },
    },
  },
  plugins: [],
}