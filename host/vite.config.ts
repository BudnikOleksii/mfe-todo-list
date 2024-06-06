import path from 'path';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'task-host',
      remotes: {
        auth: 'http://localhost:3001/assets/remoteEntry.js',
        todoForm: 'http://localhost:3002/assets/remoteEntry.js',
        todoList: 'http://localhost:3003/assets/remoteEntry.js',
      },
      // TODO figure out why it can't reslove @radix-ui
      shared: ['react'],
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
