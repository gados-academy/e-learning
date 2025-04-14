export const i18n = {
  defaultLocale: "en",
  locales: ["en", "pt"],
  localePrefix: 'never'
} as const;

export type Locale = (typeof i18n)["locales"][number];
