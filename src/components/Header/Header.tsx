import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Typography } from "@/components/Typography/Typography";
import { cn } from "@/lib/utils";

export const Header = () => {
  interface NavItem {
    redirect: string;
    name: string;
  }

  const { t } = useTranslation();
  const router = useRouter();

  const navItems = [
    { redirect: "/", name: t("header:nav:home") },
    { redirect: "/courses", name: t("header:nav:courses") },
    { redirect: "/about", name: t("header:nav:about") },
    { redirect: "/contact", name: t("header:nav:contact") },
    { redirect: "/instructor", name: t("header:nav:instructor") },
  ];

  function getActiveNavItem(navItems: NavItem[], currentPath: string) {
    const currentNavItemIndex = navItems.findIndex(
      (nav) => currentPath === nav.redirect
    );
    return currentNavItemIndex;
  }

  const [activeItem, setActiveItem] = useState(() =>
    getActiveNavItem(navItems, router.pathname)
  );

  const renderNavItems = () => {
    return navItems.map((item, index) => {
      const isActive = activeItem === index;

      return (
        <li
          className={cn(
            `cursor-pointer p-3 border-2 border-gray-900 text-gray-500 hover:text-white`,
            isActive && "border-t-2 border-t-primary-500 text-white"
          )}
          data-active={isActive}
          key={item.redirect}
          onClick={() => setActiveItem(index)}
        >
          <Link href={item.redirect}>
            <Typography tag="a" variant="text-body-md-500">
              {item.name}
            </Typography>
          </Link>
        </li>
      );
    });
  };

  return (
    <header className="flex items-center justify-between px-8 bg-gray-900 text-white">
      <nav>
        <ul className="flex space-x-4">{renderNavItems()}</ul>
      </nav>
      <div className="flex space-x-4">
        {/* TODO implementar componente de select */}
        <button>USD</button>
        <button>English</button>
      </div>
    </header>
  );
};
