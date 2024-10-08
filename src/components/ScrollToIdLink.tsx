import { scrollToId } from '@/lib/scrollToId';
import { cn } from '../lib/utils';
import type { ReactNode } from 'react';

export const ScrollToIdLink = ({
  children,
  id,
  styles = '',
}: {
  children: ReactNode;
  id: string;
  styles?: string;
}) => {
  return (
    <a
      href={`#${id}`}
      onClick={(event) => {
        scrollToId(event);
      }}
      className={cn('scrollable-anchor', styles)}
    >
      {children}
    </a>
  );
};
