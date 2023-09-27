/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'mmd': {'max': '767px'},
        // => @media (max-width: 767px)
      }
    },
  },
  plugins: [],
}

