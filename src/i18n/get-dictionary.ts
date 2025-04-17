import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("@/i18n/locales/en.json").then((module) => module.default),
  pt: () => import("@/i18n/locales/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
