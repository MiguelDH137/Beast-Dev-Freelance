/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#ff6600',
          'primary-light': '#ff8c42',
        },
        surface: {
          base: '#131313',
          container: '#1c1b1b',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1280px',
      },
    },
  },
  plugins: [],
};
