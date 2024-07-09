import type { ITechElement } from '@/interfaces/home-page';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  DatabaseIcon,
  FileTerminalIcon,
  MonitorIcon,
  ServerIcon,
} from 'lucide-react';

interface Props {
  cards: ITechElement[];
}

export const TechCard = ({ cards }: Props) => {
  const languages = cards[0];
  const frontEnd = cards[1];
  const backEnd = cards[2];
  const databases = cards[3];

  return (
    <Tabs defaultValue="languages">
      <TabsList className="text-primary">
        <TabsTrigger value="languages" className="flex items-center gap-1">
          <FileTerminalIcon />
          <span className="hidden sm:block">{languages.title}</span>
        </TabsTrigger>
        <TabsTrigger value="front" className="flex items-center gap-1">
          <MonitorIcon />
          <span className="hidden sm:block">{frontEnd.title}</span>
        </TabsTrigger>
        <TabsTrigger value="back" className="flex items-center gap-1">
          <ServerIcon />
          <span className="hidden sm:block">{backEnd.title}</span>
        </TabsTrigger>
        <TabsTrigger value="database" className="flex items-center gap-1">
          <DatabaseIcon />
          <span className="hidden sm:block">{databases.title}</span>
        </TabsTrigger>
      </TabsList>
      <div className="mt-3 h-[200px]">
        <TabsContent value="languages">
          <ul className="space-y-3 text-xl">
            {languages.ul.ready.map((li, i) => (
              <li className="flex items-center gap-3" key={i}>
                <img
                  loading="eager"
                  src={li.icon}
                  height={30}
                  width={30}
                  alt={li.alt}
                />
                <span>{li.name}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="front">
          <ul className="space-y-3 text-xl">
            {frontEnd.ul.ready.map((li, i) => (
              <li className="flex items-center gap-3" key={i}>
                <img src={li.icon} height={30} width={30} alt={li.alt} />
                <span>{li.name}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="back">
          <ul className="space-y-3 text-xl">
            {backEnd.ul.ready.map((li, i) => (
              <li className="flex items-center gap-3" key={i}>
                <img
                  loading="eager"
                  src={li.icon}
                  height={30}
                  width={30}
                  alt={li.alt}
                />
                <span>{li.name}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="database">
          <ul className="space-y-3 text-xl">
            {databases.ul.ready.map((li, i) => (
              <li className="flex items-center gap-3" key={i}>
                <img src={li.icon} height={30} width={30} alt={li.alt} />
                <span>{li.name}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      </div>
    </Tabs>
  );
};
