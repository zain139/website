/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: { purple: { 600: '#6B46C1', 700: '#553C9A', 900: '#2D3748' } },
      fontFamily: { poppins: ['Poppins', 'sans-serif'] }
    }
  },
  plugins: []
}
