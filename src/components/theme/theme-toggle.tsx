"use client";

import { useEffect, useState } from "react";
import { applyTheme, storageKey } from "./theme-provider";

type Theme = "light" | "dark" | "system";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    return (window.localStorage.getItem(storageKey) as Theme | null) ?? "system";
  } catch {
    return "system";
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();

    applyTheme(initialTheme);
    setTheme(initialTheme);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = isDark ? "light" : "dark";

    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Theme still applies for the current session if storage is unavailable.
    }

    applyTheme(nextTheme);
    setTheme(nextTheme);
    setIsDark(nextTheme === "dark");
  }

  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isDark}
      onClick={toggleTheme}
      title={label}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-surface text-foreground shadow-soft transition-colors hover:bg-surface-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="sr-only">
        {theme === "system" ? "System theme active. " : ""}
        {label}
      </span>
      {isDark ? (
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="m4.22 4.22 1.42 1.42" />
          <path d="m18.36 18.36 1.42 1.42" />
          <path d="M3 12h2" />
          <path d="M19 12h2" />
          <path d="m4.22 19.78 1.42-1.42" />
          <path d="m18.36 5.64 1.42-1.42" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.8 14.1A7.9 7.9 0 0 1 9.9 3.2 8.5 8.5 0 1 0 20.8 14.1Z" />
        </svg>
      )}
    </button>
  );
}
