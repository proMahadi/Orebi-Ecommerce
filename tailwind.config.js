/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1604px',
      },
      colors: {
        'primary': '#767676',
        'secondary': '#262626',
      },
    },
    fontFamily: {
      'DM': ['DM Sans', 'sans-serif'],
    },
    screens: {
      'xsm': '600px',
      'lg': '1025px',
    },
  },
  plugins: [],
}