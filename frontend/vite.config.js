import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Ensures assets load correctly on Vercel
  build: {
    outDir: 'dist', // default, can be left as-is
  },
});
