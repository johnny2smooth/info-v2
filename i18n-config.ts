export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "id"],
} as const;

export type Locale = typeof i18n["locales"][number];

export type LangParams = { params: { lang: Locale } };
