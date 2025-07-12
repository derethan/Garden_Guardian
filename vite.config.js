import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';

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
    plugins: [
      react(),
      VitePWA({
        manifest: {
          name: "Garden Guardian",
          short_name: "GardenGuardian",
          description: "Your app description",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          start_url: "/",
          icons: [
            {
              src: "icons/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "icons/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  };
});
