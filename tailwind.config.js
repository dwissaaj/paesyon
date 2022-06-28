module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
     'sm': {'min': '997px'},
      'md': {'min': '1100px'},
      'lg': {'min': '1300px'},
      'xl': {'min': '1718px'},
      '2xl': {'min': '1903px'},
      '3xl': {'min': '2308px'},
    },
  },
  plugins: [],
}