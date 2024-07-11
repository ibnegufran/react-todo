/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-30': 'repeat(auto-fit, 30rem)',
        'auto-fr': 'repeat(auto-fit, minmax(30rem,1fr))',

      },
    },
  },
  plugins: [],
}

