import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'staatliches': ['Staatliches', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#121619',
        'light-bg': '#F7F7F7',
        'text-dark': '#2D3436',
        'text-light': '#F7F7F7',
        'primary-color': '#FF6B35',
        'primary-dark': '#F18805',
        'secondary-color': '#00A878',
        'accent-color': '#4ECDC4',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, var(--dark-bg), #1E1E1E)',
        'gradient-primary': 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 