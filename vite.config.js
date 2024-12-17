import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig((env) => {
  const isBuild = env.command === 'build';
  return {
    plugins: [react()],
    base: isBuild ? "/elRefugio-rdism/" : "/",
  }
})
