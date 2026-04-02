import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import type { LocaleCode } from "../../lib/constants";

const LOCALES: {
  code: LocaleCode;
  Flag: () => ReactElement;
  labelKey: string;
}[] =
  [
    {
      code: "pt-BR",
      labelKey: "a11y.switchToPt",
      Flag: FlagBr,
    },
    {
      code: "en",
      labelKey: "a11y.switchToEn",
      Flag: FlagUs,
    },
    {
      code: "es",
      labelKey: "a11y.switchToEs",
      Flag: FlagEs,
    },
  ];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  return (
    <div
      className="flex items-center gap-1 rounded-lg bg-surface-container-high p-1 ghost-border"
      role="group"
      aria-label={t("a11y.languageSwitcher")}
    >
      {LOCALES.map(({ code, Flag, labelKey }) => {
        const resolved = i18n.resolvedLanguage ?? i18n.language;
        const active = resolved === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => void i18n.changeLanguage(code)}
            className={`flex size-9 items-center justify-center rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              active
                ? "bg-primary-container/40 ring-1 ring-primary/30"
                : "hover:bg-surface-bright/50"
            }`}
            aria-label={t(labelKey)}
            aria-current={active ? "true" : undefined}
          >
            <span className="size-5 overflow-hidden rounded-sm shadow-sm" aria-hidden>
              <Flag />
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FlagBr() {
  return (
    <svg viewBox="0 0 20 14" className="size-full" aria-hidden>
      <rect width="20" height="14" fill="#009b3a" />
      <path d="M10 2.5l5.5 4.5-5.5 4.5L4.5 7 10 2.5z" fill="#ffdf00" />
      <circle cx="10" cy="7" r="2.2" fill="#002776" />
    </svg>
  );
}

function FlagUs() {
  return (
    <svg viewBox="0 0 20 14" className="size-full" aria-hidden>
      <rect width="20" height="14" fill="#b22234" />
      <path
        fill="#fff"
        d="M0 0h20v1H0zm0 2h20v1H0zm0 2h20v1H0zm0 2h20v1H0zm0 2h20v1H0zm0 2h20v1H0z"
      />
      <rect width="8" height="7.5" fill="#3c3b6e" />
    </svg>
  );
}

function FlagEs() {
  return (
    <svg viewBox="0 0 20 14" className="size-full" aria-hidden>
      <rect width="20" height="14" fill="#c60b1e" />
      <rect y="3.5" width="20" height="7" fill="#ffc400" />
    </svg>
  );
}
