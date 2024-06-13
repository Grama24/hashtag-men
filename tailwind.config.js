/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '3xl': {'max': '1516px'},
        '2xl': {'max': '1389px'},
        // => @media (max-width: 1535px) { ... }
    
        'xl': {'max': '1250px'},
        // => @media (max-width: 1279px) { ... }
        'nav': {'max': '1150px'},
    
        'lg': {'max': '900px'},
        // => @media (max-width: 1023px) { ... }
    
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
    
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'xs': {'max': '500px'},
        // => @media (max-width: 639px) { ... }
        'xxs': {'max': '400px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },

  plugins: [],
};
