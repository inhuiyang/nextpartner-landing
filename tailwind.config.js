/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B4A',
        'primary-dark': '#E95735',
        'primary-light': '#FFF0EA',
        coral: '#FF7A66',
        'orange-warm': '#FF9A3D',
        cream: '#FFF8F3',
      },
      fontFamily: {
        pretendard: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1212px',
      },
    },
  },
  plugins: [],
}
