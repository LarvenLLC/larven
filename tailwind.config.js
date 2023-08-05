/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
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
      

      }
    },
  },
  plugins: [],
}

