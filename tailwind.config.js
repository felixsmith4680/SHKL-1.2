/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F0EAD6',
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F5EDE3',
          300: '#EDE2D4',
          400: '#E5D7C6',
          500: '#DCC9B3',
          600: '#C9B299',
          700: '#B39B80',
        },
        forest: {
          DEFAULT: '#2D5016',
          light: '#3d6b1f',
        },
        gold: {
          DEFAULT: '#B8860B',
          dark: '#9A7209',
        },
        charcoal: {
          DEFAULT: '#333333',
        },
      },
    },
  },
  plugins: [],
};
