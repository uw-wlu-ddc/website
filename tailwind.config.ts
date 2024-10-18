import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        primary: "var(--primary)"
      },
      fontFamily: {
        figtree: ['Figtree', "sans-serif"],
        mono: ['DM Mono']
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
};
export default config;
