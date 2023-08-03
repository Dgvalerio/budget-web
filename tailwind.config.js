/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
};
