/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./script.js"],
  theme: {
    extend: {
      fontFamily:{
        Lilita: ["Lilita One", "serif"],
        inter : ["Inter","serif"]
      },
      colors: {
        'custom-yellow': '#FFD700',
        'custom-white' : '#ffffff',
        'custom-black' : '#282828',

        
      },
      backgroundImage: {
        'background-texture': "url('/assets/texture.jpg')",

        
      }
    },
  },
  plugins: [],
}