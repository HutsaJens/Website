import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    rollupOptions: {
      input: {
        snake: resolve(__dirname, 'snake.html'),
      },
    },
    assetsInlineLimit: 100000000, // 100MB
    cssCodeSplit: false,
    emptyOutDir: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
