/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGrey: '#969696',
        lightDark: '#141414',
        transparentDark: '#1414146a',
        navLinkBg: '#262626',
        greyLight: '#C4C4C4',
        lighterDark: '#FFFFFF19',
      },
      fontFamily: {
        Inter: ["'Inter'"],
      },
      lineHeight: {
        headerLineHeight: '21.6px',
        heightMedium: '22.5px',
        smallLineHeight: '18px',
        textSpaced: '24px',
        heroBig: '79.2px',
      },
      fontWeight: {
        thick: 500,
        thin: 200,
        thickThin: 400,
        thicker: 600,
      },
      fontSize: {
        medium: '16px',
      }
    },
  },
  plugins: [],
}

