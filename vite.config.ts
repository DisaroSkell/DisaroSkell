import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    host: '0.0.0.0',
    allowedHosts: [
      'disaroskell.com',
      'www.disaroskell.com',
      'localhost'
    ],
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
