/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce5cb',
          300: '#8cd1a8',
          400: '#56b57e',
          500: '#32985f',
          600: '#247a4b',
          700: '#1e623d',
          800: '#1a4f33',
          900: '#16422b',
        },
        dark: {
          100: '#1a2e23',
          200: '#152419',
          300: '#0f1a11',
          400: '#0a1f15',
          500: '#081912',
        }
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      }
    },
  },
  plugins: [],
}