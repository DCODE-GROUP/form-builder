import {defineConfig} from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'svg-test-stub',
      transform(code, id) {
        if (id.endsWith('.svg')) {
          return {
            code: 'export default { name: "SvgStub", template: "<svg />" }',
            map: null,
          };
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.js'],
  },
});
