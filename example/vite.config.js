import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  root: resolve(__dirname),
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      'form-builder': resolve(__dirname, '../resources'),
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
});
