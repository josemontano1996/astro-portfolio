import React, { useRef } from 'react';
import { supportedLocales } from '@/consts/locales';
import { cn } from '../../lib/utils';

export const LanguageSelector = ({
  locale,
  styles,
}: {
  locale: string;
  styles?: string;
}) => {
  // Create a ref to store the anchor tags
  const anchorRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const navigateTo = (value: string) => {
    // Trigger a click on the respective anchor tag
    if (anchorRefs.current[value]) {
      anchorRefs.current[value]?.click();
    }
  };

  return (
    <>
      <select
        className={cn('bg-background', styles)}
        onChange={(e) => navigateTo(e.target.value)}
        defaultValue={locale}
      >
        {supportedLocales.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="hidden">
        {supportedLocales.map((loc) => (
          <a
            key={loc}
            href={`/${loc}`}
            ref={(el) => (anchorRefs.current[loc] = el)}
          >
            {loc.toUpperCase()}
          </a>
        ))}
      </div>
    </>
  );
};
