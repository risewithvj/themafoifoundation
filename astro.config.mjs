// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The Ma Foi Foundation — static site.
// Set `site` to the production domain when known (used for canonical URLs / sitemap).
export default defineConfig({
  site: 'https://www.themafoifoundation.in',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
