// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'src',
  base: "/lareponse.org/",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  plugins: [
    tailwindcss(),
  ],
  server: {
    // Rediriger toutes les requêtes vers index.html (SPA)
    historyApiFallback: true,
  },
});