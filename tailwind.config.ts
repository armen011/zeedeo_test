import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        10: ["10px", "14px"],
        13: ["13px", "18px"],
        14: ["14px", "20px"],
        16: ["16px", "24px"],
        18: ["18px", "24px"],
        24: ["24px", "32px"],
        36: ["36px", "46px"],
        42: ["42px", "52px"],
      },
      keyframes: {
        ["open-from-left"]: {
          "0%": { width: "0px" },
          "100%": { width: "100%" },
        },
        ["smooth-opacity"]: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        ["left-open"]: "open-from-left 300ms ease-in-out",
        ["smooth-appear"]: "smooth-opacity 300ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
