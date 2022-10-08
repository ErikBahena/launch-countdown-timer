/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/*.html'],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',

        'grayish-blue': 'hsl(237, 18%, 59%)',
        'soft-red': 'hsl(345, 95%, 68%)',

        'dark-desaturated-blue': 'hsl(236, 21%, 26%)',
        'very-dark-blue': 'hsl(235, 16%, 14%)',
        'very-dark-mostly-black-blue': 'hsl(234, 17%, 12%)',
      },
    },
  },
  plugins: [],
};
