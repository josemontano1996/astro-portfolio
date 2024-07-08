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
    title: 'jm3 - Técnico especializado en desarrollo de aplicaciones web',
    description: `¡Bienvenido a mi portafolio! Soy un técnico especializado en desarrollo de aplicaciones web. Utilizo principios y herramientas de programación como Java, TypeScript, React, Node.js y más.`,
    og: {
      image:
        'https://res.cloudinary.com/dfupfbnez/image/upload/v1699010770/portfolioweb_h5atzn.png',
      url: import.meta.env.PUBLIC_WEB_URL,
    },
  },
  heroSection: {
    title: 'Un mundo de soluciones al alcance de tu mano.',
    subtitle:
      'El desarrollador web que necesitas, para las soluciones que buscas.',
    callToAction: 'Descubre más',
  },
  aboutSection: {
    title: 'Hola, soy',
    subtitle:
      'Desarrollo las aplicaciones web que tu empresa necesita. Soy un desarrollador full-stack con pasión por crear soluciones integrales.',
    ul: [
      'Desarrollo del lado del cliente',
      'Servidor',
      'Bases de datos',
      'Aplicaciones web',
      'Comercio electrónico',
      'Internacionalización',
      'Patrones de arquitectura',
      'Prácticas recomendadas para código limpio',
    ],
  },
  techSection: {
    upperTitle: 'Visión general',
    title: 'Tecnología.',
    body: `Como técnico especializado en desarrollo de aplicaciones web, dependo de la versatilidad. Mi viaje en el mundo de la tecnología me ha equipado con las habilidades para crear soluciones integrales. Desde el diseño del front-end hasta el desarrollo del back-end, navego a través de todo el espectro para asegurar que los sitios web que construyo no solo sean funcionales, sino también altamente eficientes.`,
    callToAction: 'Haz clic aquí',
    cards: [
      {
        title: 'Lenguajes de programación',
        ul: {
          ready: [
            { name: 'TypeScript', icon: typescriptIcon, alt: 'TypeScript' },
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
            { name: 'CSS3', icon: cssIcon, alt: 'CSS' },
            { name: 'Sass', icon: sassIcon, alt: 'Sass' },
            { name: 'Bootstrap', icon: bootstrapIcon, alt: 'Bootstrap' },
            { name: 'Material UI', icon: materialuiIcon, alt: 'Material UI' },
          ],
        },
      },
      {
        title: 'Back-End',
        ul: {
          ready: [
            {
              name: 'Next.js',
              icon: nextjsIcon,
              alt: 'Next.js',
              bg: 'white',
            },
            {
              name: 'Express.js',
              icon: expressIcon,
              alt: 'Express.js',
              bg: 'white',
            },
            { name: 'Node.js', icon: nodeIcon, alt: 'Node.js' },
            { name: 'PHP', icon: phpIcon, alt: 'PHP' },
            {
              name: 'Linux',
              icon: linuxIcon,
              alt: 'Linux',
              bg: 'white',
            },
          ],
        },
      },
      {
        title: 'Bases de datos',
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
    uppertitle: '¿Qué he hecho hasta ahora?',
    title: 'Experiencia.',
    professional: {
      title: 'Experiencia profesional',
      certificationTranslation: 'Explorar proyecto',
      experiences: [
        {
          order: 2,
          title: 'Desarrollador web para PEP e.V',
          company_name: 'PEP e.V',
          icon: PEPImg,
          iconBg: '#383E56',
          date: 'Diciembre de 2023 - Actualidad',
          points: [
            'Aumento de las tasas de donación (5x) mediante la implementación de una plataforma de pago segura para transacciones sin problemas.',
            'Creación del sitio web oficial de la organización desde cero. Mejora y mantenimiento actuales.',
            'Desarrollo de un sitio web receptivo y multilingüe (alemán, español, inglés) con prácticas avanzadas de SEO.',
            'Mejora de la presencia en línea de la organización, aumento del compromiso de los voluntarios en un 3x.',
          ],
          certification_url: 'https://www.pepev.org/',
        },
        {
          order: 1,
          title: 'Desarrollador web para Chef Bautista',
          company_name: 'Chef Bautista',
          date: 'Marzo de 2024 - Mayo de 2024',
          points: [
            'Creación de la aplicación web para Chef Bautista (actualmente esperando las traducciones finales de la chef). Ella puede publicar directamente los menús que actualmente tiene, así como los precios actualizados.',
            'Implementación de una arquitectura limpia para mejorar la mantenibilidad de la base de código.',
            'Desarrollo de un sitio web receptivo y multilingüe (francés, español, inglés) con prácticas avanzadas de SEO.',
            'Mejora de la presencia en línea de la organización.',
          ],
          certification_url: 'https://ingridbautistademo.netlify.app',
        },
      ],
    },
    qualifications: {
      title: 'Calificaciones de formación',
      certificationTranslation: 'Ver certificación',
      experiences: [
        {
          order: 5,
          title: 'Formación superior en técnico de software',
          company_name: 'Escuela Técnica Nebrija',
          certification_url: '',

          icon: NebrijaLogo,
          iconBg: '#383E56',
          date: 'Octubre de 2023 - Actualidad',
          points: [
            'Aprendizaje del núcleo del desarrollo de software.',
            'Desarrollo y mantenimiento de aplicaciones web utilizando tecnologías como Java, PHP u otros lenguajes relevantes.',
            'Desarrollo de aplicaciones multiplataforma: escritorio, web y móvil.',
            'Desarrollo de aplicaciones seguras y protección de la información.',
          ],
        },
        {
          order: 4,
          title: 'Next.js - El framework React para producción',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-be34cc73-b369-448c-a463-3f7725e7e110/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'Agosto de 2023 - Octubre de 2023',
          points: [
            'Creación de aplicaciones web full-stack con Next.js y TypeScript.',
            'Generación de páginas estáticas, generación del lado del servidor, SWR.',
            'Integración con pagos de PayPal.',
          ],
        },
        {
          order: 3,
          title: 'React: De cero a experto (Hooks y MERN)',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-c1f827a0-82ba-4f37-affb-f7592a6ccee4/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'Julio de 2023 - Julio de 2023',
          points: [
            'Aprendizaje de React desde cero hasta el desarrollo de aplicaciones completas con gestión global de estados.',
            'Hooks, Testing, JWT, Redux, Mongoose...',
          ],
        },
        {
          order: 2,
          title: 'TypeScript: Tu guía completa y manual',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-046682ed-559f-42a0-ac8b-5359562580d7/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'Abril de 2023 - Junio de 2023',
          points: [
            'Aprendizaje de TypeScript para desarrollar aplicaciones web fácilmente mantenibles.',
          ],
        },
        {
          order: 1,
          title: 'Bootcamp de desarrollo web 2023 - 100 días de código',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-d08e5c85-4041-4286-ac6a-d6cac5a907cf/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'Noviembre de 2022 - Marzo de 2023',
          points: [
            'Desarrollo de aplicaciones full-stack con HTML, CSS y JavaScript.',
            'MVC, Express.js, Git, Github, DOM, CSS, MongoDB, REST-APIs...',
          ],
        },
      ],
    },
  },
  projectsSection: {
    uppertitle: 'Mi trabajo',
    title: 'Proyectos.',
    inProgressTitle: 'En progreso',
    finishedProyectsTitle: 'Terminado',
    projects: [
      {
        name: 'www.pepev.org',
        description: `Creación de un nuevo sitio web para donaciones, con internacionalización en 3 idiomas y las mejores prácticas de SEO.`,
        tags: [
          {
            name: 'Totalmente responsivo',
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
        name: 'Astro Portfolio Website',
        description: `La cartera Astro-Portfolio recién migrada para un mejor rendimiento. Es el sitio web que estás visitando actualmente.`,
        tags: [
          {
            name: 'Totalmente responsivo',
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
        webpage_link: 'https://www.jm3.dev/en',
        source_code_link: 'https://github.com/josemontano1996/astro-portfolio',
      },
      {
        name: 'Antiguo sitio web de cartera',
        description: `Sitio web de cartera anterior. El diseño es bastante similar al de la cartera actual.`,
        tags: [
          {
            name: 'Totalmente responsivo',
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
        webpage_link: 'https://jm3development.vercel.app',
        source_code_link: 'https://github.com/josemontano1996/my-portfolio',
      },
      {
        name: 'Teslo Shop',
        description: `E-commerce de ropa Full-Stack con integración de PayPal que permite a los usuarios buscar y comprar ropa.`,
        tags: [
          {
            name: 'Escritorio',
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
        name: 'Página de destino de Tesla',
        description: `Réplica de la página de destino oficial de Tesla.`,
        tags: [
          {
            name: 'Escritorio',
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
        name: 'Calendario de equipo',
        description: `Una aplicación web de calendario de equipo que permite a los miembros del equipo registrarse, iniciar sesión y crear eventos en un calendario compartido para mejorar la organización.`,
        tags: [
          {
            name: 'Escritorio',
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
        name: 'Sitio web del chef',
        description: `En desarrollo: Sitio web completo de Chef privado para entrega de alimentos y gestión de eventos.`,
        tags: [
          {
            name: 'Totalmente responsivo',
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
  uppertitle: '¿Te gustaría saber más sobre mí?',
  title: 'Contáctame.',
};

export const navBar: INavBar = {
  about: 'Sobre mí',
  experience: 'Experiencia',
  projects: 'Proyectos',
  contact: 'Contacto',
};

export const contactPopUp: IContactPopUp = {
  upperTitle: 'PONTE EN CONTACTO',
  linkedinText: 'Linkedin',
  githubText: 'Github',
  emailText: 'Email',
  title: 'Contacto.',
  name: 'Tu nombre',
  nameLabel: '¿Cuál es tu nombre?',
  email: 'Tu correo electrónico',
  emailLabel: '¿Cuál es tu dirección de correo electrónico?',
  message: 'Tu mensaje',
  messageLabel: '¿Qué tienes que decir?',
  send: 'Enviar',
  alertError: 'Algo salió mal, por favor intenta de nuevo más tarde.',
  alertError1: 'El nombre debe tener al menos 2 letras.',
  alertError2: 'Tu correo electrónico es inválido, revísalo por favor.',
  alertError3: 'El mensaje debe tener al menos 10 letras.',
  alertSuccess: 'Gracias. Tu mensaje fue enviado exitosamente.',
};
