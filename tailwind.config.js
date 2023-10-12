const {fontFamily} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['var(--font-outfit)', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#00AB44',
        secondary: '#353744',
        light: '#666666',
        'green-haze': {
          '50': '#eefff3',
          '100': '#d7ffe6',
          '200': '#b2ffcf',
          '300': '#76ffab',
          '400': '#33f580',
          '500': '#09de5d',
          '600': '#00ab44',
          '700': '#04913d',
          '800': '#0a7134',
          '900': '#0a5d2d',
          '950': '#003417',
        },
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'left': 'left',
        'spacing': 'margin, padding',
      },
      keyframes: {
        slidein: {
          '0%': {transform: 'translateX(0px)'},
          '100%': {transform: 'translateX(80%)'},
        },
      },
      animation: {
        slidein: 'slidein 4s ease-in-out 300ms forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  important: true,
  plugins: [require('@tailwindcss/typography'), require('tailwind-bootstrap-grid')({
    gridGutters: {
      0: 0,
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '3rem',
    },
  })],
};
