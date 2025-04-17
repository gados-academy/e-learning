import type { Preview } from "@storybook/react";
import "@/app/[lang]/globals.css";
import {
  getRouter,
  usePathname,
} from "@storybook/nextjs/navigation.mock";
import mockRouter from "next-router-mock";
import { i18n } from "../src/i18n/i18n-config";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  beforeEach: () => {
    getRouter().push.mockImplementation(
      (...args: Parameters<typeof mockRouter.push>) => mockRouter.push(...args)
    );
    getRouter().replace.mockImplementation(
      (...args: Parameters<typeof mockRouter.replace>) =>
        mockRouter.replace(...args)
    );

    usePathname.mockImplementation(() => {
      const pathname = mockRouter.pathname || `/${i18n.defaultLocale}`;
      const segments = pathname.split("/");
      const isLocaleMissing = i18n.locales.every(
        (locale) =>
          !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
      );

      if (isLocaleMissing) {
        segments[1] = i18n.defaultLocale;
      }

      return segments.join("/");
    });
  },
};

export default preview;
