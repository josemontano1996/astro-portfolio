import { cn } from '@/lib/utils';

type Props = {
  mainColor?: string;
  children: React.ReactNode;
};
export const VerticalTimelineSqueleton = ({
  children,
  mainColor = 'accent',
}: Props) => {
  return (
    <li className={cn('max-w-[90vw] border-l-2', `border-${mainColor}`)}>
      <div className="flex-start md:flex">
        <div
          className={cn(
            `-ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-${mainColor}`,
          )}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className={cn('h-3 w-3', `text-${mainColor}-foreground`)}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
            ></path>
          </svg>
        </div>
        <article
          className={cn(
            'mb-10 ml-6 block w-[600px] max-w-[85vw] rounded-lg bg-gray-100 p-6 text-black shadow-lg',
          )}
        >
          {children}
        </article>
      </div>
    </li>
  );
};
