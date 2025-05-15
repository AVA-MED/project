import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    visualizer({ open: true }) // 👈 This opens a visual report after build
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Optional: increase chunk warning threshold
    rollupOptions: {
      // Optional: manually split large vendor chunks
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'
            if (id.includes('tailwindcss')) return 'vendor-tailwind'
            return 'vendor'
          }
        }
      }
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.jpeg' ,'**/*.JPG'] // Add this line
})

