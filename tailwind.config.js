/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '320px'
      },
      fontFamily: {
        'leagueSpr': ["League Spartan", 'sans-serif']
      },
    },
  },
  plugins: [],
}

