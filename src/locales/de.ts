import type { IFooter, IHomePage } from '@/interfaces/home-page';
import { DatabaseIcon, LaptopIcon, ServerIcon, SquareCodeIcon } from 'lucide-react';
import {
  BootstrapIcon,
  CssIcon,
  ExpressjsIcon,
  JavaIcon,
  JavaScriptIcon,
  MongoDbIcon,
  MongooseIcon,
  MuiIcon,
  MySqlIcon,
  NextjsIcon,
  NodejsIcon,
  PhpIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '@/components/Icons/icons';
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

export const homePage: IHomePage = {
  metadata: {
    title: 'jm3 - Full Stack Web Developer Portfolio',
    description: `Welcome to my portfolio! I'm a full stack developer specializing 
    in web development, applications, and systems. Check out my projects and experience
    in technologies like TypeScript, JavaScript, React, Node.js, and more.`,
    keyword: `developer,web developer, full stack, web development, applications, javascript,
     mongo db, express.js, next app router, next pages router, react server components`,
    og: {
      title: `jm3 - Full Stack Web Developer Portfolio`,
      description: `Welcome to my portfolio! I'm a full stack developer specializing 
    in web development, applications, and systems. Check out my projects and experience
    in technologies like TypeScript, JavaScript, React, Node.js, and more.`,
      type: 'website',
      image:
        'https://res.cloudinary.com/dfupfbnez/image/upload/v1699010770/portfolioweb_h5atzn.png',
      url: import.meta.env.PUBLIC_WEB_URL,
    },
  },

  heroSection: {
    title: 'A World of Solutions at the Reach of Your Hand',
    subtitle: 'The web developer you search, for the solutions you need.',
    callToAction: 'Discover more',
  },
  aboutSection: {
    title: 'Hi, I am',
    subtitle: 'I develop the Full-Stack web applications, that your bussiness need.',
    ul: [
      'Best SEO practices',
      'Internationalization',
      'Responsive Design',
      'Authentication',
      'Databases',
      'And much more...',
    ],
  },
  techSection: {
    upperTitle: 'Overview',
    title: 'Tech.',
    body: `As a Full-Stack Developer, I thrive on versatility. My journey in the realm of technology
          has equipped me with the skills to create comprehensive solutions. From front-end design
          to back-end development, I navigate the entire spectrum, ensuring that the websites I
          build are not just functional but also highly efficient.`,
    callToAction: 'Click me',
    cards: [
      {
        title: 'Languages',
        icon: SquareCodeIcon,
        ul: {
          ready: [
            { name: 'TypeScript', icon: TypeScriptIcon, alt: 'Typescript' },
            { name: 'JavaScript', icon: JavaScriptIcon, alt: 'JavaScript' },
          ],
          incoming: [
            { name: 'Java', icon: JavaIcon, alt: 'Java' },
            { name: 'PHP', icon: PhpIcon, alt: 'PHP' },
          ],
        },
      },
      {
        title: 'Front-End',
        icon: LaptopIcon,
        ul: {
          ready: [
            { name: 'React', icon: ReactIcon, alt: 'React' },
            { name: 'CSS3', icon: CssIcon, alt: 'Css' },
            { name: 'Sass', icon: SassIcon, alt: 'Sass' },
            { name: 'Tailwind', icon: TailwindIcon, alt: 'Tailwind' },
            { name: 'Bootstrap', icon: BootstrapIcon, alt: 'Bootstrap' },
            { name: 'Material UI', icon: MuiIcon, alt: 'Material UI' },
          ],
        },
      },
      {
        title: 'Back-end',
        icon: ServerIcon,
        ul: {
          ready: [
            { name: 'Next.js', icon: NextjsIcon, alt: 'Next js', bg: 'white' },
            {
              name: 'Express.js',
              icon: ExpressjsIcon,
              alt: 'Express js',
              bg: 'white',
            },
            { name: 'Node.js', icon: NodejsIcon, alt: 'Node js' },
          ],
        },
      },
      {
        title: 'Databases',
        icon: DatabaseIcon,
        ul: {
          ready: [
            { name: 'MongoDB', icon: MongoDbIcon, alt: 'MongoDB' },
            { name: 'Mongoose', icon: MongooseIcon, alt: 'Mongoose' },
          ],
          incoming: [{ name: 'MySQL', icon: MySqlIcon, alt: 'MySQL' }],
        },
      },
    ],
  },
  experienceSection: {
    uppertitle: 'What have I done so far?',
    title: 'Experience.',
    experiences: [
      {
        order: 6,
        title: 'Web Developer for PEP e.V',
        company_name: 'PEP e.V',

        icon: PEPImg,
        iconBg: '#383E56',
        date: 'December 2023 - Present',
        points: [
          'Creating a brand-new website from scratch.',
          'Developing a responsive, multilingual site (German, Spanish, English) with top-notch SEO practices.',
          `Enhancing the organization's online presence.`,
          'Boosting donation rates and implementing a secure payment platform for seamless transactions.',
        ],
      },

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
  projectsSection: {
    uppertitle: 'My Work',
    title: 'Projects.',
    inProgressTitle: 'In development',
    finishedProyectsTitle: 'Finished',
    projects: [
      {
        name: 'www.pepev.org',
        description: `Creating a brand-new website that allows donors to donate money throught the website,
        with internationalization in 3 languages and
        best SEO practices`,
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
        name: 'Tesla landing page',
        description: `Replica of the Tesla official landing page.`,
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
        source_code_link: 'https://github.com/josemontano1996/tesla-landing-clone',
      },
      {
        name: 'Old Portfolio Webpage',
        description: `This page you are navigating through. It comes with best SEO practices, internationalization in 3 languages, SSGs and the
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
        webpage_link: 'https://www.jm3.dev',
        source_code_link: 'https://github.com/josemontano1996/my-portfolio',
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
        name: 'Team Calendar',
        description: `Team calendar webpage made with React, where people from the same team can register 
        and log in to create events in a shared calendar for better organization, all the user and
        events data come through this API and are properly handled.`,
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
        source_code_link: 'https://github.com/josemontano1996/react-calendar-app',
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
        source_code_link: 'https://github.com/josemontano1996/ingridbautista.com',
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
  callToAction: 'My Linkedin Account',
  title: 'Contact.',
  name: 'Your name',
  nameLabel: `What's your name?`,
  email: 'Your Email',
  emailLabel: `What's your email address`,
  message: 'Your Message',
  messageLabel: `What do you have to say?`,
  send: 'Send',
  alertError: 'Something went wrong, please try again later.',
  alertError1: 'Name length should have a length of at least 2 letters.',
  alertError2: 'Your email is invalid, check it again please.',
  alertError3: 'The message should be at least 10 letters long.',
  alertSuccess: 'Thank you. Your message was succesfully sent.',
};
