import { enT, esT, deT } from '@/locales';

export default function loadTranslations(locale: string) {
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
