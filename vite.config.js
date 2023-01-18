import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.js",
    },
  },
  plugins: [vue()],
  envDir: "src",
});

//* To use env file u need to add envDir: 'src', **//
