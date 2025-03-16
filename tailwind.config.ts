import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        DEFAULT: "#20112c",
        100: "#d2cfd5",
        200: "#a6a0ab",
        300: "#797080",
        400: "#4d4156",
        500: "#20112c",
        600: "#1a0e23",
        700: "#130a1a",
        800: "#0d0712",
        900: "#060309",
      },
      purple: {
        DEFAULT: "#b19cd8",
        100: "#efebf7",
        200: "#e0d7ef",
        300: "#d0c4e8",
        400: "#c1b0e0",
        500: "#b19cd8",
        600: "#8e7dad",
        700: "#6a5e82",
        800: "#473e56",
        900: "#231f2b",
      },
      white: {
        DEFAULT: "#f9f8fc",
        100: "#fefefe",
        200: "#fdfcfe",
        300: "#fbfbfd",
        400: "#faf9fd",
        500: "#f9f8fc",
        600: "#c7c6ca",
        700: "#959597",
        800: "#646365",
        900: "#323232",
      },
      yellow: {
        DEFAULT: "#f9c724",
        100: "#fef4d3",
        200: "#fde9a7",
        300: "#fbdd7c",
        400: "#fad250",
        500: "#f9c724",
        600: "#c79f1d",
        700: "#957716",
        800: "#64500e",
        900: "#322807",
      },
      indigo: {
        DEFAULT: "#6537b1",
        100: "#e0d7ef",
        200: "#c1afe0",
        300: "#a387d0",
        400: "#845fc1",
        500: "#6537b1",
        600: "#512c8e",
        700: "#3d216a",
        800: "#281647",
        900: "#140b23",
      },
    },
    fontFamily: {
      figtree: ["Figtree", "sans-serif"],
      dm: ["DM Mono"],
      baskerville: ["Libre Baskerville", "serif"],
    },
    fontSize: {
      title: [
        "4.5rem",
        {
          lineHeight: "4.95rem",
          letterSpacing: "-0.02em",
          fontWeight: "800",
        },
      ],
      subtitle: [
        "1.25rem",
        {
          lineHeight: "1.375rem",
          letterSpacing: "0.125em",
          fontWeight: "500",
        },
      ],
      header: [
        "2rem",
        {
          lineHeight: "2.2rem",
          letterSpacing: "-0.016em",
          fontWeight: "600",
        },
      ],
      subheader: [
        "1.5rem",
        {
          lineHeight: "1.65rem",
          letterSpacing: "-0.012em",
          fontWeight: "600",
        },
      ],
      body: [
        "1rem",
        {
          lineHeight: "2rem",
          fontWeight: "400",
        },
      ],
    },
    // Typewriter Animation
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(23) forwards",
        caret:
          "typewriter 2s steps(23) forwards, blink 1s steps(23) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
    // End of Animation Code
    boxShadow: {
      "double-shadow":
        "0.75rem 0.75rem 0 0 #20112c, 1.5rem 1.5rem 0 -2px #f9c724, 1.5rem 1.5rem 0 0 black",
      none: "none",
    },
  },
};
export default config;
