import type { IFooter, IHomePage } from '@/interfaces/home-page';

import {
  CalendarpAppImg,
  IngridWebpage,
  NebrijaLogo,
  OldPorfolioImg,
  PEPImg,
  TeslaWebImg,
  TesloShopImg,
  UdemyLogo,
} from '@/assets/images';

import type { IContactPopUp, INavBar } from '@/interfaces/shared';
import {
  bootstrapIcon,
  cssIcon,
  expressIcon,
  javaIcon,
  javascriptIcon,
  laravelIcon,
  linuxIcon,
  materialuiIcon,
  mongodbIcon,
  mongooseIcon,
  mysqlIcon,
  nextjsIcon,
  nodeIcon,
  phpIcon,
  postgreIcon,
  reactIcon,
  sassIcon,
  shadcn,
  springIcon,
  sqliteIcon,
  tailwindIcon,
  typescriptIcon,
} from '@/../public/icons/icon-src';

export const homePage: IHomePage = {
  metadata: {
    title: 'jm3 - Higher Technician in Web Application Development',
    description: `Welcome to my portfolio! I am a higher technician in web application development. I leverage applications, and systems using programming principles and tools like Java, TypeScript, React, Node.js, and much more.`,
    og: {
      image:
        'https://res.cloudinary.com/dfupfbnez/image/upload/v1699010770/portfolioweb_h5atzn.png',
      url: import.meta.env.PUBLIC_WEB_URL,
    },
  },

  heroSection: {
    title: 'A World of Solutions at the Reach of Your Hand',
    subtitle: 'The web developer you need, for the solutions you seek.',
    callToAction: 'Discover more',
  },
  aboutSection: {
    title: 'Hello, I am',
    subtitle:
      'I develop the web applications, that your bussiness need. I am a Full-Stack Developer with a passion for creating comprehensive solutions.',
    ul: [
      'Client-Side Development',
      'Servers',
      'Databases',
      'Web Applications',
      'E-commerce',
      'Internationalization',
      'Architectural patterns',
      'Clean Code Practices',
    ],
  },
  techSection: {
    upperTitle: 'Overview',
    title: 'Tech.',
    body: `As a higher technician in web application development, I thrive on versatility. My journey in the realm of technology
          has equipped me with the skills to create comprehensive solutions. From front-end design
          to back-end development, I navigate the entire spectrum, ensuring that the websites I
          build are not just functional but also highly efficient.`,
    callToAction: 'Click me',
    cards: [
      {
        title: 'Languages',
        value: 'languages',
        content: [
          { name: 'TypeScript', icon: typescriptIcon, alt: 'Typescript' },
          { name: 'JavaScript', icon: javascriptIcon, alt: 'JavaScript' },
          { name: 'Java', icon: javaIcon, alt: 'Java' },
          { name: 'PHP', icon: phpIcon, alt: 'PHP' },
        ],
      },

      {
        title: 'Front-End',
        value: 'front',
        content: [
          { name: 'React', icon: reactIcon, alt: 'React' },
          { name: 'Tailwind', icon: tailwindIcon, alt: 'Tailwind' },
          { name: 'CSS3', icon: cssIcon, alt: 'Css' },
          { name: 'Sass', icon: sassIcon, alt: 'Sass' },
          { name: 'Shadcn/ui', icon: shadcn, alt: 'shadcn/ui' },
          { name: 'Bootstrap', icon: bootstrapIcon, alt: 'Bootstrap' },
          { name: 'Material UI', icon: materialuiIcon, alt: 'Material UI' },
        ],
      },
      {
        title: 'Back-end',
        value: 'back',
        content: [
          {
            name: 'Next.js',
            icon: nextjsIcon,
            alt: 'Next js',
            bg: 'white',
          },
          {
            name: 'Express.js',
            icon: expressIcon,
            alt: 'Express js',
            bg: 'white',
          },
          { name: 'Node.js', icon: nodeIcon, alt: 'Node js' },
          { name: 'Laravel', icon: laravelIcon, alt: 'Laravel' },
          { name: 'Spring', icon: springIcon, alt: 'spring framework' },
          {
            name: 'Spring Boot',
            icon: springIcon,
            alt: 'spring boot framework',
          },
          {
            name: 'Java Microservices',
            icon: undefined,
            alt: 'spring boot framework',
          },
          /*   {
              name: 'Linux',
              icon: linuxIcon,
              alt: 'linux',
              bg: 'white',
            }, */
        ],
      },

      {
        title: 'Databases',
        value: 'database',
        content: [
          { name: 'MySQL', icon: mysqlIcon, alt: 'MySQL' },
          { name: 'MongoDB', icon: mongodbIcon, alt: 'MongoDB' },
          { name: 'SQLite', icon: sqliteIcon, alt: 'SQLite' },
          { name: 'PostgreSQL', icon: postgreIcon, alt: 'PostgreSql' },
        ],
      },
    ],
  },
  experienceSection: {
    uppertitle: 'What have I done so far?',
    title: 'Experience.',
    professional: {
      title: 'Professional Experience',
      certificationTranslation: 'Explore Project',
      experiences: [
        {
          order: 2,
          title: 'Web Developer for PEP e.V',
          company_name: 'PEP e.V',
          icon: PEPImg,
          iconBg: '#383E56',
          date: 'December 2023 - Present',
          points: [
            "Created from scratch the official ONG's webpage. Currently improving and mantaining it.",
            'Boosted donation rates (5x) by implementing a secure payment platform for seamless transactions.',
            'Developed a responsive, multilingual site (German, Spanish, English) with top-notch SEO practices.',
            `Enhanced the organization's online presence, volunteers engagement incrememented by 3x.`,
          ],
          certification_url: 'https://www.pepev.org/',
        },
        {
          order: 1,
          title: 'Web Developer for Chef Bautista',
          company_name: 'Chef Bautista',
          date: 'March 2024 - May 2024',
          points: [
            'Builded the web app for Chef Bautista (currently waiting for the final translations from the Chef). With it she can directly post the menus she currently has as well as the updated prices',
            'Implemented clean architecture in order to improve mantainability of the codebase',
            'Developed a responsive, multilingual site (French, Spanish, English) with top-notch SEO practices.',
            `Enhanced the organization's online presence.`,
          ],
          certification_url: 'https://ingridbautistademo.netlify.app',
        },
      ],
    },
    qualifications: {
      title: 'Educational Qualifications',
      certificationTranslation: 'View certification',
      experiences: [
        {
          order: 5,
          title: 'Higher Software Technician Degree',
          company_name: 'Nebrija Technical School',
          certification_url: '',

          icon: NebrijaLogo,
          iconBg: '#383E56',
          date: 'October 2023 - Present',
          points: [
            'Learning the core of software development.',
            'Development and maintenance of web applications using technologies such as Java, PHP, or other relevant languages.',
            'Development of cross-platform applications: desktop, web and mobile.',
            'Development of secure applications and protection of information.',
          ],
        },
        {
          order: 4,
          title: 'Next.js The React Framework for production',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-be34cc73-b369-448c-a463-3f7725e7e110/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'August 2023 - October 2023',
          points: [
            'Building Full-Stack Web Applications with Next.js and TypeScript.',
            'Static Site Generation, Server Side Generation, SWR.',
            'Integration with paypal payments.',
          ],
        },
        {
          order: 3,
          title: 'React: From Zero to Expert (Hooks and MERN)',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-c1f827a0-82ba-4f37-affb-f7592a6ccee4/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'July 2023 - July 2023',
          points: [
            'Learning React from scratch until building full applications with global state management.',
            'Hooks, Testing, JWT, Redux, Mongoose...',
          ],
        },
        {
          order: 2,
          title: 'TypeScript: Your complete guide and handbook',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-046682ed-559f-42a0-ac8b-5359562580d7/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'April 2023 - July 2023',
          points: [
            'Learning TypeScript in order to develop more easy and scalable to mantain web apps.',
          ],
        },
        {
          order: 1,
          title: '100 Days of Code - 2023 Web Development Bootcamp',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-d08e5c85-4041-4286-ac6a-d6cac5a907cf/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'November 2022 - March 2023',
          points: [
            'Building Full-Stack applications with HTML, Css and JavaScript.',
            'MVC, Express.js, Git, Github, DOM, Css, MongoDB, REST APIs...',
          ],
        },
      ],
    },
  },
  projectsSection: {
    uppertitle: 'My Work',
    title: 'Projects.',
    inProgressTitle: 'In development',
    finishedProyectsTitle: 'Finished',
    projects: [
      {
        name: 'Projekt für die technische Schule',
        description: `Projekt für den ersten Jahrgang des Software Development Associate-Abschlusses mit über 100 Seiten technischer Dokumentation. Bereitgestellt mit einem LAMP-Stack auf einem VPS über SSH. Außerdem wurde ein benutzerdefiniertes Router-Framework mit Vanilla PHP implementiert.`,
        tags: [
          {
            name: 'Responsiv',
            color: 'green-text-gradient',
          },
          {
            name: 'Vanilla PHP',
            color: 'blue-text-gradient',
          },
          {
            name: 'MySQL',
            color: 'pink-text-gradient',
          },
          {
            name: 'MVC',
            color: 'blue-text-gradient',
          },
          {
            name: 'DAO',
            color: 'pink-text-gradient',
          },
        ],
        image: IngridWebpage,
        webpage_link: '',
        source_code_link:
          'https://github.com/josemontano1996/nebrija-proyecto-integrador-1',
      },
      {
        name: 'www.pepev.org',
        description: `Created the official website for PEP eV non profit organisation. Implemented a platform for donations, with internationalization in 3 languages and best SEO practices.`,
        tags: [
          {
            name: 'Fully-Responsive',
            color: 'pink-text-gradient',
          },
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'green-text-gradient',
          },
          {
            name: 'React',
            color: 'pink-text-gradient',
          },
          {
            name: 'RSC',
            color: 'blue-text-gradient',
          },
          {
            name: 'Stripe',
            color: 'green-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
          {
            name: 'React i18next',
            color: 'pink-text-gradient',
          },
        ],
        image: PEPImg,
        webpage_link: 'https://www.pepev.org',
      },
      {
        name: 'Astro Portfolio Webpage',
        description: `The newly migrated Astro porfolio for improved performance. It is the webpage that you are visiting.`,
        tags: [
          {
            name: 'Fully-Responsive',
            color: 'green-text-gradient',
          },
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Astro',
            color: 'pink-text-gradient',
          },
          {
            name: 'Three.js',
            color: 'blue-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'pink-text-gradient',
          },
          {
            name: 'Nanostores',
            color: 'green-text-gradient',
          },
        ],
        image: OldPorfolioImg,
        webpage_link: 'https://www.jm3.dev/en',
        source_code_link: 'https://github.com/josemontano1996/astro-portfolio',
      },

      {
        name: 'Teslo Shop',
        description: `Full-Stack clothing e-commerce with paypal integration, that allows users to search and buy clothing. 
          Developed using Next.js for the front- end and backend, and MongoDB as a database.`,
        tags: [
          {
            name: 'Desktop',
            color: 'green-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'blue-text-gradient',
          },
          {
            name: 'NextAuth',
            color: 'pink-text-gradient',
          },
          {
            name: 'Paypal',
            color: 'blue-text-gradient',
          },
          {
            name: 'Mongoose',
            color: 'pink-text-gradient',
          },
          {
            name: 'Cloudinary',
            color: 'green-text-gradient',
          },
        ],
        image: TesloShopImg,
        webpage_link: 'https://teslo-shop-ruby.vercel.app',
        source_code_link: 'https://github.com/josemontano1996/teslo-shop',
      },
      {
        name: 'Tesla landing page',
        description: `Replica of the Tesla official landing page using React and Nextjs.`,
        tags: [
          {
            name: 'Desktop',
            color: 'pink-text-gradient',
          },
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'green-text-gradient',
          },
          {
            name: 'React',
            color: 'pink-text-gradient',
          },
          {
            name: 'RSC',
            color: 'green-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
        ],
        image: TeslaWebImg,
        webpage_link: 'https://tesla-landing-clone-ebon.vercel.app/',
        source_code_link:
          'https://github.com/josemontano1996/tesla-landing-clone',
      },
      {
        name: 'Team Calendar',
        description: `A team calendar web app made with React, allowing team members to register, log in, and create events in a shared calendar for better organization.`,
        tags: [
          {
            name: 'Desktop',
            color: 'blue-text-gradient',
          },
          {
            name: 'React',
            color: 'green-text-gradient',
          },
          {
            name: 'Redux Toolkit',
            color: 'pink-text-gradient',
          },
          {
            name: 'Express.js',
            color: 'green-text-gradient',
          },
          {
            name: 'Mongoose',
            color: 'pink-text-gradient',
          },
        ],
        image: CalendarpAppImg,
        webpage_link: 'https://react-calendar-app-iota.vercel.app',
        source_code_link:
          'https://github.com/josemontano1996/react-calendar-app',
      },
      {
        name: 'Old Portfolio Webpage',
        description: `Old porfolio website. The design is pretty similar to the current porfolio. Built up with Nextjs App router. It comes with best SEO practices, internationalization in 3 languages, SSGs and the
        new App Router.`,
        tags: [
          {
            name: 'Fully-Responsive',
            color: 'green-text-gradient',
          },
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'pink-text-gradient',
          },
          {
            name: 'Three.js',
            color: 'blue-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'pink-text-gradient',
          },
          {
            name: 'React i18next',
            color: 'green-text-gradient',
          },
        ],
        image: OldPorfolioImg,

        source_code_link: 'https://github.com/josemontano1996/my-portfolio',
      },
    ],
    inprogress: [
      {
        name: 'Chef Webpage',
        description: `In development: Private Chef Full-Stack webpage that will be 
        used for food delivery and events management.`,
        tags: [
          {
            name: 'Fully-Responsive',
            color: 'pink-text-gradient',
          },
          {
            name: 'TypeScript',
            color: 'blue-text-gradient',
          },
          {
            name: 'Next.js',
            color: 'green-text-gradient',
          },
          {
            name: 'React',
            color: 'pink-text-gradient',
          },
          {
            name: 'RSC',
            color: 'green-text-gradient',
          },
          {
            name: 'Tailwind',
            color: 'blue-text-gradient',
          },
          {
            name: 'React i18next',
            color: 'pink-text-gradient',
          },
        ],
        image: IngridWebpage,
        webpage_link: 'https://ingridbautistademo.netlify.app/',
        source_code_link:
          'https://github.com/josemontano1996/ingridbautista.com',
      },
    ],
  },
};

export const footer: IFooter = {
  uppertitle: 'Would you like to know more about me?',
  title: 'Contact me.',
};

export const navBar: INavBar = {
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  contact: 'Contact',
};

export const contactPopUp: IContactPopUp = {
  upperTitle: 'GET IN TOUCH',
  linkedinText: 'Linkedin',
  githubText: 'Github',
  emailText: 'Email',
  title: 'Contact.',
  name: 'Your name',
  nameLabel: `What's your name?`,
  email: 'Your Email',
  emailLabel: `What's your email address`,
  message: 'Your Message',
  messageLabel: `What do you have to say?`,
  send: 'Send',
  alertError: `Something went wrong. Try again later or refresh the webpage.`,
  alertError1: 'Name length should have a length of at least 2 letters.',
  alertError2: 'Your email is invalid, check it again please.',
  alertError3: 'The message should be at least 10 letters long.',
  alertSuccess: 'Thank you. Your message was succesfully sent.',
};
