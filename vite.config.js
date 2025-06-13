import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
      vue(),
      dts({
        insertTypesEntry: true,
      })
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'resources/js/index.js'),
      name: 'FormBuilder',
      formats: ['es', 'umd'],
      fileName: (format) => `form-builder.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});