const navLinks = [
  { id: "hero", title: "Home" },
  { id: "proyectos", title: "Proyectos" },
  { id: "sobre-mi", title: "Sobre Mi" },
  { id: "contacto", title: "Contacto" },
];

const projectsList = [
  {
    id: "personifai",
    title: "PersonifAI",
    description:
      "PersonifAI es una librería de personajes diseñada para dotar a las inteligencias artificiales de una historia, personalidad y estilo de respuesta únicos. Cada personaje cuenta con un trasfondo narrativo y una forma particular de expresarse, lo que permite al usuario interactuar no solo con un modelo de IA, sino con una entidad ficticia coherente y envolvente.",
    links: {
      github: "https://github.com/Cristiangc67/PersonifAI-Front-end",
      web: "https://personif-ai-front-end.vercel.app",
    },
    type: "pinned",
  },
  {
    id: "kanvai",
    title: "KanvAI",
    description:
      "Un generador de imágenes impulsado por Gemini AI que permite a los usuarios dibujar en un lienzo y transformar sus bocetos en ilustraciones fotorealistas o de estilo anime.",
    links: {
      github: "https://github.com/Cristiangc67/KanvAI/",
      web: "https://kanv-ai.vercel.app/",
    },
    type: "pinned",
  },
  {
    id: "datavisual",
    title: "Data-visual",
    description:
      "Este proyecto es una aplicación web interactiva que permite a los usuarios cargar archivos CSV, visualizar los datos en una tabla dinámica y generar gráficos de barras personalizables para analizar la información.",
    links: {
      github: "https://github.com/Cristiangc67/data-visual/",
      web: "https://data-visual-liard.vercel.app/",
    },
    type: "scroll",
  },
];

export { navLinks, projectsList };
