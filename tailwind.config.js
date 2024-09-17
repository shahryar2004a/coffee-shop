/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        "brown":{
          100:"#ECE0D1",
          300:"#DBC1AC",
          600:"#967259",
          900:"#634832",

        }
      },
      boxShadow:{
        "normal":"0px 1px 10px rgba(0,0,0,0.5)",
       
      },
      borderRadius:{
        "4xl":"2rem"
      },
      fontFamily:{
        "Yekan":"Yekan",
        "YekanMedium":"Yekan Medium",
        "YekanHeavy":"Yekan Heavy",
         "YekanRegular":"Yekan Regular",
      },
      letterSpacing:{
        "tightest":"-0.065em"
      },
      spacing:{
        "30":"7.5rem"
      },
      container:{
       center:true,
       padding:{
        DEFAULT:"1rem",
        lg:'0.625rem'
       }
      },
    },
    screens:{
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
    },
  },
  plugins: [
    function ({addVariant}){
      addVariant('child','& > *');
      addVariant('child-hover','& >*:hover');
    }
  ],
}

