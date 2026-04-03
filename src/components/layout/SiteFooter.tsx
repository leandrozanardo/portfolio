import { useTranslation } from "react-i18next";
import { CONTACT_MAILTO, SOCIAL_URLS } from "../../lib/constants";
import { LogoMark } from "../ui/LogoMark";

const FOOTER_LINKS = [
  { href: SOCIAL_URLS.linkedin, labelKey: "footer.linkedin" as const },
  { href: SOCIAL_URLS.github, labelKey: "footer.github" as const },
  { href: CONTACT_MAILTO, labelKey: "footer.email" as const },
  { href: SOCIAL_URLS.whatsapp, labelKey: "footer.whatsapp" as const },
];

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-lowest px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-10 md:flex-row md:gap-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <div className="size-16 shrink-0">
              <LogoMark className="size-16" />
            </div>
            <span className="font-bold text-on-surface">{t("brand.fullName")}</span>
          </div>
          <p className="text-xs text-outline">{t("footer.rights")}</p>
        </div>
        <nav
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          aria-label={t("a11y.footerNav")}
        >
          {FOOTER_LINKS.map(({ href, labelKey }) => (
            <a
              key={labelKey}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
            >
              {t(labelKey)}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
