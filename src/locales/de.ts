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
  reactIcon,
  javascriptIcon,
  javaIcon,
  phpIcon,
  cssIcon,
  sassIcon,
  tailwindIcon,
  bootstrapIcon,
  materialuiIcon,
  nextjsIcon,
  expressIcon,
  nodeIcon,
  mongodbIcon,
  mongooseIcon,
  mysqlIcon,
  typescriptIcon,
  linuxIcon,
  laravelIcon,
  postgreIcon,
  shadcn,
  springIcon,
  sqliteIcon,
} from 'public/icons/icon-src';

export const homePage: IHomePage = {
  metadata: {
    title: 'jm3 - Fachtechniker für die Entwicklung von Webanwendungen',
    description: `Willkommen auf meinem Portfolio! Ich bin ein Fachtechniker für die Entwicklung von Webanwendungen. Ich nutze Anwendungen und Systeme mit Programmierprinzipien und -werkzeugen wie Java, TypeScript, React, Node.js und vielem mehr.`,
    og: {
      image:
        'https://res.cloudinary.com/dfupfbnez/image/upload/v1699010770/portfolioweb_h5atzn.png',
      url: import.meta.env.PUBLIC_WEB_URL,
    },
  },
  heroSection: {
    title: 'Eine Welt voller Lösungen in Ihrer Reichweite',
    subtitle:
      'Der Webentwickler, den Sie brauchen, für die Lösungen, die Sie suchen.',
    callToAction: 'Mehr entdecken',
  },
  aboutSection: {
    title: 'Hallo, ich bin',
    subtitle:
      'Ich entwickle die Webanwendungen, die Ihr Unternehmen braucht. Ich bin ein Full-Stack-Entwickler mit Leidenschaft für die Erstellung umfassender Lösungen.',
    ul: [
      'Client-seitige Entwicklung',
      'Server',
      'Datenbanken',
      'Webanwendungen',
      'E-Commerce',
      'Internationalisierung',
      'Architekturmuster',
      'Best Practices für sauberen Code',
    ],
  },
  techSection: {
    upperTitle: 'Übersicht',
    title: 'Technologie.',
    body: `Als Fachtechniker für die Entwicklung von Webanwendungen bin ich auf Vielseitigkeit angewiesen. Meine Reise in der Welt der Technologie hat mich mit den Fähigkeiten ausgestattet, umfassende Lösungen zu schaffen. Vom Design der Front-End bis zur Entwicklung der Back-End navigiere ich durch das gesamte Spektrum, um sicherzustellen, dass die von mir erstellten Websites nicht nur funktional, sondern auch höchst effizient sind.`,
    callToAction: 'Klick mich',
    cards: [
      {
        title: 'Programmiersprachen',
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
        title: 'Back-End',
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
        title: 'Datenbanken',
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
    uppertitle: 'Was habe ich bisher gemacht?',
    title: 'Erfahrung.',
    professional: {
      title: 'Berufserfahrung',
      certificationTranslation: 'Projekt erkunden',
      experiences: [
        {
          order: 2,
          title: 'Webentwickler für PEP e.V',
          company_name: 'PEP e.V',
          icon: PEPImg,
          iconBg: '#383E56',
          date: 'Dezember 2023 - heute',
          points: [
            'Erstellung der offiziellen Webseite der Organisation von Grund auf. Derzeitige Verbesserung und Wartung.',
            'Erhöhte Spendenraten (5x) durch die Implementierung einer sicheren Zahlungsplattform für reibungslose Transaktionen.',
            'Entwicklung einer responsiven, mehrsprachigen Website (Deutsch, Spanisch, Englisch) mit erstklassigen SEO-Praktiken.',
            'Verbesserung der Online-Präsenz der Organisation, Steigerung des Engagements der Freiwilligen um das 3-fache.',
          ],
          certification_url: 'https://www.pepev.org/',
        },
        {
          order: 1,
          title: 'Webentwickler für Chef Bautista',
          company_name: 'Chef Bautista',
          date: 'März 2024 - Mai 2024',
          points: [
            'Erstellung der Webanwendung für Chef Bautista (derzeit warten auf die endgültigen Übersetzungen der Chefköchin). Sie kann direkt die Speisekarten veröffentlichen, die sie derzeit hat, sowie die aktualisierten Preise.',
            'Implementierung einer sauberen Architektur zur Verbesserung der Wartbarkeit der Codebasis.',
            'Entwicklung einer responsiven, mehrsprachigen Website (Französisch, Spanisch, Englisch) mit erstklassigen SEO-Praktiken.',
            'Verbesserung der Online-Präsenz der Organisation.',
          ],
          certification_url: 'https://ingridbautistademo.netlify.app',
        },
      ],
    },
    qualifications: {
      title: 'Technische Ausbildung',
      certificationTranslation: 'Zertifizierung anzeigen',
      experiences: [
        {
          order: 5,
          title: 'Softwaretechniker Fachhochschulabschluss',
          company_name: 'Nebrija Technical School',
          certification_url: '',

          icon: NebrijaLogo,
          iconBg: '#383E56',
          date: 'Oktober 2023 - heute',
          points: [
            'Erlernen des Kerns der Softwareentwicklung.',
            'Entwicklung und Wartung von Webanwendungen unter Verwendung von Technologien wie Java, PHP oder anderen relevanten Sprachen.',
            'Entwicklung von plattformübergreifenden Anwendungen: Desktop, Web und Mobile.',
            'Entwicklung sicherer Anwendungen und Schutz von Informationen.',
          ],
        },
        {
          order: 4,
          title: 'Next.js - Das React Framework für die Produktion',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-be34cc73-b369-448c-a463-3f7725e7e110/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'August 2023 - Oktober 2023',
          points: [
            'Erstellung von Full-Stack-Webanwendungen mit Next.js und TypeScript.',
            'Statische Seitenerzeugung, serverseitige Generierung, SWR.',
            'Integration mit PayPal-Zahlungen.',
          ],
        },
        {
          order: 3,
          title: 'React: Von Null zum Experten (Hooks und MERN)',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-c1f827a0-82ba-4f37-affb-f7592a6ccee4/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'Juli 2023 - Juli 2023',
          points: [
            'Lernen von React von Grund auf bis zur Entwicklung vollständiger Anwendungen mit globalem Zustandsmanagement.',
            'Hooks, Testing, JWT, Redux, Mongoose...',
          ],
        },
        {
          order: 2,
          title: 'TypeScript: Ihr vollständiger Leitfaden und Handbuch',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-046682ed-559f-42a0-ac8b-5359562580d7/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'April 2023 - Juli 2023',
          points: [
            'Lernen von TypeScript, um einfacher wartbare Webanwendungen zu entwickeln.',
          ],
        },
        {
          order: 1,
          title: '100 Tage Code - 2023 Webentwicklung Bootcamp',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-d08e5c85-4041-4286-ac6a-d6cac5a907cf/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'November 2022 - März 2023',
          points: [
            'Entwicklung von Full-Stack-Anwendungen mit HTML, CSS und JavaScript.',
            'MVC, Express.js, Git, Github, DOM, CSS, MongoDB, REST-APIs...',
          ],
        },
      ],
    },
  },
  projectsSection: {
    uppertitle: 'Meine Arbeit',
    title: 'Projekte.',
    inProgressTitle: 'In Entwicklung',
    finishedProyectsTitle: 'Abgeschlossen',
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
        description: `Ich habe die offizielle Website für die gemeinnützige Organisation PEP eV erstellt. Eine Plattform für Spenden implementiert, mit Internationalisierung in 3 Sprachen und den besten SEO-Praktiken.`,
        tags: [
          {
            name: 'Responsiv',
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
        name: 'Astro Portfolio Webseite',
        description: `Die neu migrierte Astro-Portfolio für verbesserte Leistung. Es ist die Webseite, die Sie gerade besuchen.`,
        tags: [
          {
            name: 'Responsiv',
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
        description: `Full-Stack Bekleidungs-E-Commerce mit PayPal-Integration, das es Benutzern ermöglicht, Kleidung zu suchen und zu kaufen.`,
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
            name: 'PayPal',
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
        name: 'Tesla Landing Page',
        description: `Replik der offiziellen Tesla Landing Page.`,
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
        name: 'Teamkalender',
        description: `Eine Teamkalender-Web-App, die es Teammitgliedern ermöglicht, sich zu registrieren, sich anzumelden und Ereignisse in einem gemeinsamen Kalender zu erstellen, um die Organisation zu verbessern.`,
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
        name: 'Alte Portfolio Webseite',
        description: `Alte Portfolio-Website. Das Design ist ziemlich ähnlich wie das aktuelle Portfolio.`,
        tags: [
          {
            name: 'Responsiv',
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
        name: 'Chef Webseite',
        description: `In Entwicklung: Private Chef Full-Stack Webseite, die für die Lebensmittelzustellung und das Management von Veranstaltungen verwendet wird.`,
        tags: [
          {
            name: 'Responsiv',
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
  uppertitle: 'Möchten Sie mehr über mich erfahren?',
  title: 'Kontaktieren Sie mich.',
};

export const navBar: INavBar = {
  about: 'Über mich',
  experience: 'Erfahrung',
  projects: 'Projekte',
  contact: 'Kontakt',
};
export const contactPopUp: IContactPopUp = {
  upperTitle: 'KONTAKTIERE UNS',
  linkedinText: 'Linkedin',
  githubText: 'Github',
  emailText: 'E-Mail',
  title: 'Kontakt.',
  name: 'Dein Name',
  nameLabel: 'Wie ist dein Name?',
  email: 'Deine E-Mail',
  emailLabel: 'Was ist deine E-Mail-Adresse?',
  message: 'Deine Nachricht',
  messageLabel: 'Was möchtest du sagen?',
  send: 'Senden',
  alertError: 'Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.',
  alertError1: 'Der Name sollte mindestens 2 Buchstaben lang sein.',
  alertError2: 'Deine E-Mail-Adresse ist ungültig. Bitte überprüfe sie.',
  alertError3: 'Die Nachricht sollte mindestens 10 Buchstaben lang sein.',
  alertSuccess: 'Vielen Dank. Deine Nachricht wurde erfolgreich gesendet.',
};
