import type { Preview } from "@storybook/react";
import "@/app/globals.css";
import "@/i18n";
import {
  getRouter,
  usePathname,
} from "@storybook/nextjs/navigation.mock";
import mockRouter from "next-router-mock";

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
    usePathname.mockImplementation(() => mockRouter.pathname);
  },
};

export default preview;
