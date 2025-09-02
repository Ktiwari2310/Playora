/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./commu.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      display: ["peer-checked"],
    },
  },
}

