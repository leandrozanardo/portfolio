export const THEME_STORAGE_KEY = "portfolio-theme" as const;
export const LOCALE_STORAGE_KEY = "portfolio-locale" as const;

export const CV_PATH = "/docs/CV.docx" as const;

export const CONTACT_MAILTO = "mailto:leandrozanardo@gmail.com" as const;

/** Public profile and contact URLs */
export const SOCIAL_URLS = {
  linkedin: "https://www.linkedin.com/in/leandro-zanardo/",
  github: "https://github.com/leandrozanardo/",
  /** E.164 without + for wa.me: 55 + DDD 19 + 981459444 */
  whatsapp: "https://wa.me/5519981459444",
} as const;

export type ThemePreference = "dark" | "light";
export type LocaleCode = "pt-BR" | "en" | "es";
