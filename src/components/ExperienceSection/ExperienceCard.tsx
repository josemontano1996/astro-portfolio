import type { IExperienceElement } from '@/interfaces/home-page';

export const ExperienceCard = ({ experience }: { experience: IExperienceElement }) => {
  return (
    <div className='space-y-2'>
      <div className='text-accent font-medium flex justify-between items-center'>
        <h4>{experience.title}</h4>
        <p>{experience.date}</p>
      </div>
      <div>
        <p className='text-muted'>Company: {experience.company_name}</p>
      </div>
      {experience.certification_url && (
        <a href={experience.certification_url} target='_blank' className='inline-block my-1'>
          View Certification
        </a>
      )}

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
