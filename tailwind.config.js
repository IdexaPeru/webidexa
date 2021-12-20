module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        color_green_1: '#F9FFF9',
        color_green_2: '#F2FFF2',
        color_green_3: '#DDFFC8',
        color_green_4: '#C7DCCA',
        color_green_5: '#ADC2B0',
        color_green_6: '#749F7B',
        color_green_7: '#00A91A',
        color_green_8: '#019519',
        color_green_9: '#000000',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}