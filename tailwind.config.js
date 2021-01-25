module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'containerMain': "url('../background/containerMain.jpg')",
       }),
      fontFamily: {
        'press-start2p': ['"Press Start 2P"', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
