import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/theme-context";
import { MaterialIcon } from "../ui/MaterialIcon";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-on-surface ghost-border transition-all hover:border-primary/40"
      aria-pressed={isDark}
      aria-label={isDark ? t("a11y.themeToggleToLight") : t("a11y.themeToggleToDark")}
    >
      <MaterialIcon
        name={isDark ? "light_mode" : "dark_mode"}
        className="size-5 text-on-surface transition-colors group-hover:text-[rgb(var(--color-light-brand-primary))] dark:group-hover:text-[rgb(var(--color-dark-brand-primary))]"
      />
    </button>
  );
}
