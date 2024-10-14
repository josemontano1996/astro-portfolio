import type { ITechElement } from '@/interfaces/home-page';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  DatabaseIcon,
  FileTerminalIcon,
  MonitorIcon,
  ServerIcon,
} from 'lucide-react';
import TabContent from './TabContent';

interface Props {
  cards: ITechElement[];
}

export const TechCard = ({ cards }: Props) => {
  const languages = cards[0];
  const frontEnd = cards[1];
  const backEnd = cards[2];
  const databases = cards[3];

  return (
    <Tabs defaultValue={cards[0].value}>
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
      <div className="mt-3 lg:h-[200px]">
        {cards.map((tab, i) => (
          <TabsContent value={tab.value} key={tab.title}>
            <TabContent content={tab.content} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};
