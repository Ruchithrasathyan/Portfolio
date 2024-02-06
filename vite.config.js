import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Checkerboard from 'vite-plugin-checker';


// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(),
  Checkerboard(),
],
resolve: {
  alias: {
    '@': new URL('src', import.meta.url).pathname,
  },
},
  css:{
    modules:
    {
      localsConvention: "camelCase",
    }
  }
})
