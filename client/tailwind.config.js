/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        aurora: {
          midnight: '#0B1020',
          cyan: '#00D4FF',
          violet: '#7C3AED',
          snow: '#F8FAFC',
          ink: '#111827',
          slate: '#CBD5E1',
          green: '#22C55E',
        },
      },
      boxShadow: {
        aurora: '0 24px 80px rgba(0, 212, 255, 0.18)',
        violet: '0 24px 80px rgba(124, 58, 237, 0.22)',
      },
      backgroundImage: {
        'aurora-radial': 'radial-gradient(circle at 20% 20%, rgba(0,212,255,0.24), transparent 28%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.28), transparent 30%), radial-gradient(circle at 50% 90%, rgba(34,197,94,0.14), transparent 34%)',
        'aurora-linear': 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 55%, #22C55E 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
