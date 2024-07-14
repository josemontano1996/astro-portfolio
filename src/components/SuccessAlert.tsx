import { ThumbsUpIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';
import { successMessage } from '@/store/appStore';
import { cn } from '@/lib/utils';

export const SuccessAlert = () => {
  const $successMessage = useStore(successMessage);
  const [animation, setAnimation] = useState<string>('');

  useEffect(() => {
    let fadeInTimeOut: any;
    let removeSuccess: any;

    if ($successMessage) {
      setAnimation('fade-in');
      fadeInTimeOut = setTimeout(() => setAnimation('fade-out'), 4500);
      removeSuccess = setTimeout(() => successMessage.set(null), 5000);
    }

    return () => {
      clearTimeout(fadeInTimeOut);
      clearTimeout(removeSuccess);
    };
  }, [$successMessage, successMessage]);

  return $successMessage ? (
    <Alert
      className={cn(
        'fixed bottom-5 left-1/2 z-50 w-fit -translate-x-1/2 border-green-600',
        `${animation}`,
      )}
    >
      <ThumbsUpIcon className="h-4 w-4" color="green" />
      <AlertDescription>{$successMessage}</AlertDescription>
    </Alert>
  ) : null;
};
