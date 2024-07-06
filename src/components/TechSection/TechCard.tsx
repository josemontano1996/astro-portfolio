import type { ITechElement } from "@/interfaces/home-page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  DatabaseIcon,
  FileTerminalIcon,
  LaptopIcon,
  MonitorIcon,
  ServerIcon,
  SquareCodeIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
          <span className="sm:block hidden">{languages.title}</span>
        </TabsTrigger>
        <TabsTrigger value="front" className="flex items-center gap-1">
          <MonitorIcon />
          <span className="sm:block hidden">{frontEnd.title}</span>
        </TabsTrigger>
        <TabsTrigger value="back" className="flex items-center gap-1">
          <ServerIcon />
          <span className="sm:block hidden">{backEnd.title}</span>
        </TabsTrigger>
        <TabsTrigger value="database" className="flex items-center gap-1">
          <DatabaseIcon />
          <span className="sm:block hidden">{databases.title}</span>
        </TabsTrigger>
      </TabsList>
      <div className="h-[200px] mt-3">
        <TabsContent value="languages">
          <ul className="text-xl space-y-2">
            {languages.ul.ready.map((li, i) => (
              <li className="flex items-center gap-3" key={i}>
                <img src={li.icon} height={30} width={30} alt={li.alt} />
                <span>{li.name}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="front">
          <ul className="text-xl space-y-2">
            {frontEnd.ul.ready.map((li, i) => (
              <li className="flex items-center gap-3" key={i}>
                <img src={li.icon} height={30} width={30} alt={li.alt} />
                <span>{li.name}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="back">
          <ul className="text-xl space-y-2">
            {backEnd.ul.ready.map((li, i) => (
              <li className="flex items-center gap-3" key={i}>
                <img src={li.icon} height={30} width={30} alt={li.alt} />
                <span>{li.name}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="database">
          <ul className="text-xl space-y-2">
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
