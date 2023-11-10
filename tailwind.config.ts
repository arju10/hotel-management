import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "tertiary-light": "your-color-value", // Add your color value here
      },
      boxShadow: {
        "tertiary-light": "your-shadow-value", // Add your shadow value here
      },
      colors: {
        primary: "#038C7F",
        secondary: "#F2C641",
        tertiary: {
          dark: "#F27405",
          light: "#F2C641",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
