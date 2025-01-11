import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Food-Delivery-Site/',
  plugins: [react()],
  server: { port: 5173 },
  build: { outDir: 'dist' // This ensures the build output goes to the root directory 
  }
})
