import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    workspace: ["./vitest.unit.config.ts", "./vitest.storybook.config.ts"],
  },
});
