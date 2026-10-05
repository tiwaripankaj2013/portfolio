import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { getPortfolio } from "@/lib/api";
import { themeCss } from "@/lib/theme";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const script = Caveat({ subsets: ["latin"], variable: "--font-script" });

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getPortfolio();
  return { title: meta.title, description: meta.description };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = await getPortfolio();
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${script.variable}`}>
      <head><style dangerouslySetInnerHTML={{ __html: themeCss(theme) }} /></head>
      <body>
        <ThemeProvider defaultTheme={theme.defaultMode}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
