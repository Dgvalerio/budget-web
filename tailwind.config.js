/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      gray: {
        900: '#161618',
        850: '#262628',
        800: '#363638',
        600: '#676769',
        100: '#F0F0F2',
      },
      indigo: {
        500: '#304FFE',
        300: '#7A89FF',
        200: '#A4ABFF',
      },
      red: {
        900: '#C70018',
        400: '#FE304F',
      },
      extra: {
        1: '#fca',
        2: '#acf',
      },
    },
    fontSize: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 33,
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
