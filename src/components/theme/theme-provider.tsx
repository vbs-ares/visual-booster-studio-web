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
    let storedTheme: "light" | "dark" | "system" | null = null;

    try {
      storedTheme = window.localStorage.getItem(storageKey) as
        | "light"
        | "dark"
        | "system"
        | null;
    } catch {
      storedTheme = null;
    }

    applyTheme(storedTheme ?? defaultTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      let currentTheme: string | null = null;

      try {
        currentTheme = window.localStorage.getItem(storageKey);
      } catch {
        currentTheme = null;
      }

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
