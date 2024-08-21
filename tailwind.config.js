/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#384E77",
        "primary-light": "#6096BA",
        "primary-lightest": "#F5F9E9",
        "primary-dark": "#18314F",
        "primary-darker": "#0D0630",
        secondary: "#E2C044",
        "secondary-dark": "#EC4E20",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      keyframes: {
        disappear: {
          "0%": { transform: "rotate(0deg)" },
          "100%": {
            transform: "rotate(-45deg)",
            opacity: 0,
          },
        },
        appear: {
          "0%": {
            transform: "rotate(-45deg)",
            opacity: 0,
          },
          "100%": { transform: "rotate(0deg)", opacity: 100 },
        },
        "sec-appear": {
          "0%": {
            transform: "rotate(-45deg)",
            opacity: 0,
          },
          "100%": { transform: "rotate(-90deg)", opacity: 100 },
        },
        "sec-disappear": {
          "0%": { transform: "rotate(-90deg)" },
          "100%": {
            transform: "rotate(-45deg)",
            opacity: 0,
          },
        },
      },
      animation: {
        disappear: "disappear 100ms linear 1",
        appear: "appear 100ms linear 1",
        "sec-appear": "sec-appear 100ms linear 1",
        "sec-disappear": "sec-disappear 100ms linear 1",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
