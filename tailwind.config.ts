import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dcecff",
          500: "#1d6fe0",
          600: "#0f5cc9",
          700: "#0a4aa3",
          900: "#082e66",
        },
        accent: {
          500: "#e8a62a",
          600: "#cf8f1c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
