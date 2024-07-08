import { Github } from 'lucide-react';


export const GithubLink = ({text}:{text:string}) => {
  return (
    <a
      className="mt-4 flex h-6 gap-3 hover:underline"
      target="_blank"
      href={import.meta.env.PUBLIC_MY_GITHUB}
    >
      {text}
      <Github width={20} />
    </a>
  );
}
