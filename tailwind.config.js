module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'purple' :'#6d56c1',
      },
      height:{
        'header':'29rem',
      },
      fontFamily: {
        'R': ['Roboto'],
      },
      backgroundImage: {
        'gradient': "linear-gradient(54deg,rgba(74,76,179,.95) 34%,hsla(0,34%,71%,.95))",
      }
    },
  },
  plugins: [],
}