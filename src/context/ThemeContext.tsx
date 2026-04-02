import { useCallback, useMemo, useState, type ReactNode } from "react";
import { THEME_STORAGE_KEY, type ThemePreference } from "../lib/constants";
import { ThemeContext } from "./theme-context";

function readInitialTheme(): ThemePreference {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemePreference>(readInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: ThemePreference = prev === "dark" ? "light" : "dark";
      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
