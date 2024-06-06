import path from 'path';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';

import { dependencies } from './package.json';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'todo-form',
      filename: 'remoteEntry.js',
      exposes: {
        './TodoForm': './src/App.tsx',
      },
      shared: {
        ...dependencies,
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
