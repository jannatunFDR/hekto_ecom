/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   jos: ['Josefin Sans','sans-serif']
      // },
      fontFamily: {
        lato: ['Lato','sans-serif']
      },
      fontFamily: {
        jose: ['Josefin Sans','sans-serif']
      },

    },
  },
  plugins: [],
}

