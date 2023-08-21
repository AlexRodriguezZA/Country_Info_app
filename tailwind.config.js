/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#2b3945',              //  (Dark Mode Elements)
        veryDarkBlueBg: '#202c37',       //  (Dark Mode Background)
        veryDarkBlueText: '#111517',     //  (Light Mode Text)
        darkGray: '#858585',             //  (Light Mode Input)
        veryLightGray: '#fafafa',        // (Light Mode Background)
        white: '#FFFFFF'                //  (Dark Mode Text & Light Mode Elements)
      }
    }
  },  
  plugins: [
    require('tailwindcss-animated')
  ],
}

