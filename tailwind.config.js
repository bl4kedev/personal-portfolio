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
        'layout': 'repeat(5, minmax(auto, 1fr))',
        'layout-sm': 'repeat(3, minmax(auto, 1fr))',
        'layout-md': 'repeat(2, minmax(auto, 1fr))'
      },
      gridTemplateColumns: {
        'layout-sm': 'repeat(2, minmax(auto, 1fr))',
        'layout-md': 'repeat(3, minmax(auto, 1fr))'
      }
    },
  },
  plugins: [],
}
