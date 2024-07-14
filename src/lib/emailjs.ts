import emailjs from '@emailjs/browser';
import type { Form } from '@/components/Contact/ContactForm';
import type { IContactPopUp } from '@/interfaces/shared';

interface emailService {
  form: Form;
  t: IContactPopUp;
}

export function sendEmail({ form, t }: emailService): void {
  let success = false;

  emailjs
    .send(
      import.meta.env.PUBLIC_EMAILJS_SERVICE_ID || '',
      import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID || '',
      {
        from_name: form.name,
        to_name: 'Jose Manuel Montano Mengual',
        from_email: form.email,
        to_email: import.meta.env.PUBLIC_MY_EMAIL,
        message: form.message,
      },
      import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY || '',
    )
    .then(
      () => {
        success = true;
      },
      () => {
        success = false;
      },
    )
    .then(() => {
      if (!success) {
        throw new Error(t.alertError);
      }
    });
}
