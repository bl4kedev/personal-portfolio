module.exports = {
  content: [
    'public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        "blue-gray": "#45567D"
      },
      gridTemplateRow: {
        'layout': 'repeat(5, minmax(auto, 1fr))'
      }
    },
  },
  plugins: [],
}
