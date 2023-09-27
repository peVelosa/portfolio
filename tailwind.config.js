/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        name: ['Mr Dafoe', 'cursive'],
        body: ['Poppins', 'sans-serif'],
        about: ['Dela Gothic One', 'cursive'],
      },
      height: {
        screen: '100svh',
      },
      minHeight: {
        screen: '100svh',
      },
      width: {
        screen: '100svw',
      },
      minWidth: {
        screen: '100svw',
      },
    },
  },
  plugins: [],
};
