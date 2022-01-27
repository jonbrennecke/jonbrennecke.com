module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Cabin', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
