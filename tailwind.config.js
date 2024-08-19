/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      "screens":{
        "borderShrink":{"raw":"(max-width:940px)"},
      }
    },
  },
  plugins: [],
}

