import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "#DDE7DD",
        brown: "#6D4C3D",
        chocolateBrown: "#2c1e18",
        darkBrown: "#160f0c",
        paleGreen: "#CDDCCD",
        red: "#B82828",
      },
    },

    screens: {
      lg: { max: "1250px" },
      md: { max: "700px" },
      sm: { max: "450px" },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
};
