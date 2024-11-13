import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "./" : "/", // Rutas relativas solo en producción
  build: {
    outDir: "../dist", // Cambia `output` al nombre de la carpeta de destino deseada
    emptyOutDir: true, // Elimina el contenido previo en la carpeta de salida al compilar
  },
}));
