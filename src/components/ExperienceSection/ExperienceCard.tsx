import type { IExperienceElement } from '@/interfaces/home-page';
import { ShieldCheckIcon } from 'lucide-react';

export const ExperienceCard = ({
  experience,
  certificationTranslation,
  mainColor = 'accent',
  secondaryColor = 'black',
}: {
  certificationTranslation: string;
  experience: IExperienceElement;
  mainColor?: string;
  secondaryColor?: string;
}) => {
  return (
    <div className="space-y-2">
      <h4 className={`text-${mainColor}`}>{experience.title}</h4>
      <p className={`text-${secondaryColor}`}>{experience.company_name}</p>
      <p className="text-muted">{experience.date}</p>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      {experience.certification_url && (
        <a
          href={experience.certification_url}
          target="_blank"
          className="my-1 flex items-center justify-end gap-1 hover:underline"
        >
          <span>{certificationTranslation}</span>
          <ShieldCheckIcon color="green" />
        </a>
      )}
    </div>
  );
};
