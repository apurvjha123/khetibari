/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily :{
        robo : "'Roboto Slab', serif"
      },
      padding:{
        '1/3':"33.33333%",
        '2/3':"66.66666%",
      },
    },
  },
  plugins: [],
}
