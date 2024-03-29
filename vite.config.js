// eslint-disable-next-line no-unused-vars
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
  envDir: "src",
});

//* To use env file u need to add envDir: 'src', **//
