import type { ITechElement } from "@/interfaces/home-page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  DatabaseIcon,
  LaptopIcon,
  ServerIcon,
  SquareCodeIcon,
} from "lucide-react";

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
          <SquareCodeIcon />
          <span className="sm:block hidden">{languages.title}</span>
        </TabsTrigger>
        <TabsTrigger value="client" className="flex items-center gap-1">
          <LaptopIcon />
          <span className="sm:block hidden">Front-end</span>
        </TabsTrigger>
        <TabsTrigger value="server" className="flex items-center gap-1">
          <ServerIcon />
          <span className="sm:block hidden">Back-end</span>
        </TabsTrigger>
        <TabsTrigger value="database" className="flex items-center gap-1">
          <DatabaseIcon />
          <span className="sm:block hidden">Databases</span>
        </TabsTrigger>
      </TabsList>
      <div className="h-[300px] mt-3">
        <TabsContent value="languages">
          <ul className="text-xl space-y-2">
            <li className="flex items-center gap-1">
              <ServerIcon color="yellow" size={30} />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center gap-1">
              <ServerIcon color="yellow" size={30} />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center gap-1">
              <ServerIcon color="yellow" size={30} />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center gap-1">
              <ServerIcon color="yellow" size={30} />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center gap-1">
              <ServerIcon color="yellow" size={30} />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center gap-1">
              <ServerIcon color="yellow" size={30} />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center gap-1">
              <ServerIcon color="yellow" size={30} />
              <span>JavaScript</span>
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="client">
          <ul className="">
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Chakra UI</li>
            <li>Material UI</li>
            <li>Styled Components</li>
          </ul>
        </TabsContent>
        <TabsContent value="server">
          <ul className="">
            <li>Node.js</li>
            <li>Express</li>
            <li>GraphQL</li>
            <li>REST API</li>
          </ul>
        </TabsContent>
        <TabsContent value="database">
          <ul className="">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </TabsContent>
      </div>
    </Tabs>
  );
};
