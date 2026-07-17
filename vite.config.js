import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from "vite-svg-loader";
import path from 'path';

export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer')
      ],
    },
  },
  build: {
    outDir: 'dist',
    commonjsOptions: { esmExternals: true },
    lib: {
      entry: path.resolve(__dirname, 'src/js/index.js'),
      name: 'FormBuilder',
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