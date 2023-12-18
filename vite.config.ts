import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import jsonfile from "jsonfile";

import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import postcss from "./postcss.config.js";

const manifest = jsonfile.readFileSync("./manifest.json");

export default defineConfig(({ command }) => {
  const isProd = command === "build";

  if (isProd) {
    return {
      build: {
        rollupOptions: {
          input: resolve(__dirname, "src/main.ts"),
          output: {
            format: "iife",
            dir: resolve(__dirname, "./dist"),
          },
        },
        lib: {
          entry: resolve(__dirname, "src/main.ts"),
          name: `aud_015_${Date.now()}`,
          fileName: "aud_015",
          formats: ["iife"],
        },
      },
      plugins: [
        cssInjectedByJsPlugin({
          styleId: "ca__styles_aud_015",
        }),
      ],
      css: {
        postcss,
      },
    };
  }

  return {
    plugins: [crx({ manifest })],
    css: {
      postcss,
    },
  };
});
