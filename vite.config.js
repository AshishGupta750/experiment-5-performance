import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ],
  resolve: {
    alias: {
      // FIX: Force react-window to use the ES Module build to solve "Missing Export" error
      'react-window': 'react-window/dist/index.esm.js',
    },
  },
})