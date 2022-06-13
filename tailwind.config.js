module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js'
    ]
  },
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },
      minHeight: {
        '450': '450px'
      },
      padding: {
        '120': '120px',
      },

      colors: {
        'theme-color': '#361CC1',
        'theme-color-2': '#FE7A7B'
      }
    },
  },
  variants: {},
  plugins: [],
}
