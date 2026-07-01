"use client";

import { useEffect, type ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: "light" | "dark" | "system";
};

const storageKey = "visual-booster-studio-theme";

function applyTheme(theme: "light" | "dark" | "system") {
  const root = document.documentElement;
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolvedTheme = theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme;

  root.classList.toggle("dark", resolvedTheme === "dark");
  root.dataset.theme = theme;
}

export function ThemeProvider({
  children,
  defaultTheme = "system"
}: ThemeProviderProps) {
  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey) as
      | "light"
      | "dark"
      | "system"
      | null;

    applyTheme(storedTheme ?? defaultTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      const currentTheme = window.localStorage.getItem(storageKey);

      if (!currentTheme || currentTheme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [defaultTheme]);

  return children;
}

export { applyTheme, storageKey };
