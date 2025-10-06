import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 8080, // This is the port users connect to (nginx port)
    },
    watch: {
      usePolling: true,
    },
  },
});
