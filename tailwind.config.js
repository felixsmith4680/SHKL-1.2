/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F5EDE3',
          300: '#EDE2D4',
          400: '#E5D7C6',
          500: '#DCC9B3',
          600: '#C9B299',
          700: '#B39B80',
        },
        bronze: {
          400: '#CD9777',
          500: '#B8866B',
          600: '#A67659',
        },
      },
    },
  },
  plugins: [],
};
