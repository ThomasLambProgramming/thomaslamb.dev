/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,md}",
    "./public/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        pewter: {
          default: "#999da0",
          darker: "#989898",
          lighter: "#A2A2A2",
        }
      }
    },
  },
  plugins: [],
  darkMode: 'media',
}

