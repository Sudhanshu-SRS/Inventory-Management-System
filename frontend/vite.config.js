import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Inventory-Management-System/",
  css: {
    postcss: "./postcss.config.js",
  },
});
