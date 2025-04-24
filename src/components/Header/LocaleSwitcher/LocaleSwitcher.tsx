import { Select } from "@/components/Select/Select";
import { i18n, type Locale } from "@/i18n/i18n-config";
import { usePathname, useRouter } from "next/navigation";
import translations from "@/i18n/locales/index";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleLocaleChange = (locale: string) => {
    const newPath = redirectedPathname(locale as Locale);
    router.push(newPath);
  };

  const activeLocale = pathname?.split("/")[1] as Locale;

  const activeLabel = translations[activeLocale]?.header.language;

  const localeOptions = i18n.locales.map((locale) => ({
    value: locale,
    label: translations[locale]?.header.language || locale,
  }));

  console.log(activeLabel);

  return (
    <Select
      label={activeLabel}
      items={localeOptions}
      defaultValue={i18n.defaultLocale}
      onSelect={handleLocaleChange}
      className="border-none"
    />
  );
}
