import { useCallback, useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { CONTACT_MAILTO, CV_PATH, SOCIAL_URLS } from "../../lib/constants";
import { LanguageSwitcher } from "../controls/LanguageSwitcher";
import { ThemeToggle } from "../controls/ThemeToggle";
import { LinkedInIcon } from "../ui/LinkedInIcon";
import { LogoMark } from "../ui/LogoMark";
import { SkipLink } from "./SkipLink";

const NAV_LINKS = [
  { href: "#projects", key: "nav.projects" as const },
  { href: "#experience", key: "nav.experience" as const },
  { href: "#stack", key: "nav.stack" as const },
  { href: "#about", key: "nav.about" as const },
];

export function SiteHeader() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <SkipLink />
      <header className="fixed left-0 right-0 top-0 z-50 glass-nav px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
          <a
            href="#"
            className="flex min-w-0 items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={t("brand.portfolio")}
          >
            <LogoMark />
            <span className="truncate text-lg font-bold leading-tight tracking-tight text-on-surface">
              {t("brand.portfolio")}
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label={t("a11y.mainNav")}
          >
            {NAV_LINKS.map(({ href, key }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex xl:gap-4">
            <a
              href={CV_PATH}
              download
              className="flex rounded-lg bg-primary-container px-4 py-2.5 text-sm font-bold tracking-wide text-on-primary-fixed transition-all hover:shadow-[0_0_15px_rgba(179,197,255,0.3)] xl:px-5"
            >
              {t("nav.resume")}
            </a>
            <a
              href={CONTACT_MAILTO}
              className="flex rounded-lg bg-surface-container-high px-4 py-2.5 text-sm font-bold tracking-wide text-on-surface ghost-border transition-all xl:px-5"
            >
              {t("nav.contact")}
            </a>
            <a
              href={SOCIAL_URLS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg bg-surface-container-high p-2.5 text-on-surface ghost-border transition-all hover:text-primary"
              aria-label={t("a11y.linkedinProfile")}
            >
              <LinkedInIcon />
            </a>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-surface-container-high p-2.5 text-on-surface ghost-border"
              aria-expanded={menuOpen}
              aria-controls={panelId}
              aria-label={menuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="material-symbols-outlined" aria-hidden>
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t("a11y.mainNav")}
          id={panelId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-sm"
            aria-label={t("a11y.closeMenu")}
            onClick={closeMenu}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-6 border-l border-outline-variant/20 bg-surface-container-low p-6 pt-24 shadow-xl">
            <nav className="flex flex-col gap-4" aria-label={t("a11y.mainNav")}>
              {NAV_LINKS.map(({ href, key }) => (
                <a
                  key={href}
                  href={href}
                  className="text-base font-medium text-on-surface-variant transition-colors hover:text-primary"
                  onClick={closeMenu}
                >
                  {t(key)}
                </a>
              ))}
            </nav>
            <a
              href={CV_PATH}
              download
              className="flex justify-center rounded-lg bg-primary-container py-3 text-sm font-bold text-on-primary-fixed"
              onClick={closeMenu}
            >
              {t("nav.resume")}
            </a>
            <a
              href={CONTACT_MAILTO}
              className="flex justify-center rounded-lg bg-surface-container-high py-3 text-sm font-bold text-on-surface ghost-border"
              onClick={closeMenu}
            >
              {t("nav.contact")}
            </a>
            <a
              href={SOCIAL_URLS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-surface-container-high py-3 text-on-surface ghost-border"
              aria-label={t("a11y.linkedinProfile")}
            >
              <LinkedInIcon />
              <span className="text-sm font-medium">{t("footer.linkedin")}</span>
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
