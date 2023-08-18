/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
   
    extend: {
      backgroundImage:{
        "image":"assets/milad-fakurian-nY14Fs8pxT8-unsplash.jpg" 
      },
      fontFamily: {
      qwigley: ['Qwigley', 'cursive'],
      aladin:['Aladin'],
      brother:['Brother Royal'],
      acorn:['Acorn-Regular'],
    
    },
  },},
  plugins: [],

}
