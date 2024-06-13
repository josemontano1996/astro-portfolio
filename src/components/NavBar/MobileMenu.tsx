import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import type { TNavLinks } from './NavBar.astro';
import { ScrollToIdLink } from '../ScrollToIdLink';
import { ContactButton } from './ContactButton';
import { LanguageSelector } from './LanguageSelector';

type Props = {
  links: TNavLinks[];
  locale: string;
};

export const MobileMenu = ({ links, locale }: Props) => {
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
    <div id='mobile-menu' className='md:hidden flex flex-1 justify-end relative items-center'>
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
        } p-6 bg-popover text-popover-foreground absolute top-10 right-0 my-2 min-w-[140px] z-30 rounded-xl text-2xl`}
      >
        <ul className='list-none flex justify-end items-start flex-col gap-6 font-medium'>
          {links.map(({ id, text }) => (
            <li key={id} onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
              <ScrollToIdLink id={id} text={text} styles='p-2' />
            </li>
          ))}

          <li
            key={links.length + 1}
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
            className='p-2'
          >
            <ContactButton t='Contact' />
          </li>
          <li key={links.length + 2} className='mx-auto'>
            <LanguageSelector locale={locale} styles='bg-popover text-popover-foreground' />
          </li>
        </ul>
      </nav>
    </div>
  );
};
