import { atom } from 'nanostores';

export const isContactDialogOpen = atom<boolean>(false);
export const setAlertMessage = atom<string>('');
