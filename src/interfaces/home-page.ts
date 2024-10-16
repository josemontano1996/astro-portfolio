export interface IHomePage {
  metadata: IMetadada;
  heroSection: IHeroSection;
  aboutSection: IAboutSection;
  techSection: ITechSection;
  experienceSection: IExperienceSection;
  projectsSection: IProjectsSection;
}

export interface IMetadada {
  title: string;
  description: string;
  og: {
    image: string;
    url: string;
  };
}
export interface IHeroSection {
  title: string;
  subtitle: string;
  callToAction: string;
}

export interface IAboutSection {
  title: string;
  subtitle: string;
  ul: string[];
}

export interface ITechSection {
  upperTitle: string;
  title: string;
  body: string;
  callToAction: string;
  cards: ITechElement[];
}

export interface ITechElement {
  title: string;
  value: 'front' | 'back' | 'database' | 'languages';
  content: ITechCardContent[];
}

export interface ITechCardContent {
  name: string;
  icon?: string;
  alt: string;
  bg?: string; // Optional background color
}

export interface IExperienceSection {
  uppertitle: string;
  title: string;
  professional: IExperienceSubsection;
  qualifications: IExperienceSubsection;
}

export interface IExperienceSubsection {
  title: string;
  certificationTranslation: string;
  experiences: IExperienceElement[];
}

export interface IExperienceElement {
  order: number;
  title: string;
  company_name: string;
  certification_url?: string;
  icon?: any;
  iconBg?: string;
  date: string;
  points: string[];
}

export interface IProjectsSection {
  uppertitle: string;
  title: string;
  inProgressTitle: string;
  finishedProyectsTitle: string;
  projects: IProjectElement[];
  inprogress?: IProjectElement[];
}

export interface IProjectElement {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: any; // Assuming image property holds the path or reference to the image
  webpage_link?: string;
  source_code_link?: string;
}

export interface IFooter {
  uppertitle: string;
  title: string;
}
