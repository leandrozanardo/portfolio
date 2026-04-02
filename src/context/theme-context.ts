import { createContext, useContext } from "react";
import type { ThemePreference } from "../lib/constants";

export type ThemeContextValue = {
  theme: ThemePreference;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
