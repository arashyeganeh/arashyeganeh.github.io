/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1200px',
          '2xl': '1400px',//default is 1536px
        },
      },
      screens: {
        'm-2xl': { 'max': '1399px' },
        // => @media (max-width: 1535px) { ... }

        'm-xl': { 'max': '1199px' },
        // => @media (max-width: 1279px) { ... }

        'm-lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'm-md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'm-sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}