/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        qubnova: {
          midnight: '#07111f',
          cyan: '#22d3ee',
          violet: '#8b5cf6',
        },
      },
    },
  },
  plugins: [],
};
