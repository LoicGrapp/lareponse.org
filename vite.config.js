// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'src',
  plugins: [
    tailwindcss(),
  ],
  server: {
    // Rediriger toutes les requêtes vers index.html (SPA)
    historyApiFallback: true,
  },
});