import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#23242C",
        secondary: "#1E1E1E",
        tertiary: "#151515",
        gray: {
          primary: "#3E3C41",
        },
        texting: "#98959D"
      },
    },
  },
  plugins: [],
};
export default config;
