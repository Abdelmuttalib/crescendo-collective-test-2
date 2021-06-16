module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xx: ["2.6rem", "2.9rem"],
      },
      spacing: {
        444: "44rem",
        333: "33rem",
        222: "22.4375rem",
      },
      colors: {
        darkerblue: "#001B71",
        specialblue: "#003DD9",
        royalblue: "#002177",
        desktopblue: "#0F4DC5",
        specialgreen: "#178B76",
        cyan: "#009AF0",
        darkgray: "#727070",
        graybackground: "#F0EEEE",
      },
      borderWidth: {
        12: "23px",
      },
      screens: {
        lg: "1920px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
