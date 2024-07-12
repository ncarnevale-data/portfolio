const projectsMap = {
    LoLStatReports: {
        name: {
          en: "LoL Stat Reports",
          es: "Reportes LoL Stats",
        },
        description: {
          en: "Work as Data Analyst at All Knights and Primate. Examples of weekly team statistics reports for League of Legends. ETL (Extract, Transform, Load) process and visualization and generation of reports.",
          es: "Trabajo como Analista de Datos en All Knights y Primate. Ejemplos de reportes semanales de estadísticas de equipos de League of Legends. Proceso de ETL (Extracción, Transformación y Carga) y visualización y generación de los informes.",
        },
        extraDesc: {
          en: "Developed in Python using data analysis libraries (numpy, pandas, matplotlib, seaborn, etc.) and Pillow for image generation from code, among others.",
          es: "Desarrollo en Python utilizando librerías de análisis de datos (numpy, pandas, matplotlib, seaborn, etc.) y Pillow para la generación de imágenes desde el código, entre otras.",
        },
        logoPath: "lolstatreports.png",
        imgPaths: ["/lolstatreports1.png", "/lolstatreports2.png", "/lolstatreports3.png", "/lolstatreports4.png", "/lolstatreports5.png", "/lolstatreports6.png", "/lolstatreports7.png"],
        paragraphs: {
          en: [
            "League of Legends is an esport, a multiplayer online battle arena game where strategy, skill, and split-second decision-making are crucial for victory.",
            "Developing scouting techniques and data analysis is vital for competition. One of the biggest challenges in these projects is the variability and low quantity of data. The game slightly changes its rules week by week, strategies that were once considered the best may now not be. This, combined with the limited number of matches in a tournament, makes analysis difficult, and the ability to generate and interpret data is even more crucial than processing it.",
          ],
          es: [
            "League of Legends es un deporte electrónico (esport), un videojuego multijugador de arena de batalla donde la estrategia, la habilidad y la capacidad de toma de decisiones en milésimas de segundos es crucial para la victoria.",
            "El desarrollo de técnicas de scouting y análisis de datos es de vital importancia para la competencia. Uno de los desafíos más grandes en estos proyectos es la variabilidad y baja cantidad de los datos. El juego va modificando levementes sus reglas semana a semana, estrategias que antes eran consideradas las mejores pueden ahora no serlo. Esto y la limitada cantidad de partidos que hay en un torneo hacen que el análisis sea díficil y que la capacidad de generación e interpretación de los datos sea aún más crucial que su procesado.",
          ],
        },
        technologies: ["Python", "SQL"],
        deploy: 'https://drive.google.com/drive/folders/1qm_RXvR3KA0Gkv6fe61MO2q4fWCCIjyW?usp=sharing',
        professional: true,
      },
      GameHub: {
        name: {
          en: "GameHub",
          es: "GameHub",
        },
        description: {
          en: "Front-end project of a video game discovery application using the RAWG.IO API.",
          es: "Proyecto Front-end de una aplicación de descubrimiento de videojuegos usando la API de RAWG.IO.",
        },
        extraDesc: {
          en: "Developed in React using Tanstack Query and Zustand.",
          es: "Desarrollo en React utilizando Tanstack Query y Zustand.",
        },
        logoPath: "gamehub.jpg",
        technologies: ["Vite", "Typescript", "React", "Chakra UI"],
        deploy: 'https://game-hub-umber.vercel.app/',
        github: 'https://github.com/ncarnevale-data/game-hub',
        professional: false
      },
      MyPortfolio: {
        name: {
          en: "My Portfolio",
          es: "Mi Portfolio",
        },
        description: {
          en: "You are seeing it now! Feel free to give me your feedback, use it as inspiration, or ask me any questions!",
          es: "Lo estás viendo ahora! No dudes en darme tu opinión, usarlo como inspiración o hacerme cualquier pregunta!",
        },
        logoPath: "gamehub.jpg",
        technologies: ["Typescript", "React", "Vite", "Tailwind CSS"],
        github: 'https://github.com/ncarnevale-data/portfolio',
        professional: false
      },
    };

export interface Project {
    name: {
        en: string;
        es: string;
      };
      description: {
        en: string;
        es: string;
      };
      logoPath: string;
      technologies: string[];
      extraDesc?: {
        en: string;
        es: string;
      };
      imgPaths?: string[];
      paragraphs?: {
        en: string[];
        es: string[];
      };
      deploy?: string;
      github?: string;
      professional?: boolean;
  };

const mappedProjects: Project[] = Object.values(projectsMap)

export default mappedProjects