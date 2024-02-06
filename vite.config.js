import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Checkerboard from 'vite-plugin-checker';


// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  plugins: [react(),
  Checkerboard(),
],
base: './',
  css:{
    modules:
    {
      localsConvention: "camelCase",
    }
  }
})
