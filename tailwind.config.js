/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Montserrat": "Montserrat"
      }, 
      fontSize:{
        agakbesar: "120px",
      },
    backgroundImage:{
      kucing:'url("/public/images/kucing.jpeg")'
    }
    },
  },
  plugins: [],
}

