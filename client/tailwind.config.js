/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sourcecode': ['Source Code Pro', 'monospace'],
        'crimson': ['Crimson Pro', 'serif'],
        'bungee': ['Bungee Spice', 'sans-serif'],
        'sevillana': ['Sevillana', 'cursive'],
        'amatic': ['Amatic SC', 'sans-serif'],
        'poppins-800': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 1px 80px -12px rgb(0 0 0 / 0.3)',
      },
      colors: {
        'black-bg': '#121212',
        'white-e' : "#EEEEEE",
      },
    },
  },
  plugins: [],
}

