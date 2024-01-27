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
        customtheme: {
          DarkNeutralN100: "#101214",
          DarkNeutral0: "#161A1D",
          DarkNeutral100: "#1D2125",
          DarkNeutral200: "#22272B",
          DarkNeutral250: "#282E33",
          DarkNeutral300: "#2C333A",
          DarkNeutral350: "#38414A",
          DarkNeutral400: "#454F59",
          DarkNeutral500: "#596773",
          DarkNeutral600: "#738496",
          DarkNeutral700: "#8C9BAB",
          DarkNeutral800: "#9FADBC",
          DarkNeutral900: "#B6C2CF",
          DarkNeutral1000: "#C7D1DB",
          DarkNeutral1100: "#DEE4EA",
          DarkNeutralN100A: "#03040442",
          DarkNeutral100A: "#BCD6F00A",
          DarkNeutral200A: "#A1BDD914",
          DarkNeutral250A: "#C8E1F91A",
          DarkNeutral300A: "#A6C5E229",
          DarkNeutral350A: "#C3DEFE33",
          DarkNeutral400A: "#BFDBF847",
          DarkNeutral500A: "#9BB4CA80",
          Neutral0: "#FFFFFF",
          Neutral100: "#F7F8F9",
          Neutral200: "#F1F2F4",
          Neutral200: "#DCDFE4",
          Neutral400: "#B3B9C4",
          Neutral500: "#8590A2",
          Neutral600: "#758195",
          Neutral700: "#626F86",
          Neutral800: "#44546F",
          Neutral900: "#2C3E5D",
          Neutral1000: "#172B4D",
          Neutral1100: "#091E42",
          Neutral100A: "#091E4208",
          Neutral200A: "#091E420F",
          Neutral300A: "#091E4224",
          Neutral400A: "#091E424F",
          Neutral500A: "#091E427D",
        },
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

