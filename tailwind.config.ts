import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#d5d5d7",
          second: "#d9d9d9",
          text: "#191919",
        },
        customAccent: {
          dark: "#37003c",
          light: "#66006f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
