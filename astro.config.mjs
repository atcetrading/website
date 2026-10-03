// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. With a custom domain, set `site` to it and remove `base`.
  site: 'https://atcetrading.github.io',
  base: '/website',
  integrations: [react()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'], // add 'de' later
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
