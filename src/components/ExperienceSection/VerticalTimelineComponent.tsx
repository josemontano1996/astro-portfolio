import type { IExperienceElement } from '@/interfaces/home-page';
import { ExperienceCard } from './ExperienceCard';
import { VerticalTimelineSqueleton } from './VerticalTimelineSqueleton';

export const VerticalTimelineComponent = ({
  experiences,
}: {
  experiences: IExperienceElement[];
}) => {
  return (
    <div className='grid grid-cols-2 gap-6 mt-10'>
      <div>
        <h3 className='text-2xl text-foreground font-semibold mb-6 ml-3'>Profesional Experience</h3>
        <ol>
          {experiences.map((experience, index) => (
            <VerticalTimelineSqueleton key={index}>
              <ExperienceCard experience={experience} />
            </VerticalTimelineSqueleton>
          ))}
        </ol>
      </div>
      <div>
        <h3 className='text-2xl text-foreground font-semibold mb-6 ml-3'>Educational Qualifications</h3>
        <ol>
          {experiences.map((experience, index) => (
            <VerticalTimelineSqueleton key={index}>
              <ExperienceCard experience={experience} />
            </VerticalTimelineSqueleton>
          ))}
        </ol>
      </div>
    </div>
  );
};
