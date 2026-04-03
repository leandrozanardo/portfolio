import type { ReactElement } from "react";
import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { LocaleCode } from "../../lib/constants";

const LOCALES: {
  code: LocaleCode;
  Flag: () => ReactElement;
  labelKey: string;
  shortLabel: string;
}[] = [
  {
    code: "pt-BR",
    labelKey: "a11y.switchToPt",
    Flag: FlagBr,
    shortLabel: "PT-BR",
  },
  {
    code: "en",
    labelKey: "a11y.switchToEn",
    Flag: FlagUs,
    shortLabel: "EN",
  },
  {
    code: "es",
    labelKey: "a11y.switchToEs",
    Flag: FlagEs,
    shortLabel: "ES",
  },
];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const buttonId = useId();

  const resolved = i18n.resolvedLanguage ?? i18n.language;
  const activeLocale = LOCALES.find((l) => l.code === resolved) ?? LOCALES[0]!;
  const ActiveFlag = activeLocale.Flag;
  
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const pick = (code: LocaleCode) => {
    void i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} className="relative">
      <button
        id={buttonId}
        type="button"
        className="flex h-9 items-center gap-0.5 rounded-lg bg-surface-container-high py-1 pl-1 pr-0.5 ghost-border transition-colors hover:bg-surface-bright/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:gap-1 sm:pr-1"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={open ? menuId : undefined}
        aria-label={open ? t("a11y.closeLanguageMenu") : t("a11y.openLanguageMenu")}
        onClick={() => setOpen((o) => !o)}
      >
        <span
          className="flex size-8 items-center justify-center rounded-md bg-primary-container/40 ring-1 ring-primary/30"
          aria-hidden
        >
          <span className="size-5 overflow-hidden rounded-sm shadow-sm">
            <ActiveFlag />
          </span>
        </span>
        <span
          className={`material-symbols-outlined text-on-surface-variant transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          expand_more
        </span>
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={t("a11y.languageOptions")}
          className="absolute right-0 top-[calc(100%+6px)] z-[60] min-w-[11rem] rounded-lg border border-outline-variant/20 bg-surface-container-high py-1 shadow-lg ghost-border"
        >
          {LOCALES.map(({ code, Flag, labelKey, shortLabel }) => {
            const active = resolved === code;
            return (
              <button
                key={code}
                type="button"
                role="menuitem"
                className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors focus:outline-none focus-visible:bg-surface-bright/40 ${
                  active
                    ? "bg-primary-container/25 text-on-surface"
                    : "text-on-surface-variant hover:bg-surface-bright/50"
                }`}
                aria-current={active ? "true" : undefined}
                aria-label={t(labelKey)}
                onClick={() => pick(code)}
              >
                <span className="size-5 shrink-0 overflow-hidden rounded-sm shadow-sm" aria-hidden>
                  <Flag />
                </span>
                <span className="min-w-0 flex-1 font-medium text-on-surface">{shortLabel}</span>
                <span className="flex size-5 shrink-0 items-center justify-center" aria-hidden>
                  {active ? (
                    <span className="material-symbols-outlined text-lg text-primary">check</span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
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
