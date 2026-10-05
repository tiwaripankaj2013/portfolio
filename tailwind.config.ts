import type { Config } from "tailwindcss";

// Every color reads a CSS variable (R G B channels) so opacity utilities
// like bg-primary/10 work. Values come from src/data/portfolio.json → theme.
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("bg"), surface: c("surface"), card: c("card"), border: c("border"),
        fg: c("fg"), muted: c("muted"), primary: c("primary"),
        "primary-fg": c("primary-fg"), accent: c("accent"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
