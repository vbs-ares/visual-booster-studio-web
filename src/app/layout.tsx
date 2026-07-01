import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const themeInitScript = `
try {
  var storedTheme = window.localStorage.getItem("visual-booster-studio-theme");
  var theme = storedTheme || "system";
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var resolvedTheme = theme === "system" ? (prefersDark ? "dark" : "light") : theme;
  document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  document.documentElement.dataset.theme = theme;
} catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://visualboosterstudio.com"),
  title: {
    default: "Visual Booster Studio",
    template: "%s | Visual Booster Studio"
  },
  description: "Visual Booster Studio company website."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
