import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Map @ to the src folder
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // Path to your setup file,
  },
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      'react-schedule-meeting': '/node_modules/react-schedule-meeting/dist/index.esm.js', // Adjust path as needed
    },
  },
});
