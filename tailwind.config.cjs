/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tab': '768px',
      // => @media (min-width: 640px) { ... }

      'lap': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desk': '1200px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      fontFamily: {
        'Poppins': ['sans-serif'],
        'SourceSansPro': ['sans-serif']
      },
    },
  },
  plugins: [],
}
