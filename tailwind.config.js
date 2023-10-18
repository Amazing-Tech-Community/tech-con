// const {fontFamily} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: "#3c1181",
        gray: "#C0ADDC",
        orange: "#CD4924",
        purple: "#4E15A9",
      },

      screens: {
        xx: "320px",
        xs: "412px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1200px",
        xl: "1700px",
      },

      // fontFamily: {
      //   'sf-pro': ['SF Text', 'system-ui'],
      // },
    },
  },
  plugins: [],
}
