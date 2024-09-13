/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'min': '320px', 'max': '479px'},
      // => @media (min-width: 360px and max-width: 479px) { ... }

      'sm': {'min': '480px', 'max': '767px'},
      // => @media (min-width: 480px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1439px'},
      // => @media (min-width: 1024px and max-width: 1439px) { ... }

      'xl': {'min': '1024px'},
      // => @media (min-width: 1024px) { ... }

      '2xl': {'min': '1440px'},
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  plugins: [],
}