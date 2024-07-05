import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { supportedLocales } from './src/consts/locales';


// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: supportedLocales,
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }),, react()]
});