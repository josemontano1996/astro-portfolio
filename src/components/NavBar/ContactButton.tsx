import { useStore } from '@nanostores/react';
import { isContactDialogOpen } from '@/store/appStore';

export const ContactButton = ({ t }: { t: string }) => {
  const $isContactDialogOpen = useStore(isContactDialogOpen);

  const toggleContactPopUp = () =>
    isContactDialogOpen.set(!$isContactDialogOpen);

  return <button onClick={toggleContactPopUp}>{t}</button>;
};
