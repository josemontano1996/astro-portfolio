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
} from 'public/icons/icon-src';

export const homePage: IHomePage = {
  metadata: {
    title: 'jm3 - Full Stack Webentwickler Portfolio',
    description: `Willkommen in meinem Portfolio! Ich bin ein Full-Stack-Entwickler, spezialisiert 
    auf Webentwicklung, Anwendungen und Systeme. Schauen Sie sich meine Projekte und Erfahrungen
    mit Technologien wie TypeScript, JavaScript, React, Node.js und mehr an.`,

    og: {
      image:
        'https://res.cloudinary.com/dfupfbnez/image/upload/v1699010770/portfolioweb_h5atzn.png',
      url: import.meta.env.PUBLIC_WEB_URL,
    },
  },

  heroSection: {
    title: 'Eine Welt voller Lösungen in Reichweite',
    subtitle:
      'Der Webentwickler, den Sie suchen, für die Lösungen, die Sie brauchen.',
    callToAction: 'Mehr entdecken',
  },
  aboutSection: {
    title: 'Hallo, ich bin',
    subtitle:
      'Ich entwickle die Full-Stack-Webanwendungen, die Ihr Unternehmen benötigt.',
    ul: [
      'Beste SEO-Praktiken',
      'Internationalisierung',
      'Responsives Design',
      'Authentifizierung',
      'Datenbanken',
      'Und vieles mehr...',
    ],
  },
  techSection: {
    upperTitle: 'Überblick',
    title: 'Tech.',
    body: `Als Full-Stack-Entwickler gedeihe ich durch Vielseitigkeit. Meine Reise im Bereich der Technologie
          hat mich mit den Fähigkeiten ausgestattet, umfassende Lösungen zu erstellen. Vom Front-End-Design
          bis zur Back-End-Entwicklung navigiere ich das gesamte Spektrum und stelle sicher, dass die von mir
          erstellten Websites nicht nur funktional, sondern auch höchst effizient sind.`,
    callToAction: 'Klick mich',
    cards: [
      {
        title: 'Sprachen',
        ul: {
          ready: [
            { name: 'TypeScript', icon: typescriptIcon, alt: 'Typescript' },
            { name: 'JavaScript', icon: javascriptIcon, alt: 'JavaScript' },
            { name: 'Java', icon: javaIcon, alt: 'Java' },
            { name: 'PHP', icon: phpIcon, alt: 'PHP' },
          ],
        },
      },
      {
        title: 'Front-End',
        ul: {
          ready: [
            { name: 'React', icon: reactIcon, alt: 'React' },
            { name: 'Tailwind', icon: tailwindIcon, alt: 'Tailwind' },
            { name: 'CSS3', icon: cssIcon, alt: 'Css' },
            { name: 'Sass', icon: sassIcon, alt: 'Sass' },
            { name: 'Bootstrap', icon: bootstrapIcon, alt: 'Bootstrap' },
            { name: 'Material UI', icon: materialuiIcon, alt: 'Material UI' },
          ],
        },
      },
      {
        title: 'Back-end',
        ul: {
          ready: [
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
            { name: 'PHP', icon: phpIcon, alt: 'PHP' },
            {
              name: 'Linux',
              icon: linuxIcon,
              alt: 'linux',
              bg: 'white',
            },
          ],
        },
      },
      {
        title: 'Datenbanken',
        ul: {
          ready: [
            { name: 'MySQL', icon: mysqlIcon, alt: 'MySQL' },
            { name: 'MongoDB', icon: mongodbIcon, alt: 'MongoDB' },
            { name: 'Mongoose', icon: mongooseIcon, alt: 'Mongoose' },
          ],
        },
      },
    ],
  },
  experienceSection: {
    uppertitle: 'Was habe ich bisher gemacht?',
    title: 'Erfahrung.',
    experiences: [
      {
        order: 6,
        title: 'Webentwickler für PEP e.V',
        company_name: 'PEP e.V',

        icon: PEPImg,
        iconBg: '#383E56',
        date: 'Dezember 2023 - Heute',
        points: [
          'Erstellung einer brandneuen Website von Grund auf.',
          'Entwicklung einer responsiven, mehrsprachigen Website (Deutsch, Spanisch, Englisch) mit erstklassigen SEO-Praktiken.',
          `Verbesserung der Online-Präsenz der Organisation.`,
          'Steigerung der Spendenraten und Implementierung einer sicheren Zahlungsplattform für nahtlose Transaktionen.',
        ],
      },

      {
        order: 5,
        title: 'Höherer Abschluss als Softwaretechniker',
        company_name: 'Nebrija Technische Schule',
        certification_url: '',

        icon: NebrijaLogo,
        iconBg: '#383E56',
        date: 'Oktober 2023 - Heute',
        points: [
          'Erlernen der Grundlagen der Softwareentwicklung.',
          'Entwicklung und Wartung von Webanwendungen mit Technologien wie Java, PHP oder anderen relevanten Sprachen.',
          'Entwicklung plattformübergreifender Anwendungen: Desktop, Web und Mobil.',
          'Entwicklung sicherer Anwendungen und Schutz von Informationen.',
        ],
      },
      {
        order: 4,
        title: 'Next.js Das React-Framework für die Produktion',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-be34cc73-b369-448c-a463-3f7725e7e110/',
        icon: UdemyLogo,
        iconBg: '#383E56',
        date: 'August 2023 - Oktober 2023',
        points: [
          'Erstellung von Full-Stack-Webanwendungen mit Next.js und TypeScript.',
          'Statische Seitengenerierung, serverseitige Generierung, SWR.',
          'Integration von PayPal-Zahlungen.',
        ],
      },
      {
        order: 3,
        title: 'React: Vom Anfänger zum Experten (Hooks und MERN)',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-c1f827a0-82ba-4f37-affb-f7592a6ccee4/',
        icon: UdemyLogo,
        iconBg: '#383E56',
        date: 'Juli 2023 - Juli 2023',
        points: [
          'Erlernen von React von Grund auf bis hin zur Erstellung vollständiger Anwendungen mit globalem Zustandsmanagement.',
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
          'Erlernen von TypeScript, um leichter zu entwickelnde und wartbare Webanwendungen zu erstellen.',
        ],
      },
      {
        order: 1,
        title: '100 Tage Code - 2023 Webentwicklungs-Bootcamp',
        company_name: 'Udemy',

        certification_url:
          'https://www.udemy.com/certificate/UC-d08e5c85-4041-4286-ac6a-d6cac5a907cf/',
        icon: UdemyLogo,
        iconBg: '#383E56',
        date: 'November 2022 - März 2023',
        points: [
          'Erstellung von Full-Stack-Anwendungen mit HTML, CSS und JavaScript.',
          'MVC, Express.js, Git, Github, DOM, CSS, MongoDB, REST-APIs...',
        ],
      },
    ],
  },
  projectsSection: {
    uppertitle: 'Meine Arbeit',
    title: 'Projekte.',
    inProgressTitle: 'In Entwicklung',
    finishedProyectsTitle: 'Abgeschlossen',
    projects: [
      {
        name: 'www.pepev.org',
        description: `Erstellung einer brandneuen Website, die es Spendern ermöglicht, über die Website zu spenden,
        mit Internationalisierung in 3 Sprachen und
        besten SEO-Praktiken`,
        tags: [
          {
            name: 'Vollständig-Responsive',
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
        name: 'Tesla Landing Page',
        description: `Nachbildung der offiziellen Tesla-Landingpage.`,
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
        name: 'Altes Portfolio Webseite',
        description: `Diese Seite, durch die Sie navigieren. Sie enthält beste SEO-Praktiken, Internationalisierung in 3 Sprachen, SSGs und den
        neuen App Router.`,
        tags: [
          {
            name: 'Vollständig-Responsive',
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
        description: `Full-Stack-Bekleidungs-E-Commerce mit PayPal-Integration, das es Benutzern ermöglicht, Kleidung zu suchen und zu kaufen. 
          Entwickelt mit Next.js für das Frontend und Backend und MongoDB als Datenbank.`,
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
        name: 'Team Kalender',
        description: `Team-Kalender-Webseite, erstellt mit React, wo sich Teammitglieder registrieren 
        und anmelden können, um Ereignisse in einem gemeinsamen Kalender zur besseren Organisation zu erstellen. Alle Benutzer- und
        Ereignisdaten kommen über diese API und werden ordnungsgemäß verarbeitet.`,
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
    ],
    inprogress: [
      {
        name: 'Chef-Webseite',
        description: `In Entwicklung: Private Chef Full-Stack-Webseite, die für Essenslieferung und Eventmanagement verwendet wird.`,
        tags: [
          {
            name: 'Vollständig-Responsive',
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
  upperTitle: 'KONTAKTIEREN SIE MICH',
  callToAction: 'Mein LinkedIn-Konto',
  title: 'Kontakt.',
  name: 'Ihr Name',
  nameLabel: `Wie heißen Sie?`,
  email: 'Ihre E-Mail',
  emailLabel: `Wie lautet Ihre E-Mail-Adresse?`,
  message: 'Ihre Nachricht',
  messageLabel: `Was möchten Sie sagen?`,
  send: 'Senden',
  alertError:
    'Etwas ist schief gelaufen, bitte versuchen Sie es später erneut.',
  alertError1: 'Der Name sollte mindestens 2 Buchstaben lang sein.',
  alertError2:
    'Ihre E-Mail-Adresse ist ungültig, bitte überprüfen Sie sie erneut.',
  alertError3: 'Die Nachricht sollte mindestens 10 Buchstaben lang sein.',
  alertSuccess: 'Danke. Ihre Nachricht wurde erfolgreich gesendet.',
};
