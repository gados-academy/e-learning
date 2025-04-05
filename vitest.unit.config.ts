import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    name: "unit",
    environment: "jsdom",
    include: ["src/**/*.test.tsx", "src/**/*.test.ts"],
    exclude: ["**/*.stories.tsx", "**/*.stories.ts"],
    coverage: {
      include: ["src/*/**/*.tsx"],
      exclude: ["**/*.stories.tsx", "**/*.stories.ts"],
      thresholds: {
        functions: 80,
      },
    },
  },
});
