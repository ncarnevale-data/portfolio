/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          black: '#020617',
          darkblue: '#0F172A',
          blue: '#1E2E54',
          lightblue: '#3C5AA0',
          green: '#005F6E',
          cyan: '#15F4EE',
          orange: '#FFA200',
          lavender: '#CCC9DC',
          white: '#E6E4EB',
          }
        }
      }
    
  },
  plugins: [],
}

