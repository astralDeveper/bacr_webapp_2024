// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         // poppins: ["Poppins", "sans-serif"],
//         poppins: ["Poppins"],
//       },
//       backgroundImage: {
//         'hero-pattern': "url('../src/assets/images/herosec.jpg')",
//       },
//       colors:{
//         backgroundColor1:"#064670",
//         backgroundColor2:"#ffffff",
//         backgroundColor3:"#7bc3ed",
//         backgroundColor4:"#3ba3e3",
//         backgroundColor5:"#264b82",
//         backgroundColor6:"#f2f6fa",
//         backgroundColor7:"#d9eefa",
//         backgroundColor8:"#0b800f",
//         text1:"#ed8b3b",
//         text2:"#0b2540",
//         text3:"#333333",
//         text4:"#000000",
//         text5:"#5f6382",
//         text6:"#9e9d9d"

//       }
//     },
//   },
//   plugins: [],
// }

const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Custom font family
      },
      fontWeight: {
        normal: "400", // Normal weight
        semiBold: "600", // Semi-bold weight
        bold: "700", // Bold weight
      },
      backgroundImage: {
        "hero-pattern": "url('../src/assets/images/herosec.jpg')",
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
        backgroundColor9: "#004671",
        backgroundColor11: "#FFA500",
        text1: "#ed8b3b",
        text2: "#0b2540",
        text3: "#333333",
        text4: "#000000",
        text5: "#5f6382",
        text6: "#9e9d9d",
        text7: "#454545",
        text8: "#4B4B4B",
        text9: "#343434",
        text10: "#7A7A7A",
      },
      boxShadow: {
        shadow1: "0 10px 50px -10px rgba(0, 0, 0, 0.3)",
        shadow2: "0 10px 50px -11px rgba(51, 51, 51, 0.3)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
