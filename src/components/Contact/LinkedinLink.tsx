import { Linkedin } from 'lucide-react';

export const LinkedinLink = ({ text }: { text: string }) => {
  return (
    <a
      className="hover:underline"
      target="_blank"
      href={import.meta.env.PUBLIC_LINKEDIN}
    >
      <Linkedin width={20} />
    </a>
  );
};
