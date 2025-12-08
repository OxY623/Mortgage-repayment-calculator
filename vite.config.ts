// vite.config.ts
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  root: "src",
  plugins: [react(), svgr()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: "esbuild", // Use esbuild for minification (default)
    assetsDir: "assets",
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.html"),
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Hashing for cache busting
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Optional alias for cleaner imports
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"', // Inject environment variables
  },
});
