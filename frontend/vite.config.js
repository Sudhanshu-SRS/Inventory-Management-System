import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Inventory-Management-System/",
  build: {
    outDir: "dist",
    sourcemap: false, // Disable sourcemaps to reduce file size
    rollupOptions: {
      output: {
        manualChunks: undefined,
        compact: true,
      },
    },
  },
});
