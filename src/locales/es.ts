import type { IFooter, IHomePage } from '@/interfaces/home-page';
import {
  DatabaseIcon,
  LaptopIcon,
  ServerIcon,
  SquareCodeIcon,
} from 'lucide-react';

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
    title: 'jm3 - Portafolio de Desarrollador Web Full Stack',
    description: `¡Bienvenido a mi portafolio! Soy un desarrollador full stack especializado 
    en desarrollo web, aplicaciones y sistemas. Descubre mis proyectos y experiencia
    en tecnologías como TypeScript, JavaScript, React, Node.js y más.`,
    og: {
      image:
        'https://res.cloudinary.com/dfupfbnez/image/upload/v1699010770/portfolioweb_h5atzn.png',
      url: import.meta.env.PUBLIC_WEB_URL,
    },
  },

  heroSection: {
    title: 'Un Mundo de Soluciones al Alcance de Tu Mano',
    subtitle:
      'El desarrollador web que buscas, para las soluciones que necesitas.',
    callToAction: 'Descubre más',
  },
  aboutSection: {
    title: 'Hola, soy',
    subtitle:
      'Desarrollo aplicaciones web Full-Stack, que tu negocio necesita.',
    ul: [
      'Mejores prácticas de SEO',
      'Internacionalización',
      'Diseño Responsivo',
      'Autenticación',
      'Bases de datos',
      'Y mucho más...',
    ],
  },
  techSection: {
    upperTitle: 'Resumen',
    title: 'Tecnología',
    body: `Como Desarrollador Full-Stack, me apasiona la versatilidad. Mi viaje en el ámbito de la tecnología
          me ha equipado con las habilidades para crear soluciones integrales. Desde el diseño front-end
          hasta el desarrollo back-end, navego por todo el espectro, asegurándome de que los sitios web que
          construyo no solo sean funcionales, sino también altamente eficientes.`,
    callToAction: 'Haz clic en mí',
    cards: [
      {
        title: 'Lenguajes',
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
        title: 'Back-End',
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
        title: 'Bases de Datos',
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
    title: 'Experiencia',
    profesional: {
      title: 'Experiencia Profesional',
      certificationTranslation: 'Explorar Proyecto',
      experiences: [
        {
          order: 2,
          title: 'Desarrollador Web para PEP e.V',
          company_name: 'PEP e.V',
          icon: PEPImg,
          iconBg: '#383E56',
          date: 'Diciembre 2023 - Presente',
          points: [
            'Aumenté las tasas de donación (5x) implementando una plataforma de pago segura para transacciones sin problemas.',
            'Creé desde cero la página web oficial de la ONG. Actualmente mejorándola y manteniéndola.',
            'Desarrollé un sitio multilingüe y responsivo (Alemán, Español, Inglés) con las mejores prácticas de SEO.',
            'Mejoré la presencia en línea de la organización, aumentando el compromiso de los voluntarios en 3x.',
          ],
          certification_url: 'https://www.pepev.org/',
        },
        {
          order: 1,
          title: 'Desarrollador Web para Chef Bautista',
          company_name: 'Chef Bautista',
          date: 'Marzo 2024 - Mayo 2024',
          points: [
            'Construí la aplicación web para Chef Bautista (actualmente esperando las traducciones finales del Chef). Con ella, puede publicar directamente los menús actuales y los precios actualizados.',
            'Implementé una arquitectura limpia para mejorar el mantenimiento del código.',
            'Desarrollé un sitio multilingüe y responsivo (Francés, Español, Inglés) con las mejores prácticas de SEO.',
            'Mejoré la presencia en línea de la organización.',
          ],
          certification_url: 'https://ingridbautistademo.netlify.app',
        },
      ],
    },
    qualifications: {
      title: 'Calificaciones Educativas',
      certificationTranslation: 'Ver certificación',
      experiences: [
        {
          order: 5,
          title: 'Grado Superior en Desarrollo de Software',
          company_name: 'Escuela Técnica Nebrija',
          certification_url: '',

          icon: NebrijaLogo,
          iconBg: '#383E56',
          date: 'Octubre 2023 - Presente',
          points: [
            'Aprendiendo lo esencial del desarrollo de software.',
            'Desarrollo y mantenimiento de aplicaciones web usando tecnologías como Java, PHP u otros lenguajes relevantes.',
            'Desarrollo de aplicaciones multiplataforma: escritorio, web y móvil.',
            'Desarrollo de aplicaciones seguras y protección de la información.',
          ],
        },
        {
          order: 4,
          title: 'Next.js El Framework de React para Producción',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-be34cc73-b369-448c-a463-3f7725e7e110/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'Agosto 2023 - Octubre 2023',
          points: [
            'Construcción de aplicaciones web Full-Stack con Next.js y TypeScript.',
            'Generación de sitios estáticos, generación del lado del servidor, SWR.',
            'Integración con pagos de PayPal.',
          ],
        },
        {
          order: 3,
          title: 'React: De Cero a Experto (Hooks y MERN)',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-c1f827a0-82ba-4f37-affb-f7592a6ccee4/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'Julio 2023 - Julio 2023',
          points: [
            'Aprendiendo React desde cero hasta construir aplicaciones completas con gestión de estado global.',
            'Hooks, pruebas, JWT, Redux, Mongoose...',
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
          date: 'Abril 2023 - Julio 2023',
          points: [
            'Aprendiendo TypeScript para desarrollar aplicaciones web más fáciles de mantener y escalables.',
          ],
        },
        {
          order: 1,
          title: '100 Días de Código - Bootcamp de Desarrollo Web 2023',
          company_name: 'Udemy',

          certification_url:
            'https://www.udemy.com/certificate/UC-d08e5c85-4041-4286-ac6a-d6cac5a907cf/',
          icon: UdemyLogo,
          iconBg: '#383E56',
          date: 'Noviembre 2022 - Marzo 2023',
          points: [
            'Construcción de aplicaciones Full-Stack con HTML, CSS y JavaScript.',
            'MVC, Express.js, Git, GitHub, DOM, CSS, MongoDB, APIs REST...',
          ],
        },
      ],
    },
  },
  projectsSection: {
    uppertitle: 'Mi Trabajo',
    title: 'Proyectos',
    inProgressTitle: 'En desarrollo',
    finishedProyectsTitle: 'Finalizados',
    projects: [
      {
        name: 'www.pepev.org',
        description: `Creación de un nuevo sitio web que permite a los donantes donar dinero a través del sitio web,
        con internacionalización en 3 idiomas y
        mejores prácticas de SEO`,
        tags: [
          {
            name: 'Totalmente Responsivo',
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
        name: 'Página de destino de Tesla',
        description: `Réplica de la página de inicio oficial de Tesla.`,
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
        name: 'Página de Portafolio Antiguo',
        description: `Esta página por la que estás navegando. Viene con las mejores prácticas de SEO, internacionalización en 3 idiomas, SSGs y el
        nuevo App Router.`,
        tags: [
          {
            name: 'Totalmente Responsivo',
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
        description: `E-commerce de ropa Full-Stack con integración de PayPal, que permite a los usuarios buscar y comprar ropa. 
          Desarrollado usando Next.js para el front-end y back-end, y MongoDB como base de datos.`,
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
        name: 'Calendario de Equipo',
        description: `Página web de calendario de equipo hecha con React, donde personas del mismo equipo pueden registrarse 
        e iniciar sesión para crear eventos en un calendario compartido para una mejor organización. Todos los datos de usuarios y
        eventos se manejan adecuadamente a través de esta API.`,
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
        name: 'Página Web de Chef',
        description: `En desarrollo: Página web Full-Stack para chef privado que se utilizará para la entrega de alimentos y gestión de eventos.`,
        tags: [
          {
            name: 'Totalmente Responsivo',
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
  callToAction: 'Mi cuenta de LinkedIn',
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
