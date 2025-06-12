import { KnowMe,ProfileProps,WorksProps } from "./type";

export const NavBarItems = [
    {
        title : "About",
        path:"/about"
    },
    {
        title : "Projects",
        path:"/projects"
    },
    {
        title : "Contact",
        path:"/contact"
    },
    {
        title : "Teck-stack",
        path:"/skills"
    }
]

export const svgies = ["/Portofolio/aboutus.svg","/Portofolio/projectsus.svg","/Portofolio/contactus.svg","/Portofolio/techus.svg"]

export function getRandomInteger(N : number) {
  return Math.floor(Math.random() * (N + 1));
}



export const socialMedia = [
  {
    icon: "/Portofolio/githubLogo.png",
    path: "https://github.com/addahadi",
  },
  {
    icon: "/Portofolio/linkIn.png",
    path: "https://www.linkedin.com/in/adda-missoum",
  },

];


export const Circles = [1000,1200,1600,2200]

export const MySkills = [
  "React.js",
  "TypeScript",
  "Firebase",
  "TailwindCSS",
  "JavaScript",
  "Git",
  "HTML",
  "CSS",
];

export const MyTimeline = [
  {
    date: "2022",
    description: "Started studying Computer Science at Ibn Khaldoun University",
  },
  {
    date: "2023",
    description:
      "Joined a team on Discord and worked on collaborative web projects",
  },
  {
    date: "2024",
    description:
      "Built personal portfolio and contributed to open-source projects",
  },
  {
    date: "2025",
    description: "Seeking internships and real-world development experience",
  },
];


export const Works: WorksProps[] = [
  {
    title: "Dz-Podcast",
    desc: "Welcome to Pod_Dz, a cutting-edge podcast web app built with React and TypeScript. It’s designed to not only let you browse popular podcasts but also gives you the power to create your own podcasts using AI-generated images and text-to-speech technology! 🔥",
    img: "/Portofolio/podcast.png",
    path: "https://addahadi.github.io/podcast-website/",
    github: "https://github.com/addahadi/podcast-website",

    icon: "/Portofolio/podcast-logo.svg",
    edge: "50px",
    tags: ["AI", "Web"],
  },
  {
    title: "Travel-advisor",
    desc: "This travel advisor website helps users find nearby hotels, restaurants, and attractions. It shows a list of places on the left, with ratings and categories, and a map on the right with markers for each location. Simple and user-friendly for quick recommendations, making travel planning easy",
    img: "/Portofolio/mapApp.png",
    path: "https://github.com/addahadi/map_app",
    github: "https://github.com/addahadi/map_app",
    icon: "/Portofolio/mapicon.svg",
    edge: "80px",
    tags: ["Web"],
  },
  {
    title: "Text-Docs",
    desc: "Text Docs is a simple and intuitive web application for managing text documents. It allows users to create, search, and delete documents with ease. The app features a dark-themed interface for a modern and visually appealing user experience. The application is fully responsive, ensuring a seamless experience across all devices, from desktops to mobile phones.",
    img: "/Portofolio/textEditor.png",
    path: "https://addahadi.github.io/TextEditor/",
    github: "https://github.com/addahadi/TextEditor",
    icon: "/Portofolio/docs.svg",
    edge: "110px",
    tags: ["Web"],
  },
  {
    title: "Workout-app",
    desc: "Welcome to Workout-app, your ultimate fitness companion! We provide users with daily workout routines tailored for each muscle group. Whether you're looking to build strength, improve endurance, or tone up, we've got you covered. Each exercise is paired with detailed descriptions and instructional videos to guide you through proper form and technique. Start your fitness journey",
    img: "/Portofolio/sport.png",
    path: "https://github.com/addahadi/gym_website",
    github: "https://github.com/addahadi/gym_website",
    icon: "/Portofolio/sport-logo.svg",
    tags: ["Web"],
  },
  {
    title: "StoryGen-app",
    desc: "An AI-powered storytelling platform where users can create, explore, and share stories. It features an AI assistant that helps users generate and improve their stories. Users can also read stories from others, give likes, save favorites, customize their bio and profile picture, receive notifications, and follow other users, making storytelling interactive and engaging.",
    img: "/Portofolio/StoryGen.png",
    path: "https://addahadi.github.io/Story-Website/#/signin",
    github: "https://github.com/addahadi/Story-Website",
    icon: "/Portofolio/story-logo.svg",
    tags: ["AI", "Web"],
  },
];


export const skill: KnowMe[] = [
  {
    img: "/Portofolio/imogi.png",
    title: "About me",
    desc: "who i am and what i do",
    path: "/about",
  },
  {
    img: [
      {
        title: "javascript",
        icon: "/Portofolio/javascript.svg",
      },
      {
        title: "github",
        icon: "/Portofolio/github.svg",
      },
      {
        title: "typescript",
        icon: "/Portofolio/typescript.svg",
      },
      {
        title: "react",
        icon: "/Portofolio/react.svg",
      },
      {
        title: "tailwind",
        icon: "/Portofolio/tailwind.svg",
      },
      {
        title: "redux",
        icon: "/Portofolio/redux.svg",
      },
      {
        title: "html",
        icon: "/Portofolio/html.svg",
      },
      {
        title: "javascript",
        icon: "/Portofolio/javascript.svg",
      },
      {
        title: "github",
        icon: "/Portofolio/github.svg",
      },
      {
        title: "typescript",
        icon: "/Portofolio/typescript.svg",
      },
      {
        title: "react",
        icon: "/Portofolio/react.svg",
      },
      {
        title: "tailwind",
        icon: "/Portofolio/tailwind.svg",
      },
      {
        title: "redux",
        icon: "/Portofolio/redux.svg",
      },
      {
        title: "html",
        icon: "/Portofolio/html.svg",
      },
    ],
    title: "Teck Stack",
    desc: "the dev tools i know",
    path: "/skills",
    att: ["animate-move-right", "animate-move-left"],
  },
  {
    title: "Notebook",
    desc: "My thoughts , my Hobbies , things i do after hard work",
    path:"",
    img:[
      {
        title:"Games",
        icon:"🎮",
        position:{
          left:"20%",
          top:"5%",
        }
      },
      {
        title:"Fitness",
        icon:"🤾‍♀️",
        position:{
          left:"40%",
          top:"5%",
        }
      },
      {
        title:"Reading",
        icon:"📖",
        position:{
          left:"60%",
          top:"5%",
        }
      },
      {
        title:"Music",
        icon:"🎵",
        position:{
          left:"30%",
          top:"20%",
        }
      },
      {
        title:"Photography",
        icon:"🎥",
        position:{
          left:"10%",
          top:"40%",
        }
      },
    ]
  },
];


export  const TeckStack  = [
  {
    title: "Front-End",
    card: [
      {
        icon: "/Portofolio/typescript.svg",
        name: "Typescript",
        fam: "Language",
      },
      {
        icon: "/Portofolio/javascript.svg",
        name: "Javascript",
        fam: "Language",
      },
      {
        icon: "/Portofolio/react.svg",
        name: "React",
        fam: "Framework",
      },
      {
        icon: "/Portofolio/tailwind.svg",
        name: "Tailwind",
        fam: "CSS",
      },
      {
        icon: "/Portofolio/materialui.svg",
        name: "Material UI",
        fam: "CSS",
      },
      {
        icon: "/Portofolio/redux.svg",
        name: "Redux",
        fam: "State Manager",
      },
      {
        icon: "/Portofolio/framer-motion.svg",
        name: "Framer Motion",
        fam: "Animation",
      },
    ],
  },
  {
    title: "Back-End",
    card: [
      {
        icon: "/Portofolio/firebase.svg",
        name: "Firebase",
        fam: "Database & Auth",
      },
      {
        icon: "/Portofolio/github.svg",
        name: "Github",
        fam: "Version Control",
      },
      {
        icon:"/Portofolio/express.svg",
        name:"expressJs",
        fam:"back-end framework"
      },
      {
        icon:"/Portofolio/nodeJs.svg",
        name:"nodeJs",
        fam:"back-end language",
      },
      {
        icon:"/Portofolio/mysql.svg",
        name:"mySQL",
        fam:"Sgbd",
      }
    ],
  },
  {
    title: "Apps & Tools",
    card: [
      {
        icon: "/Portofolio/canva.svg",
        name: "Canva",
        fam: "Design",
      },
      {
        icon: "/Portofolio/discord.svg",
        name: "Discord",
        fam: "Communication",
      },
      {
        icon: "/Portofolio/chrome.svg",
        name: "Chrome",
        fam: "Browser",
      },
      {
        icon: "/Portofolio/vscode.svg",
        name: "VS Code",
        fam: "Editor",
      },
      {
        icon: "/Portofolio/spotify.svg",
        name: "Spotify",
        fam: "Music",
      },
      {
        icon: "/Portofolio/duolingo.svg",
        name: "Duolingo",
        fam: "Language Learning",
      },
      {
        icon: "/Portofolio/drive.svg",
        name: "Drive",
        fam: "Cloud Storage",
      },
      {
        icon: "/Portofolio/chatgpt.png",
        name: "ChatGPT",
        fam: "AI Assistant",
      },
      {
        icon: "/Portofolio/docs.svg",
        name: "Text Docs",
        fam: "Documentation",
      },
    ],
  },
]

export const MyProfile: ProfileProps[] = [
  {
    title: "WHO I AM",
    Text: "Hi 👋 I'm Adda Hadi, a dedicated computer science student at Ibn Khaldoun University in Algeria 🎓. I ranked among the top of my class during both my first and second years, reflecting my strong academic foundation. With over 2 years of experience in web development, I specialize in creating modern, responsive web applications.",
  },
  {
    title: "WHAT I DO",
    Text: " I'm a full-stack developer who enjoys bringing ideas to life through code. On the backend, I work with Node.js, Express.js, MySQL, and Firebase. On the frontend, I use TypeScript, JavaScript, React, and TailwindCSS to build fast, responsive user interfaces.Lately, I've been integrating AI into web applications to create smarter, more interactive experiences — from using AI-driven features to enhancing user engagement",
  },
  {
    title: "REACH ME",
    Text: "Feel free to reach out via e-mail, or follow me on Twitter. Want to see where I’ve worked? or Connect with me on LinkedIn.",
  },
];




