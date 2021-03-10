module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
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

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
