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
      colors: {
        'purple' : "#7C5DFA",
        'lightPurple' : "#494E6E",
        'darkGray' : "#373B53",
        'lightGray' : "#888EB0",
        'darkModeBody' : "#1E2139",
        'darkModeSmallText' : "#DFE3FA",
        'pending' : "#FF8F00"
      }
    },
  },
  plugins: [],
}

