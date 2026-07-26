/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#06C853',
          dark: '#0D0704',
          light: '#FCFCFC',
          orange: '#E74A10',
        }
      }
    },
  },
  plugins: [],
}
