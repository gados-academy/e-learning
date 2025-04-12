"use client";

import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Typography } from "@/components/Typography/Typography";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  const navItems = [
    { redirect: "/", name: t("header:nav:home") },
    { redirect: "/courses", name: t("header:nav:courses") },
    { redirect: "/about", name: t("header:nav:about") },
    { redirect: "/contact", name: t("header:nav:contact") },
    { redirect: "/instructor", name: t("header:nav:instructor") },
  ];

  const renderNavItems = () => {
    return navItems.map((item) => {
      const isActive = pathname === item.redirect;

      return (
        <Typography
          tag="li"
          variant="text-body-md-500"
          className={cn(
            `cursor-pointer p-4 border-t-2 border-t-gray-900 text-gray-500 hover:text-white`,
            isActive && "border-t-2 border-t-primary-500 text-white"
          )}
          data-active={isActive}
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
      <div className="flex gap-4">
        {/* TODO implementar componente de select */}
        <button>USD</button>
        <button>English</button>
      </div>
    </header>
  );
};
