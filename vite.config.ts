import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
    port: 5173,  
    host: "0.0.0.0", 
    strictPort: true, 
    allowedHosts: ["dev-scout-app.onrender.com"], 
  },
});
