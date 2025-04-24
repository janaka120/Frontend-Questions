import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        app_a: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
      dev: true,
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5000,
  },
  preview: {
    port: 5000,
    cors: true,
  },
});
