import type { ITechCardContent,  } from '@/interfaces/home-page';


const TabContent = ({ content }: { content: ITechCardContent[] }) => {
  const logoSize = 30;
  
    return (
    <ul className="space-y-3 text-xl">
      {content.map((li, i) => (
        <li className="flex items-center gap-3" key={i}>
          {li.icon ? (
            <img
              loading="eager"
              src={li.icon}
              height={logoSize}
              width={logoSize}
              alt={li.alt}
            />
          ) : <div className={`h-[${logoSize}px] w-[${logoSize}px]`}></div>}

          <span>{li.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default TabContent;
