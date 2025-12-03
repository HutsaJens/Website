import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    assetsInlineLimit: 100000000, // 100MB
    cssCodeSplit: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  server: {
    port: 5174,
  },
});
