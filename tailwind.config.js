/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  
 // tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      heading: ['Playfair Display', 'serif'],
      body: ['Poppins', 'sans-serif'],
      logo: ['Dancing Script', 'cursive'],
    },
  },
},

  plugins: [],
}