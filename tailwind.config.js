module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00AB44',
        secondary: '#353744',
        light: '#666666',
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'left': 'left',
        'spacing': 'margin, padding',
      },
      keyframes: {
        slidein: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(80%)' },
        }
      },
      animation: {
        slidein: 'slidein 4s ease-in-out 300ms forwards',
      }
    },
  },
  variants: {
    extend: {},
  },
  important: true,
  plugins: [require('@tailwindcss/typography')],
};
