/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      animation: {
        blob1: "blob1 50s infinite",
        blob2: "blob2 50s infinite",
        blob3: "blob3 50s infinite",
        blob4: "blob4 50s infinite",
    
      },
      keyframes: {
        blob1: {
          "0%": {
            transform: "translate(0px, 10px) scale(1)",
          },
          "33%": {
            transform: "translate(700px, -200px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-700px, 400px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(12px, 17px) scale(1)",
          },
          "33%": {
            transform: "translate(-500px, 500px) scale(1.3)",
          },
          "66%": {
            transform: "translate(300px, -300px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(12px, 17px) scale(1)",
          },
        },
        blob3: {
          "0%": {
            transform: "translate(-10px, 400px) scale(1)",
          },
          "33%": {
            transform: "translate(-800px, -500px) scale(1.3)",
          },
          "66%": {
            transform: "translate(800px, -250px) scale(0.9)",
          },
          "100%": {
            transform: "translate(-10px, 400px) scale(1)",
          },
        },
        blob4: {
          "0%": {
            transform: "translate(800px, -200px) scale(1)",
          },
          "33%": {
            transform: "translate(-600px, -200px) scale(1.3)",
          },
          "66%": {
            transform: "translate(300px, 250px) scale(0.9)",
          },
          "100%": {
            transform: "translate(800px, -200px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
