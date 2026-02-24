import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'; // [cite: 259]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Generates stats.html to analyze bundle size [cite: 263]
    visualizer({ open: true }) 
  ],
})