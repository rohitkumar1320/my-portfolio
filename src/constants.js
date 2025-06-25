// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/IMG_5790.jpeg.jpg";
import bsaLogo from "./assets/education_logo/IMG_5789.jpeg.jpg";
import vpsLogo from "./assets/education_logo/IMG_5786.jpeg.jpg";
import tpsLogo from "./assets/education_logo/IMG_5788.jpeg.jpg";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/project 1.png";
import csprepLogo from "./assets/work_logo/project 2.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "SRM college of Arts and Science, Chennai",
    date: "Aug 2021 - Nov 2023",
    grade: "A",
    desc: "I have completed my Master's degree Microbiology from SRM college of Arts and Science, Chennai.",
    degree: "Master of Science - M.Sc",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Hindustan College of Arts and science, Chennai",
    date: "July 2018 - Apr 2021",
    grade: "A",
    desc: "I completed my Bachelor's degree in Microbiology from Hindustan college of Arts and Science, Chennai.",
    degree: "Bachelor of Science - B.Sc",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "RBV Senior Secondary School, Shri Vijaya Puram",
    date: "Apr 2017 - March 2018",
    grade: "A",
    desc: "I completed my class 12 education from RBV Senior Secondary School, Shri Vijaya Puram, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM with Physical Education",
  },
  {
    id: 3,
    img: tpsLogo,
    school: "ST Mary Senior Secondary School, Shri Vijaya Puram",
    date: "Apr 2015 - March 2016",
    grade: "A",
    desc: "I completed my class 10 education from ST Mary Senior Secondary School, Shri Vijaya Puram under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Shoe eCommerce",
    description:
      "A responsive React-based shoe e-commerce app featuring product listings, cart functionality, filtering, and smooth navigation using React Router. Built with React Hooks and state management, it offers a clean UI and seamless user experience across devices.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "TypeScript", "React JS"],
    github:
      "https://github.com/rohitkumar1320/reactshoeecommerce",
    webapp: "https://rohitkumar1320.github.io/reactshoeecommerce/",
  },
  {
    id: 1,
    title: "Meeting Schedule",
    description:
      "A meeting scheduler web app built with React that allows users to book, update, and manage meetings efficiently. It uses React Router for smooth page navigation and state management for handling form inputs and meeting data, providing a clean and user-friendly interface.",
    image: csprepLogo,
    tags: [
      "React JS",
      "HTML",
      "TailwindCSS",
      "TypeScript",
    ],
    github: "https://github.com/rohitkumar1320/fix-your-meetings?tab=readme-ov-file",
    webapp: "https://rohitkumar1320.github.io/fix-your-meetings/",
  },
];
