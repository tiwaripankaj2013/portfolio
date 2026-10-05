"use client";
import { ThemeProvider as NextThemes } from "next-themes";

export function ThemeProvider({ children, defaultTheme }: { children: React.ReactNode; defaultTheme: string }) {
  return <NextThemes attribute="class" defaultTheme={defaultTheme} enableSystem>{children}</NextThemes>;
}
