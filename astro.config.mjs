import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { BASE, BASE_URL } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  base: BASE,

  integrations: [mdx(), sitemap(), tailwind(), react()]
});