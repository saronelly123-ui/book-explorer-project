import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: './',

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        book: 'book.html',
        favorites: 'favorites.html',
        about: 'about.html',
      },
    },
  },
})