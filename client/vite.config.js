import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy : {
      '/flaskapi' : 'http://127.0.0.1:1000',
      '/api' : 'http://localhost:3000'
    }
  },
  plugins: [react()],
})
