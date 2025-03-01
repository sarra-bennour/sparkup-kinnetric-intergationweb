module.exports = {
  darkMode: "class",
  content: ["*{html,js,scss}"],
  theme: {
    extend: {
      colors: {
        'primary': '#9d174d',  // Custom primary color
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
