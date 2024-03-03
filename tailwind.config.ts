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
          "2xl": "6rem",
        },
      },

      colors: {
        purple: "#8732F4",
        softPurple: "#8732F44D",
        darker: "#252525",
        darkPurple: "#141F28",
        gray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
export default config;
