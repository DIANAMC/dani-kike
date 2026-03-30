// vite.config.ts - Additional configuration for GitHub Pages

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/<REPO_NAME>/', // Replace <REPO_NAME> with your repository name
  plugins: [vue()],
  build: {
    outDir: 'dist', // Output directory for the build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Main entry point
      },
    },
  },
});