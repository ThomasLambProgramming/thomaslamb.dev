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
        light_theme: {
          default: "#BDC3C7",
          darker: "#CCD1D1",
          lighter: "#faf9f6",
          fakeInvisible :'rgb (0,0,0,0%)'
        },
        dark_theme: {
          default: "#3E3E42",
          darker: "#2D2D30",
          lighter: "#007ACC",
          fakeInvisible :'rgb (0,0,0,0%)'
        },
        light_text: {
          defaultBlack: "rgb (0,0,0,100%)",
          defaultWhite: "#faf9f6",
          fakeInvisible :'rgb (0,0,0,0%)'
        },
        dark_text: {
          defaultBlack: "rgb (0,0,0,100%)",
          defaultWhite: "rgb (1,1,1,100%)",
          fakeInvisible :'rgb (0,0,0,0%)'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

