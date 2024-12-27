import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#DDE7DD",
        brown: "#6D4C3D",
        paleGreen: "#CDDCCD",
        red: "#B82828",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
};
