import { ThumbsDownIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';
import { errorMessage } from '@/store/appStore';
import { cn } from '../lib/utils';

export const ErrorAlert = () => {
  const $errorMessage = useStore(errorMessage);
  const [animation, setAnimation] = useState<string>('');

  useEffect(() => {
    let fadeInTimeOut: any;
    let removeError: any;

    if ($errorMessage) {
      setAnimation('fade-in');
      fadeInTimeOut = setTimeout(() => setAnimation('fade-out'), 4000);
      removeError = setTimeout(() => errorMessage.set(null), 4500);
    }

    return () => {
      clearTimeout(fadeInTimeOut);
      clearTimeout(removeError);
    };
  }, [$errorMessage, errorMessage]);

  return $errorMessage ? (
    <Alert
      className={cn(
        'fixed bottom-5 left-1/2 z-50  w-fit -translate-x-1/2 border-red-600',
        `${animation}`,
      )}
    >
      <ThumbsDownIcon className="h-4 w-4" color="red" />
      <AlertDescription>{$errorMessage}</AlertDescription>
    </Alert>
  ) : null;
};
