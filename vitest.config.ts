import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    // Mirrors the `@/*` path in tsconfig.json. Declared by hand rather than
    // through vite-tsconfig-paths, which pulls a Vite major this project's
    // @types/node cannot satisfy.
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/lib/**/*.ts", "src/content/team.ts"],
      reporter: ["text", "html"],
      thresholds: { lines: 80, functions: 80, branches: 80, statements: 80 },
    },
  },
});
