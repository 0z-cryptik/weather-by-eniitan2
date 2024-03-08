import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    proxy: {
      '/forecast.json': {
        target: 'https://weatherapi-com.p.rapidapi.com',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()],
})
