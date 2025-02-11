// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//     require("flowbite/plugin"),
//   ],
// }

import withMT from "@material-tailwind/react/utils/withMT";  // Import Material Tailwind utility

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB', // Custom Blue
        secondary: '#FACC15', // Yellow
        title: '#FACC15', // darkYellow
        accent: '#F97316', // Orange
        dark: '#111827', // footer, dark color
        whiteContr: ' #FFFFFF',
        light: '#F9FAFB',
        hover:'#1D4ED8' 
        
      },
    },
  },
  plugins: [
    require('daisyui'),
    require("flowbite/plugin"),
  ],
});

