import { enT, esT, deT } from '@/locales';
import type { TLocales } from '@/types/locales';

export default function loadTranslations(locale: TLocales) {
  switch (locale) {
    case 'en':
      return enT;
    case 'es':
      return esT;
    case 'de':
      return deT;
    default:
      return enT;
  }
}
