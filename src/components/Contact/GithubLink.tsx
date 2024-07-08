import { Github } from 'lucide-react';


export const GithubLink = ({text}:{text:string}) => {
  return (
    <a
      className="hover:underline"
      target="_blank"
      href={import.meta.env.PUBLIC_MY_GITHUB}
    >
  
      <Github width={20} />
    </a>
  );
}
