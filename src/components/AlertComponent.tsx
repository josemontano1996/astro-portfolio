import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { setAlertMessage } from '@/store/appStore';

export const AlertCopmponent = () => {
  const $setAlertMessage = useStore(setAlertMessage);

  useEffect(() => {
    if ($setAlertMessage) {
      setTimeout(() => setAlertMessage.set(''), 5000);
    }

    return () => {};
  }, [$setAlertMessage, setAlertMessage]);

  return (
    <Alert className={$setAlertMessage ? 'block' : 'hidden'}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  );
};
//TODO: Add a button to close the alert
