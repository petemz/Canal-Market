/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1400px'},
      
      '-2xl': {'min': '1400px'},

      'xl': {'max': '1200px'},
      
      '-xl': {'min': '1200px'},

      'lg': {'max': '1000px'},
      
      '-lg': {'min': '1000px'},

      'md': {'max': '900px'},
      
      '-md': {'min': '900px'},

      'sm': {'max': '800px'},
      
      '-sm': {'min': '801px'},

      'cpro': {'max': '780'},

      'xs': {'max': '600px'},

      '-xs': {'min': '600px'},

      'xxs': {'max': '500px'},
      
      '-xxs': {'min': '500px'},
    }
  },
  plugins: [],
}