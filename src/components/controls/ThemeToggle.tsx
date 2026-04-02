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
      className="flex items-center justify-center rounded-lg bg-surface-container-high p-2.5 text-on-surface ghost-border transition-all hover:border-primary/40 hover:text-primary"
      aria-pressed={isDark}
      aria-label={isDark ? t("a11y.themeToggleToLight") : t("a11y.themeToggleToDark")}
    >
      <MaterialIcon
        name={isDark ? "light_mode" : "dark_mode"}
        className="size-5"
      />
    </button>
  );
}
