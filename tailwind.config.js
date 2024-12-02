/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/herosec.jpg')",
      },
      colors:{
        backgroundColor1:"#064670",
        backgroundColor2:"#ffffff",
        backgroundColor3:"#7bc3ed",
        backgroundColor4:"#3ba3e3",
        backgroundColor5:"#264b82",
        backgroundColor6:"#f2f6fa",
        backgroundColor7:"#d9eefa",
        backgroundColor8:"#0b800f",
        text1:"#ed8b3b",
        text2:"#0b2540",
        text3:"#333333",
        text4:"#000000",
        text5:"#5f6382",
        text6:"#9e9d9d"
      }
    },
    screens: {
      'xs':'300px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [],
}