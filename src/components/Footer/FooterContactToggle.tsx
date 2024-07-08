import type { IFooter } from '@/interfaces/home-page';
import { isContactDialogOpen } from '@/store/appStore';
import { useStore } from '@nanostores/react';

export const FooterContactToggle = ({ t }: { t: IFooter }) => {
  const $isContactDialogOpen = useStore(isContactDialogOpen);
  return (
    <button
      className="xs:text-[40px] text-[30px] font-black text-white underline hover:underline sm:text-[50px] md:text-[60px] lg:no-underline"
      onClick={(() => isContactDialogOpen.set(!$isContactDialogOpen))}
    >
      {t.title}
    </button>
  );
};
