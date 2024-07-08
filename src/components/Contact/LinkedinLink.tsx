import { Linkedin } from 'lucide-react';

export const LinkedinLink = ({ text }: { text: string }) => {
  return (
    <a
      className="mt-4 flex h-6 gap-3 hover:underline"
      target="_blank"
      href={import.meta.env.PUBLIC_LINKEDIN}
    >
      {text}
      <Linkedin width={20} />
    </a>
  );
};
