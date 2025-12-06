/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15296c',
        'primary-variant': 'rgba(21, 41, 108, 0.2)',
        'primary-variant-2': '#dbe0f5',
        light: '#6b7280',
        bg: '#f9f9f9',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}