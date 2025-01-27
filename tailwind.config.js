/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-1": "#fff", // background 1
        "bg-2": "#334f59", // background 2
        "headline-1": "#ffa100", // headline color 1
        "headline-2": "#33515c", // headline color 2
        "text-orange": "#ffa100", // text orange
        "text-blue": "#abe0e6", // text blue
        "text-dark": "#304f5c", // text dark
        "button-blue": "#b1dfe4", // button blue
      },
    },
  },
  plugins: [],
};
