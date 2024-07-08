import { useStore } from '@nanostores/react';
import { isContactDialogOpen } from '@/store/appStore';
import { useEffect } from 'react';

export const ContactButton = ({ t }: { t: string }) => {
  const $isContactDialogOpen = useStore(isContactDialogOpen);

  const toggleContactPopUp = () =>
    isContactDialogOpen.set(!$isContactDialogOpen);

  useEffect(() => {
    console.log($isContactDialogOpen);
  }, [$isContactDialogOpen]);

  return <button onClick={toggleContactPopUp}>{t}</button>;
};
