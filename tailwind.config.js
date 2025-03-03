/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          '400': '#453E70',
          '700': '#7e22ce',
          '800': '#a773ef8c',
          '900': '#281549',
        },
        primary: '#281549',
        secondary: '#FF4FF3',
        tertiary: '#832EFF',
        available: '#03DABA',
        unavailable: '#FF4545',
        filterBg: 'rgba(166, 115, 239, 0.5)',
        textGray: '#A9A0B2'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      blur: {
        '310px': '310px', // Ajoute une valeur personnalisée pour le flou
      },
      translate: {
        '309px': '309px', // Ajoute des valeurs personnalisées pour les translations
        '109px': '109px',
        '1173px': '1173px',
        '515px': '515px',
        '427px': '427px',
        '1305px': '1305px',
        '1100px': '1100px',
        '2106px': '2106px',
        '435px': '435px',
        '3178px': '3178px',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #FF4FF3, #832EFF)',
      },
    },
  },
  plugins: [],
}

