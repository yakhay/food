/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        Lobster: ['Lobster', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#E7FAFE',
        'button-clor': '#dbedf1',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)',
        'custom-gradient-2': 'linear-gradient(180deg, #357355 0%, #1D483B 100%)',
      },
      rotate: {
        '30': '30deg',
      }

    },
  },
  plugins: [],
}

