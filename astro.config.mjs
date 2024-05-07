import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { URL, BASE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: URL,
  base: BASE,

  integrations: [mdx(), sitemap(), tailwind()]
});
