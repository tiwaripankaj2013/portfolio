import type { Palette, Portfolio } from "./types";

const rgb = (hex: string) => {
  const n = parseInt(hex.replace("#", ""), 16);
  return `${n >> 16} ${(n >> 8) & 255} ${n & 255}`;
};
const vars = (p: Palette) => Object.entries(p).map(([k, v]) => `--${k}:${rgb(v)};`).join("");

/** Turns the JSON palettes into CSS variables consumed by tailwind.config.ts */
export const themeCss = (t: Portfolio["theme"]) => `:root{${vars(t.light)}}.dark{${vars(t.dark)}}`;
