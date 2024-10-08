import { COLORS } from "./src/constants/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
      borderRadius: {
        main: "1rem"
      },
      boxShadow: {
        dropdown: '0px 5px 10px 4px rgba(34, 60, 80, 0.2)',
        bottom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    }
  },
  plugins: [],
};
export default config;
