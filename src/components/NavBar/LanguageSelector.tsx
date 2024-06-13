import { supportedLocales } from '@/consts/locales';
import { cn } from '../../lib/utils';

export const LanguageSelector = ({ locale, styles }: { locale: string; styles?: string }) => {
  const navigateTo = (value: string) => {
    window.location.href = `/${value}`;
  };
  return (
    <select
      className={cn('bg-background', styles)}
      onChange={(e) => navigateTo(e.target.value)}
      defaultValue={locale}
    >
      {supportedLocales.map((loc) => (
        <option key={loc} value={loc} className='p-1'>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
