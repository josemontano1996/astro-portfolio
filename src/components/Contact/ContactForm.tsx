import type { IContactPopUp } from '@/interfaces/shared';
import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { isContactDialogOpen } from '@/store/appStore';
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';
import StarsCanvas from '../HeroSection/StarsCanvas';
import { LinkedinLink } from './LinkedinLink';
import { GithubLink } from './GithubLink';
import { EmailLink } from './EmailLink';
import { Button } from '../ui/button';

interface Form {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = ({ t }: { t: IContactPopUp }) => {
  const $isContactDialogOpen = useStore(isContactDialogOpen);

  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (form.name.trim().length < 2) {
      return alert(t.alertError1);
    }

    if (!form.email.includes('@')) {
      return alert(t.alertError2);
    }

    if (form.message.trim().length < 10) {
      return alert(t.alertError3);
    }

    setLoading(true);
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
          setLoading(false);
          setForm({
            name: '',
            email: '',
            message: '',
          });
          alert(t.alertSuccess);
          isContactDialogOpen.set(false);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          alert(
            `Something went wrong, please send and email to ${import.meta.env.PUBLIC_MY_EMAIL}`,
          );
        },
      );
  };

  return (
    $isContactDialogOpen && (
      <div className="relative left-0 top-0">
        <section className="fixed left-0 top-0 z-40 h-screen w-screen transform overflow-y-auto bg-secondary-foreground p-6 fade-in">
          <div className="relative mx-auto min-h-[570px] rounded-2xl p-8 lg:max-h-[80vh] lg:max-w-[800px]">
            <button className="absolute right-6 top-8 cursor-pointer object-contain">
              <X onClick={() => isContactDialogOpen.set(false)} />
            </button>

            <div>
              <div className="flex items-center space-x-4">
                <p className="text-sm uppercase tracking-wider text-secondary sm:text-lg">
                  {t.upperTitle}
                </p>
                <LinkedinLink text={t.linkedinText} />
                <GithubLink text={t.githubText} />
                <EmailLink text={t.emailText} />
              </div>
            </div>
            <h3 className="xs:text-[40px] mb-4 mt-6 text-[30px] font-black text-white sm:text-[50px] md:text-[60px]">
              {t.title}
            </h3>

            <form
              onSubmit={handleSubmit}
              className="gap-8 sm:grid sm:grid-cols-2"
            >
              <div>
                <label className="flex flex-col">
                  <span className="mb-4 font-medium text-white">{t.name}</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.nameLabel}
                    className="rounded-lg border-none px-6 py-4 font-medium text-black outline-none placeholder:text-secondary"
                  />
                </label>
                <label className="my-4 flex flex-col">
                  <span className="mb-4 font-medium text-white">{t.email}</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.emailLabel}
                    className="rounded-lg border-none px-6 py-4 font-medium text-black outline-none placeholder:text-secondary"
                  />
                </label>
              </div>
              <label className="flex flex-col">
                <span className="mb-4 font-medium text-white">{t.message}</span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.messageLabel}
                  className="resize-none overflow-y-auto rounded-lg border-none px-6 py-4 font-medium text-black outline-none placeholder:text-secondary"
                />
              </label>

              <Button
                type="submit"
                className="mt-4 w-fit rounded-xl bg-primary px-8 py-3 font-bold text-secondary"
                disabled={loading}
                size={'lg'}
              >
                {t.send}
              </Button>
            </form>
          </div>
          <StarsCanvas />
        </section>
      </div>
    )
  );
};
