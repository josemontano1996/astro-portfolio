import { Mail } from 'lucide-react';

export const EmailLink = ({ text }: { text: string }) => {
  return (
    <a
      className="hover:underline"
      target="_blank"
      href={'mailto:' + import.meta.env.PUBLIC_MY_EMAIL}
    >
  
      <Mail width={20} />
    </a>
  );
};
