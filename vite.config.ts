import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  base: '/',
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        business: resolve(__dirname, 'business.html'),
        faq: resolve(__dirname, 'faq.html'),
        'beta-setup': resolve(__dirname, 'beta-setup.html'),
      },
    },
  },
})
