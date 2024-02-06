import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Checkerboard from 'vite-plugin-checker';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
  ,
  Checkerboard(),
],
  css:{
    modules:
    {
      localsConvention: "camelCase",
    }
  }
})
