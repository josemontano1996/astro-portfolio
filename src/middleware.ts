import { sequence } from 'astro:middleware';
import { middleware } from 'astro:i18n'; // Astro's own i18n routing config

export const onRequest = sequence(
  middleware({
    redirectToDefaultLocale: false,
    prefixDefaultLocale: true,
  }),
);
