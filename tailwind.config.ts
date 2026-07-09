import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e85d2c',
        secondary: '#009bb8',
        surface: '#f3efe9',
        'text-dark': '#292524',
      },
      fontFamily: {
        heading: ['var(--font-nunito)', 'sans-serif'],
        body: ['var(--font-quicksand)', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
