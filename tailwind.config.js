/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './screens/js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#1C1B1B',
      white: '#FFFFFF',
      primaryGreen: '#42C83C',
      secondaryGreen: '#38B432',
      blue: '#288CE9',
      primaryGrey: '#AEAEAE',
      secondaryGrey: '#A7A7A7',
      lightGrey: '#DBDBDB',
      black: '#0D0C0C'
    },
    fontFamily: {
      sRegular: 'Satoshi-Regular',
      sBold: 'Satoshi-Bold'
    }
  },
  plugins: []
};
