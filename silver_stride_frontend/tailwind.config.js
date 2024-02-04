/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 1px 80px -12px rgb(0 0 0 / 0.3)',
      }
    },
  },
  plugins: [],
}

