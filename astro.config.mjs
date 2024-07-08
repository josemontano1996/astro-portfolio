import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { supportedLocales } from './src/consts/locales';

// https://astro.build/config
export default defineConfig({
  redirects: { source: '/', destination: '/en' },
  i18n: {
    defaultLocale: 'en',
    locales: supportedLocales,
    routing: {
      prefixDefaultLocale: true,
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
