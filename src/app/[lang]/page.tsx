import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/i18n-config";
import { Header } from "@/app/[lang]/components/Header/Header";
import { Button } from "@/components/Button/Default/Button";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Header lang={lang} dictionary={dictionary.header} />

      <Button
        text="Button"
        variant="tinted"
        color="danger"
        disabled
        iconPosition="start"
        onlyIcon
      />
    </div>
  );
}
