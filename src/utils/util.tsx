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

export const svgies = ["../public/aboutus.svg","../public/projectsus.svg","../public/contactus.svg","../public/techus.svg"]

export function getRandomInteger(N : number) {
  return Math.floor(Math.random() * (N + 1));
}



export const socialMedia = [
  {
    icon: "../public/githubLogo.png",
    path: "https://github.com/addahadi",
  },
  {
    icon: "../public/linkIn.png",
    path: "https://www.linkedin.com/in/adda-missoum",
  },

];


export const Circles = [1000,1200,1600,2200]


export const Works: WorksProps[] = [
  {
    title: "Dz-Podcast",
    desc: "Welcome to Pod_Dz, a cutting-edge podcast web app built with React and TypeScript. It’s designed to not only let you browse popular podcasts but also gives you the power to create your own podcasts using AI-generated images and text-to-speech technology! 🔥",
    img: "../public/podcast.png",
    path: "https://github.com/addahadi/podcast-website",
    icon: "../public/podcast-logo.svg",
    edge: "50px",
  },
  {
    title: "Travel-advisor",
    desc: "This travel advisor website helps users find nearby hotels, restaurants, and attractions. It shows a list of places on the left, with ratings and categories, and a map on the right with markers for each location. Simple and user-friendly for quick recommendations, making travel planning easy",
    img: "../public/mapApp.png",
    path: "https://github.com/addahadi/map_app",
    icon: "../public/mapicon.svg",
    edge:"80px"
  },
  {
    title: "Text-Docs",
    desc: "Text Docs is a simple and intuitive web application for managing text documents. It allows users to create, search, and delete documents with ease. The app features a dark-themed interface for a modern and visually appealing user experience. The application is fully responsive, ensuring a seamless experience across all devices, from desktops to mobile phones.",
    img: "../public/textEditor.png",
    path: "https://github.com/addahadi/TextEditor",
    icon: "../public/docs.svg",
    edge: "110px",
  },
  {
    title: "Workout-app",
    desc: "Welcome to [Your Website Name], your ultimate fitness companion! We provide users with daily workout routines tailored for each muscle group. Whether you're looking to build strength, improve endurance, or tone up, we've got you covered. Each exercise is paired with detailed descriptions and instructional videos to guide you through proper form and technique. Start your fitness journey",
    img: "../public/sport.png",
    path: "https://github.com/addahadi/gym_website",
    icon: "../public/sport-logo.svg",
    
  },
];


export const skill: KnowMe[] = [
  {
    img: "../public/imogi.png",
    title: "About me",
    desc: "who i am and what i do",
    path: "/about",
  },
  {
    img: [
      {
        title: "javascript",
        icon: "../public/javascript.svg",
      },
      {
        title: "github",
        icon: "../public/github.svg",
      },
      {
        title: "typescript",
        icon: "../public/typescript.svg",
      },
      {
        title: "react",
        icon: "../public/react.svg",
      },
      {
        title: "tailwind",
        icon: "../public/tailwind.svg",
      },
      {
        title: "redux",
        icon: "../public/redux.svg",
      },
      {
        title: "html",
        icon: "../public/html.svg",
      },
      {
        title: "javascript",
        icon: "../public/javascript.svg",
      },
      {
        title: "github",
        icon: "../public/github.svg",
      },
      {
        title: "typescript",
        icon: "../public/typescript.svg",
      },
      {
        title: "react",
        icon: "../public/react.svg",
      },
      {
        title: "tailwind",
        icon: "../public/tailwind.svg",
      },
      {
        title: "redux",
        icon: "../public/redux.svg",
      },
      {
        title: "html",
        icon: "../public/html.svg",
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


export  const TeckStack = [
  {
    title: "Web & Dev",
    card: [
      {
        icon: "../public/typescript.svg",
        name: "Typescript",
        fam: "Language",
      },
      {
        icon: "../public/javascript.svg",
        name: "Javascript",
        fam: "Language",
      },
      {
        icon: "../public/react.svg",
        name: "React",
        fam: "Framework",
      },
      {
        icon: "../public/tailwind.svg",
        name: "Tailwind",
        fam: "CSS",
      },
      {
        icon: "../public/materialui.svg",
        name: "Material ui",
        fam: "CSS",
      },
      {
        icon: "../public/redux.svg",
        name: "Redux",
        fam: "State Manager",
      },
      {
        icon: "../public/github.svg",
        name: "Github",
        fam: "Version Control",
      },
      {
        icon: "../public/canva.svg",
        name: "Canva",
        fam: "Design app",
      },
      {
        icon: "../public/framer-motion.svg",
        name: "Frame motion",
        fam: "Animation",
      },
      {
        icon: "../public/firebase.svg",
        name: "Firebase",
        fam: "Data Man",
      },
    ],
  },
  {
    title: "Apps",
    card: [
      {
        icon: "../public/discord.svg",
        name: "Discord",
        fam: "Communication",
      },
      {
        icon: "../public/chrome.svg",
        name: "Chrome",
        fam: "browser",
      },
      {
        icon: "../public/vscode.svg",
        name: "Vscode",
        fam: "editor",
      },

      {
        icon: "../public/spotify.svg",
        name: "Spotify",
        fam: "music",
      },

      {
        icon: "../public/duolingo.svg",
        name: "Duolingo",
        fam: "Language",
      },

      {
        icon: "../public/drive.svg",
        name: "Drive",
        fam: "data man",
      },

      {
        icon: "../public/chatgpt.png",
        name: "Chatgpt",
        fam: "Ai text",
      },

      {
        icon: "../public/docs.svg",
        name: "Text Docs",
        fam: "text editor",
      },
    ],
  },
];

export const MyProfile : ProfileProps[] = [
  {
    title: "WHO I AM",
    Text: "Hi 👋, I am  adda hadi a computer science student at Ibn Khaldoun University in Algeria 🎓, where I achieved a high distinction in my first year. I have over one year of professional experience in web development, during which I have honed my skills in building modern, responsive web applications",
  },
  {
    title: "WHAT I DO",
    Text: "With two years of invaluable experience in my role at Coders –– a web development group I co-founded with my friends during university, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time with Coders, I had the privilege of collaborating on projects for esteemed clients such as the , my university Ibn khaldoun , bab zouar university , bid3a club. It was an incredibly rewarding experience to develop applications that directly impact the lives of citizens.",
  },
  {
    title: "REACH ME",
    Text: "Feel free to reach out via e-mail, or follow me on Twitter. Want to see where I’ve worked? or Connect with me on LinkedIn.",
  },
];




