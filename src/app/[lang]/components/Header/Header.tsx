"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Typography } from "@/components/Typography/Typography";
import { cn } from "@/lib/utils";
import { type getDictionary } from "@/i18n/get-dictionary";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

export const Header = ({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
  lang: string;
}) => {
  const pathname = usePathname();

  const navItems = [
    { redirect: `/${lang}`, name: dictionary.home },
    { redirect: `/${lang}/courses`, name: dictionary.courses },
    { redirect: `/${lang}/about`, name: dictionary.about },
    { redirect: `/${lang}/contact`, name: dictionary.contact },
    { redirect: `/${lang}/instructor`, name: dictionary.instructor },
  ];

  const renderNavItems = () => {
    return navItems.map((item) => {
      const isActive = pathname.startsWith(item.redirect);

      return (
        <Typography
          tag="li"
          variant="text-body-md-500"
          className={cn(
            `cursor-pointer p-4 border-t-2 border-t-gray-900 text-gray-500 hover:text-white`,
            isActive && "border-t-2 border-t-primary-500 text-white"
          )}
          key={item.redirect}
        >
          <Link href={item.redirect}>{item.name}</Link>
        </Typography>
      );
    });
  };

  return (
    <header className="flex items-center justify-between px-8 bg-gray-900">
      <nav>
        <ul className="flex gap-4">{renderNavItems()}</ul>
      </nav>
      <div className="flex gap-4 text-white">
        {/* TODO implementar componente de select */}
        <button>USD</button>
        <LocaleSwitcher />
      </div>
    </header>
  );
};
