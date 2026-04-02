import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import es from "../locales/es.json";
import ptBR from "../locales/pt-BR.json";
import { LOCALE_STORAGE_KEY, type LocaleCode } from "../lib/constants";

function readSavedLocale(): LocaleCode {
  if (typeof window === "undefined") return "pt-BR";
  const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (raw === "en" || raw === "es" || raw === "pt-BR") return raw;
  return "pt-BR";
}

function setDocumentLang(lng: string): void {
  const html =
    lng === "pt-BR" ? "pt-BR" : lng === "es" ? "es" : "en";
  document.documentElement.setAttribute("lang", html);
}

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, lng);
  } catch {
    /* ignore quota / private mode */
  }
  setDocumentLang(lng);
});

/** Must be awaited before React render — otherwise t() returns raw keys until init completes */
export const i18nInitPromise = i18n
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      en: { translation: en },
      es: { translation: es },
    },
    lng: readSavedLocale(),
    fallbackLng: "pt-BR",
    // Do not set supportedLngs/nonExplicitSupportedLngs here: with bundled resources
    // they can leave i18n.languages empty and t() returns raw keys (i18next v24).
    interpolation: { escapeValue: false },
    react: {
      useSuspense: false,
    },
  })
  .then(() => {
    if (typeof document !== "undefined") {
      setDocumentLang(i18n.language);
    }
  });

export default i18n;
