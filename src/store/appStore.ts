import { atom } from 'nanostores';

export const isContactDialogOpen = atom<boolean>(false);
export const errorMessage = atom<string | null>(null);
export const successMessage = atom<string | null>(null);
