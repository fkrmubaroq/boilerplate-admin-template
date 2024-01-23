import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#4f46e5",
        "primary-hover": "#4338ca",
      }
    },
  },
  plugins: [],
};
export default config;
