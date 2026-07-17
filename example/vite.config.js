import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [vue(), svgLoader()],
  root: resolve(__dirname),
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@s': resolve(__dirname, './src'),
      'form-builder': resolve(__dirname, '../src'),
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
});
