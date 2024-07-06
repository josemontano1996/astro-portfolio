import type {
  IExperienceElement,
  IExperienceSubsection,
} from '@/interfaces/home-page';
import { ExperienceCard } from './ExperienceCard';
import { VerticalTimelineSqueleton } from './VerticalTimelineSqueleton';

export const VerticalTimelineComponent = ({
  profesionalExp,
  qualifications,
}: {
  profesionalExp: IExperienceSubsection;
  qualifications: IExperienceSubsection;
}) => {
  return (
    <div className="lg:grid grid-cols-2 gap-4 lg:gap-12 mt-10 flex flex-col ">
      <div>
        <h3 className="text-2xl text-foreground font-semibold mb-6 lg:ml-3">
          {qualifications.title}
        </h3>
        <ol>
          {qualifications.experiences.map((experience, index) => (
            <VerticalTimelineSqueleton key={index}>
              <ExperienceCard experience={experience} />
            </VerticalTimelineSqueleton>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="text-2xl text-foreground font-semibold mb-6 lg:ml-3">
          {profesionalExp.title}
        </h3>
        <ol>
          {profesionalExp.experiences.map((experience, index) => (
            <VerticalTimelineSqueleton key={index}>
              <ExperienceCard experience={experience} />
            </VerticalTimelineSqueleton>
          ))}
        </ol>
      </div>
    </div>
  );
};
