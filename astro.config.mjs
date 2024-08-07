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
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
    fallbackLocale: 'en',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    ,
    react(),
  ],
});
