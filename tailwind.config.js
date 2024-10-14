/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Background: "rgb(26, 25, 25)",
        Yellow: "#ffc107",
        lightYellow: "rgba(255,193,7,0.8)",
        DarkGrey: "rgb(167, 161, 161)",
        VeryDarkGrey: "#ffffff1a",
      },
      fontFamily: {
        Spartan: "League Spartan, sans-serif",
        Josefin: "Josefin Sans, sans-serif",
      },
      fontSize: {
        lgHero: "200px",
      },
      letterSpacing: {
        heroSpacing: "1rem",
      },
      height: {
        navList: "70vh",
      },
      brightness: {
        header: "30%",
      },
    },
  },
  plugins: [],
};
