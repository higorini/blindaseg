/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef9f0',
          100: '#fdf2dd',
          200: '#fbe4bb',
          300: '#f9d699',
          400: '#f7c877',
          500: '#d4af37',
          600: '#b8860b',
          700: '#8b6914',
          800: '#5e480d',
          900: '#3e3008',
        },
        dark: {
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d0d0d0',
          300: '#b0b0b0',
          400: '#808080',
          500: '#404040',
          600: '#2d2d2d',
          700: '#1a1a1a',
          800: '#0f0f0f',
          900: '#000000',
        },
      },
    },
  },
  plugins: [],
};
