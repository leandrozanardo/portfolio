import { useTranslation } from "react-i18next";

export function SkipLink() {
  const { t } = useTranslation();
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-0 z-[100] -translate-y-16 rounded-lg bg-primary-container px-4 py-2 text-sm font-bold text-on-primary-fixed shadow-lg transition-transform focus:translate-y-4 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {t("a11y.skipToContent")}
    </a>
  );
}
