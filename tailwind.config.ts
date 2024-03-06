import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "5rem",
          xl: "5rem",
          "2xl": "6.25rem",
        },
      },

      colors: {
        purple: "#8732F4",
        softPurple: "#F0E4FF",
        darkest: "#101010",
        darkPurple: "#0BB1CB",
        neutral: "#929292",
        baseBlack: "#252525",
        primary: "#8732F4",
      },
    },
  },
  plugins: [],
};
export default config;
