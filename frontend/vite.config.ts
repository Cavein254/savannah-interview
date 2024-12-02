/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslintPlugin from "@nabla/vite-plugin-eslint"
import dotenv from "dotenv"

dotenv.config()

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
  },
  server: {
    proxy: {
      "/api": {
        target: (process.env.SERVER_URL as string) || "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "../backend/dist", // Output folder
  },
})
