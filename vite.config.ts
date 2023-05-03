import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  optimizeDeps: {
    exclude: ['js-big-decimal', 'blip-ds/loader', '@ionic/core/loader', '@ionic/pwa-elements/loader']
  },
})