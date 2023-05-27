import react from "@vitejs/plugin-react"
import * as path from "path"
import { defineConfig, loadEnv } from "vite"

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") }

  return {
    plugins: [react()],
    ...(mode === "development" && {
      server: {
        proxy: {
          "/graphql": {
            target: process.env.PROXY_URL,
            changeOrigin: true,
            ws: true,
          },
          "/api": {
            target: process.env.PROXY_URL,
            changeOrigin: true,
          },
          "/docs": {
            target: process.env.PROXY_URL,
            changeOrigin: true,
          },
          "/openapi.json": {
            target: process.env.PROXY_URL,
            changeOrigin: true,
          },
        },
      },
    }),
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
  }
})
