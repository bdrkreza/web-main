module.exports = {
  // purge: ["./src/**/*.js"],  // DO NOT ENABLE THIS! Tailwind won't work correctly.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // Do not define this. It will override default ones.
    // screens: {
      // 'small': '425px',
      // => @media (min-width: 425px) { ... }

      // 'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      colors: {
        "bg-orange": "#f06424",
        "green": "#15803d"
      },
      // spacing:{
      //   "48": "195px"
      // },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
