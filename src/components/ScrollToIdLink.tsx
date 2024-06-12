import { scrollToId } from '@/lib/scrollToId';
import { cn } from '../lib/utils';

export const ScrollToIdLink = ({
  text,
  id,
  styles = '',
}: {
  text: string;
  id: string;
  styles?: string;
}) => {
  return (
    <a
      href={`#${id}`}
      onClick={(event) => {
        scrollToId(event);
      }}
      className={cn(styles)}
    >
      {text}
    </a>
  );
};
