const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'layers',
    content:
      [
        './components/**/*.{vue,js,pug}',
        './layouts/**/*.{vue,js,pug}',
        './pages/**/*.{vue,js,pug}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
      ],
    options: {
      keyframes: true,
      safelist: ['html', 'body']
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    screens: {
      'xs': '340px',
      // => @media (min-width: 340px) { ... }

      'sm': '420px',
      // => @media (min-width: 420px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '10vh': '10vh',
      '20vh': '20vh',
      '30vh': '30vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh'
    },
    height: {
      '10vh': '10vh',
      '20vh': '20vh',
      '30vh': '30vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh'
    },
    extend: {}
  },
  variants: {
    cursor: [],
    animation: [],
    accessibility: [],
    appearance: [],
    extend: {}
  },
  plugins: []
}
