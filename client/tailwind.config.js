/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        aurora: {
          midnight: '#070A17',
          ink: '#0B1020',
          obsidian: '#030712',
          cyan: '#00D4FF',
          electric: '#38BDF8',
          violet: '#7C3AED',
          fuchsia: '#D946EF',
          gold: '#F8D36A',
          snow: '#F8FAFC',
          pearl: '#EEF6FF',
          slate: '#CBD5E1',
          green: '#22C55E',
        },
      },
      boxShadow: {
        aurora: '0 28px 90px rgba(0, 212, 255, 0.22)',
        violet: '0 28px 90px rgba(124, 58, 237, 0.26)',
        luxury: '0 30px 120px rgba(8, 13, 31, 0.22)',
        glow: '0 0 60px rgba(0, 212, 255, 0.28)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -24px 80px rgba(124,58,237,0.09)',
      },
      backgroundImage: {
        'aurora-radial': 'radial-gradient(circle at 20% 20%, rgba(0,212,255,0.24), transparent 28%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.28), transparent 30%), radial-gradient(circle at 50% 90%, rgba(34,197,94,0.14), transparent 34%)',
        'aurora-linear': 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 52%, #D946EF 78%, #F8D36A 100%)',
        'premium-mesh': 'radial-gradient(circle at 10% 10%, rgba(0,212,255,0.18), transparent 24%), radial-gradient(circle at 90% 12%, rgba(124,58,237,0.18), transparent 26%), radial-gradient(circle at 50% 88%, rgba(217,70,239,0.12), transparent 30%)',
        'gold-line': 'linear-gradient(90deg, transparent, rgba(248,211,106,0.7), transparent)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -18px, 0) rotate(1.5deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(16px, -26px, 0) rotate(-2deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite',
        orbit: 'orbit 22s linear infinite',
        'gradient-pan': 'gradient-pan 10s ease infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
