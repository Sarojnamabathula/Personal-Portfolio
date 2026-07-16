import type { Config } from "tailwindcss";

// Tailwind v4 — minimal config. Theme tokens are defined in globals.css @theme block.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
