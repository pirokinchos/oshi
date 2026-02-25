import { defineConfig } from "astro/config"

const isProd = process.env.NODE_ENV === "production"

export default defineConfig({
  site: "https://hiroking815.github.io",
  base: isProd ? "/oshi/" : "/",
})
