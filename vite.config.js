import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  // Настройки для корректной работы с путями и статикой
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // Оптимизация сборки статических файлов
  build: {
    assetsInlineLimit: 4096, // Файлы меньше 4kb будут встроены в код
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Сортировка ассетов по типам в подпапки
          if (
            assetInfo.name?.endsWith(".ttf") ||
            assetInfo.name?.endsWith(".woff2")
          ) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          if (
            assetInfo.name?.endsWith(".png") ||
            assetInfo.name?.endsWith(".jpg") ||
            assetInfo.name?.endsWith(".jpeg") ||
            assetInfo.name?.endsWith(".webp")
          ) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },

  // Явное указание обрабатываемых типов файлов
  assetsInclude: [
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.webp",
    "**/*.svg",
    "**/*.ttf",
    "**/*.woff2",
  ],

  // Настройки сервера разработки
  server: {
    port: 3000,
    open: true,
  },
});
