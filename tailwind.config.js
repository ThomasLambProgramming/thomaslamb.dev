/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,md}",
    "./public/**/*.md"
  ],
  theme: {
    fontFamily: {
        'sans': ['Hedvig Letters Sans']
    },
    extend: {
      colors: {
        pewter: {
          default: "#BDC3C7",
          darker: "#CCD1D1",
          lighter: "#faf9f6",
        }
      }
    },
  },
  plugins: [],
  darkMode: 'media',
}

