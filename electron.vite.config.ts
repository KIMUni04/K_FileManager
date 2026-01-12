import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    resolve: {
      alias: {
        '@backend': resolve('src/main'),
        '@preload': resolve('src/preload'),
        '@shared': resolve('src/shared'),
      },
    },
  },
  preload: {
    resolve: {
      alias: {
        '@backend': resolve('src/main'),
        '@preload': resolve('src/preload'),
        '@shared': resolve('src/shared'),
      },
    },
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
        '@': resolve('src/renderer/src'),
      },
    },
    plugins: [react(), tailwindcss()],
  },
})
