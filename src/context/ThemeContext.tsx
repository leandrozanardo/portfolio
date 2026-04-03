import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  THEME_COLOR_META,
  THEME_STORAGE_KEY,
  type ThemePreference,
} from "../lib/constants";
import { ThemeContext } from "./theme-context";

function readInitialTheme(): ThemePreference {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyThemeColorMeta(pref: ThemePreference): void {
  const el = document.querySelector('meta[name="theme-color"]');
  if (!el) return;
  el.setAttribute(
    "content",
    pref === "dark" ? THEME_COLOR_META.dark : THEME_COLOR_META.light,
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemePreference>(readInitialTheme);

  useEffect(() => {
    applyThemeColorMeta(theme);
  }, [theme]);

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
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
