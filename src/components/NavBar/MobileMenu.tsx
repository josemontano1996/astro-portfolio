import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import type { TNavLinks } from './NavBar.astro';
import { ScrollToIdLink } from '../ScrollToIdLink';
import { ContactButton } from './ContactButton';
import { LanguageSelector } from './LanguageSelector';

type Props = {
  links: TNavLinks[];
  locale: string;
  contact: string;
};

export const MobileMenu = ({ links, contact, locale }: Props) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!e.target.closest('#mobile-menu')) {
        setIsSideMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      id="mobile-menu"
      className="relative flex flex-1 items-center justify-end md:hidden"
    >
      <div
        onClick={(e) => {
          e.stopPropagation(), setIsSideMenuOpen(!isSideMenuOpen);
        }}
      >
        {isSideMenuOpen ? <XIcon size={38} /> : <MenuIcon size={38} />}
      </div>
      <nav
        className={`${
          !isSideMenuOpen ? 'hidden' : 'flex'
        } absolute right-0 top-10 z-30 my-2 min-w-[140px] rounded-xl bg-popover p-6 text-2xl text-popover-foreground`}
      >
        <ul className="flex list-none flex-col items-start justify-end gap-6 font-medium">
          {links.map(({ id, text }) => (
            <li key={id} onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
              <ScrollToIdLink id={id} styles="p-2">
                {text}
              </ScrollToIdLink>
            </li>
          ))}

          <li
            key={links.length + 1}
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
            className="p-2"
          >
            <ContactButton t={contact} />
          </li>
          <li key={links.length + 2} className="mx-auto">
            <LanguageSelector
              locale={locale}
              styles="bg-popover text-popover-foreground"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
