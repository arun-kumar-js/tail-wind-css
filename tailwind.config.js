/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], // This includes all HTML files in the project
  theme: {
    extend: {
      fontFamily: {
        Right: ["Righteous", "sans-serif"],
        rowdie: ["Rowdies", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
    },
  },

  plugins: [],
};