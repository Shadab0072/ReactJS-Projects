/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF',
        customRed: '#DC2626',
        customGreen: '#16A34A',
      },
    },
  },

  plugins: [],
  
}

