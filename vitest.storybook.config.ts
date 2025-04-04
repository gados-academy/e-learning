import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [storybookTest({ configDir: path.join(dirname, ".storybook") })],
  test: {
    name: "storybook",
    include: ["**/*.stories.tsx", "**/*.stories.ts"],
    setupFiles: [".storybook/vitest.setup.ts"],
    browser: {
      enabled: true,
      headless: true,
      name: "chromium",
      provider: "playwright",
    },
  },
});
