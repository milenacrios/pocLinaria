import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import wyw from "@wyw-in-js/vite";
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    nodeResolve({
      extensions: [".tsx", ".ts"],
    }),
    react(),
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
  build: {
    target: command === "serve" ? "modules" : "es2015",
  },
}));
