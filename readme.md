# React + TypeScript + Vite

## Aprendiendo a Usar React para FiveM, Esto solo es una prueba para saber cómo mandarlo a producción para especificamente FiveM.

## Nestor36 (GuxFiz)

- vite.config.ts:

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "./" : "/", // Rutas relativas solo en producción
  build: {
    outDir: "../dist", // Cambia `dist` al nombre de la carpeta de destino deseada
    emptyOutDir: true, // Elimina el contenido previo en la carpeta de salida al compilar
  },
}));

```
