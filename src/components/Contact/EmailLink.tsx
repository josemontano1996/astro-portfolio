import { Mail } from 'lucide-react';

export const EmailLink = ({ text }: { text: string }) => {
  return (
    <a
      className="mt-4 flex h-6 gap-2 hover:cursor-pointer hover:underline"
      target="_blank"
      href={'mailto:' + import.meta.env.PUBLIC_MY_EMAIL}
    >
      {text}
      <Mail width={20} />
    </a>
  );
};
