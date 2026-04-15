/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        gradient: "gradientMove 10s ease infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },

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