import { defineConfig } from 'vite'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'vitor-directory-index',
      writeBundle(options) {
        const outputDir = options.dir ?? 'dist'
        copyFileSync(resolve(outputDir, 'vitor.html'), resolve(outputDir, 'index.html'))
      },
    },
  ],
  base: '/mba-ida/vitor/',
  build: { rollupOptions: { input: 'vitor.html' } },
})
