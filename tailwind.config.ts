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
        "primary": "#1e293b",
        "primary-hover": "#0f172a",
        "primary-low": "#eff6ff",
        "soft-gray": "#2F2B3DC7"
      }
    },
  },
  plugins: [],
};
export default config;
