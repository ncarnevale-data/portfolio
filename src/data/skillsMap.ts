const skillsMap = {
    Python: { name: "Python", logoPath: "/python.png", colorrgb: "49, 111, 159" },
    SQL: { name: "SQL", logoPath: "/sql.png", colorrgb: "29, 138, 181" },
    Jupyter: { name: "Jupyter", logoPath: "/jupyter.png", colorrgb: "221, 137, 84" },
    PowerBI: {
      name: "Power BI",
      logoPath: "/power-bi.png",
      colorrgb: "239, 201, 81",
    },
    Tableau: {
      name: "Tableau",
      logoPath: "/tableau.png",
      colorrgb: "232, 118, 45",
    },
    MLflow: { name: "MLflow", logoPath: "/mlflow.png", colorrgb: "62, 171, 218" },
    Azure: { name: "Azure", logoPath: "/azure.png", colorrgb: "56, 192, 240" },
    AzureML: { name: "Azure ML", logoPath: "/azureml.png", colorrgb: "78, 204, 232" },
    GoogleCloud: { name: "Google Cloud", logoPath: "/google-cloud.png", colorrgb: "208, 194, 40" },
    Firebase: { name: "Firebase", logoPath: "/firebase.png", colorrgb: "255, 160, 0" },
    MySQL: { name: "MySQL", logoPath: "/mysql.svg", colorrgb: "3, 80, 105" },
    Selenium: { name: "Selenium", logoPath: "/selenium.png", colorrgb: "108, 204, 84" },
    Typescript: {
      name: "Typescript",
      logoPath: "/typescript.png",
      colorrgb: "45, 121, 199",
    },
    Javascript: {
      name: "Javascript",
      logoPath: "/javascript.png",
      colorrgb: "240, 219, 79",
    },
    React: { name: "React", logoPath: "/react.png", colorrgb: "97, 219, 251" },
    Vite: { name: "Vite", logoPath: "/vite.svg", colorrgb: "187, 54, 254" },
    TailwindCSS: {
      name: "Tailwind CSS",
      logoPath: "/tailwindcss.png",
      colorrgb: "56, 189, 248",
    },
    ChakraUI: {
      name: "Chakra UI",
      logoPath: "/chakra-ui.png",
      colorrgb: "69, 199, 193",
    },
    FastAPI: {
      name: "FastAPI",
      logoPath: "/fastapi.svg",
      colorrgb: "5, 153, 139",
    },
    SQLite: { name: "SQLite", logoPath: "/sqlite.png", colorrgb: "138, 209, 242" },
    MongoDB: {
      name: "MongoDB",
      logoPath: "/mongodb.png",
      colorrgb: "69, 73, 41",
    },
    HTML: { name: "HTML", logoPath: "/html.svg", colorrgb: "227, 79, 38" },
    CSS: { name: "CSS", logoPath: "/css.png", colorrgb: "33, 76, 229" },
    Nodejs: { name: "Node.js", logoPath: "/nodejs.png", colorrgb: "82, 159, 65" },
    Git: { name: "Git", logoPath: "/git.png", colorrgb: "239, 79, 50" },
  };

// ReactQuery: {name: "React Query",logoPath: "/react-query.png",colorrgb: "255, 65, 84",},

const mappedSkills = Object.values(skillsMap)

export default mappedSkills