const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      'poppins': "Poppins"
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/herosec.png')",
      },
      colors: {
        backgroundColor1: "#064670",
        backgroundColor2: "#ffffff",
        backgroundColor3: "#7bc3ed",
        backgroundColor4: "#3ba3e3",
        backgroundColor5: "#264b82",
        backgroundColor6: "#f2f6fa",
        backgroundColor7: "#d9eefa",
        backgroundColor8: "#0b800f",
        btnColor:'#FFA500',
        backgroundColor9: "#F5F5F5",
        backgroundColor10:"#FFA500",
        backgroundColor11:"#F2F2F2",
        backgroundColor12:"#023B5E",
        backgroundColor13:"#F1F1F1",
        text1: "#ed8b3b",
        text2: "#0b2540",
        text3: "#333333",
        text4: "#000000",
        text5: "#5f6382",
        text6: "#9e9d9d",
        text7:"#7A7A7A",
        text8:"#004671",
        text9:"#343434",
        text10:"#6C606C",
        text11:"#454545",
        text12:"#0A2540"
      },
      boxShadow: {
        'shadow1': '0 10px 50px -10px rgba(0, 0, 0, 0.3)',
        'shadow2': '0 10px 50px -11px rgba(51, 51, 51, 0.3)',
      },
      fontWeight: {
        normal: "400", // Normal weight
        semiBold: "600", // Semi-bold weight
        bold: "700", // Bold weight
      },
      animation: {
        "infinite-scroll": "infinite-scroll 55s linear infinite"},
        keyframes: {
        "infinite-scroll": {
        from:{transform: "translatex(0)"} , to: {transform: "translateX(-100%)"}, },
    },
    
    },

    screens: {
      'xs': '300px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [flowbite.plugin()],
};