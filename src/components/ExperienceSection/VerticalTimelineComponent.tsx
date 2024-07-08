import type { IExperienceSubsection } from '@/interfaces/home-page';
import { ExperienceCard } from './ExperienceCard';
import { VerticalTimelineSqueleton } from './VerticalTimelineSqueleton';

export const VerticalTimelineComponent = ({
  professionalExp,
  qualifications,
}: {
  professionalExp: IExperienceSubsection;
  qualifications: IExperienceSubsection;
}) => {
  return (
    <div className="mt-10 flex grid-cols-2 flex-col gap-4 lg:grid lg:gap-12">
      <div>
        <h3 className="mb-6 text-2xl font-semibold text-foreground lg:ml-3">
          {professionalExp.title}
        </h3>
        <ol>
          {professionalExp.experiences.map((experience, index) => (
            <VerticalTimelineSqueleton key={index}>
              <ExperienceCard
                experience={experience}
                certificationTranslation={
                  professionalExp.certificationTranslation
                }
              />
            </VerticalTimelineSqueleton>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="mb-6 text-2xl font-semibold text-foreground lg:ml-3">
          {qualifications.title}
        </h3>
        <ol>
          {qualifications.experiences.map((experience, index) => (
            <VerticalTimelineSqueleton key={index}>
              <ExperienceCard
                experience={experience}
                certificationTranslation={
                  qualifications.certificationTranslation
                }
              />
            </VerticalTimelineSqueleton>
          ))}
        </ol>
      </div>
    </div>
  );
};
