import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { BASE_URL, BASE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  base: BASE,

  integrations: [mdx(), sitemap(), tailwind()]
});
