const projectsMap = {
    LoLStatReports: {
        name: "Reportes LoL Stats", 
        description: "Trabajo como Analista de Datos en All Knights y Primate. Ejemplos de reportes semanales de estadísticas de equipos de League of Legends. Proceso de ETL (Extracción, Transformación y Carga) y visualización y generación de los informes.", 
        extraDesc: "Desarrollo en Python utilizando librerías de análisis de datos (numpy, pandas, matplotlib, seaborn, etc.) y Pillow para la generación de imágenes desde el código, entre otras.",
        logoPath: "/lolstatreports.png",
        imgPaths: ["/lolstatreports1.png", "/lolstatreports2.png", "/lolstatreports3.png", "/lolstatreports4.png", "/lolstatreports5.png", "/lolstatreports6.png", "/lolstatreports7.png"],
        paragraphs: [
            "League of Legends es un deporte electrónico (esport), un videojuego multijugador de arena de batalla donde la estrategia, la habilidad y la capacidad de toma de decisiones en milésimas de segundos es crucial para la victoria.", 
            "El desarrollo de técnicas de scouting y análisis de datos es de vital importancia para la competencia. Uno de los desafíos más grandes en estos proyectos es la variabilidad y baja cantidad de los datos. El juego va modificando levementes sus reglas semana a semana, estrategias que antes eran consideradas las mejores pueden ahora no serlo. Esto y la limitada cantidad de partidos que hay en un torneo hacen que el análisis sea díficil y que la capacidad de generación e interpretación de los datos sea aún más crucial que su procesado."
        ],
        technologies: ["Python", "SQL"], 
        deploy: 'https://drive.google.com/drive/folders/1qm_RXvR3KA0Gkv6fe61MO2q4fWCCIjyW?usp=sharing',
        professional: true
    },
    GameHub: {
        name: "GameHub", 
        description: "Proyecto Front-end de una aplicación de descubrimiento de videojuegos usando la API de RAWG.IO.", 
        extraDesc: "Desarrollo en React utilizando Tanstack Query y Zustand.",
        logoPath: "/gamehub.jpg",
        technologies: ["Vite", "Typescript", "React", "Chakra UI"], 
        deploy: 'https://game-hub-umber.vercel.app/', 
        github: 'https://github.com/ncarnevale-data/game-hub'
    },
    MyPortfolio: {
        name: "Mi Portfolio", 
        description: "Lo estás viendo ahora! No dudes en darme tu opinión, usarlo como inspiración o hacerme cualquier pregunta!", 
        logoPath: "/gamehub.jpg", 
        technologies: ["Typescript", "React", "Vite", "Tailwind CSS"],
        github: 'https://github.com/ncarnevale-data/portfolio'
    },
};

type Project = {
    name: string;
    description: string;
    logoPath: string;
    technologies: string[];
    extraDesc?: string
    imgPaths?: string[]
    paragraphs?: string[]
    deploy?: string;
    github?: string;
    professional?: boolean;
  };

const mappedProjects: Project[] = Object.values(projectsMap)

export default mappedProjects