import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/Garden_Guardian/',
//   plugins: [react()],
// })

export default defineConfig(({ command, mode }) => {
  let base;

  // Check if the command is 'serve' and the mode is 'development'
  if (command === "serve" && mode === "development") {
    // When serving locally, we don't set the base property
    base = "/";
  } else {
    // When building for production, set the base property for GitHub Pages
    base = "/";
  }

  return {
    base,
    plugins: [react()],
  };
});
