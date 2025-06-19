import Icons from "@/components/Icons";

// Assets
import { IProject, IService, ISocial } from "..";

// Skills
import mongoDBIcon from "@/assets/icons/skills/mongodb.svg";
import cSS3Icon from "@/assets/icons/skills/css3.svg";
import gitIcon from "@/assets/icons/skills/git-plain.svg";
import githubIcon from "@/assets/icons/skills/github.svg";
import reactNativeIcon from "@/assets/icons/skills/react-native.svg";
import html5Icon from "@/assets/icons/skills/html5.svg";
import expressIcon from "@/assets/icons/skills/express.svg";
import nestjsIcon from "@/assets/icons/skills/nestjs.svg";
import nextjsIcon from "@/assets/icons/skills/nextjs.svg";
import nodejsIcon from "@/assets/icons/skills/nodejs.svg";
import postgresqlIcon from "@/assets/icons/skills/postgresql.svg";
import prismaIcon from "@/assets/icons/skills/prisma.svg";
import reactIcon from "@/assets/icons/skills/react.svg";
import reduxIcon from "@/assets/icons/skills/redux.svg";
import sanityIcon from "@/assets/icons/skills/sanity.svg";
import solidityIcon from "@/assets/icons/skills/solidity.svg";
import supabaseIcon from "@/assets/icons/skills/supabase.svg";
import tailwindcssIcon from "@/assets/icons/skills/tailwindcss.svg";
import typescriptIcon from "@/assets/icons/skills/typescript.svg";

// Projects
import SolanaHub from "@/assets/projects/solanahub.png";
import SassLanding from "@/assets/projects/sass-landing.png";
import zkminter from "@/assets/projects/zkminter.png";
import ballot from "@/assets/projects/ballot.png";
import chainpay from "@/assets/projects/chain-pay.png";
import sharepond from "@/assets/projects/sharepond.png";
import summarizerAI from "@/assets/projects/summarizerai.png";

// Testimonials
import abasImage from "@/assets/users-testimonials/abas.jpeg";
import etienoImage from "@/assets/users-testimonials/etieno.jpeg";

export const contact = {
    mobileNumber: "08028456343",
    whatsapp: "2348157483352",
    region: "Uyo, Akwa Ibom - Nigeria",
    mail: "josephibok75@gmail.com",
    name: "Joseph Ibok"
};

export const socials: ISocial[] = [
  {
    title: "Github",
    link: "https://github.com/cypherslopps",
    Icon: Icons.github
  },
  {
    title: "Twitter",
    link: "https://x.com/cypherslopps",
    Icon: Icons.x
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/joseph-ibok",
    Icon: Icons.linkedIn
  },
  {
    title: "WhatsApp",
    link: `https://wa.me/${contact.whatsapp}`,
    Icon: Icons.whatsapp
  }
]

export const testimonials = [
    {
      id: 1,
      name: "Abasifreke James",
      role: "Software Developer | .NET | Kotlin | Python | Android | ASP.NET",
      image: abasImage,
      content:
        "Joseph is an exceptional senior front-end developer. His track record of delivering sophisticated features across web2 and web3 with incredible skill and efficiency is truly impressive. His adeptness at handling complex tasks, learning from every challenge, and solving tough problems, combined with excellent communication, makes him an absolute pleasure to work with. His expertise and unwavering dedication have made a significant impact, and I have complete confidence in his abilities. I eagerly anticipate future collaborations with him.",
    },
    {
      id: 2,
      name: "Etieno Ekanem",
      role: "Founder of AspectDigita || Product Designer and Brand Strategist",
      image: etienoImage,
      content:
        "I had the pleasure of working one-on-one with Joseph Ibok (Jojo), and through working with him, I learned the importance of building knowledge. As a product Designer, I will say that he is the best software engineer to work with; he has patience and the ability to drive passion. He also has a wide range of knowledge on several other topics, both tech-related and non-tech-related. He delivers on time.",
    }
]

export const projects: IProject[] = [
  {
    title: 'SolanaHub', 
    description: "Solana Markerplace and CrowdFunding DApp for Startups",
    image: SolanaHub,
    link: "https://solahub.online/",
    stacks: [
      "Reactjs/Typescript",
      "Nodejs/Express - Typescript",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Cloudinary"
    ]
  },
  {
    title: 'Sass Landing', 
    description: "Animated aesthetic landing page for SASS Projects",
    image: SassLanding,
    link: 'https://sass-landing-gilt.vercel.app/',
    stacks: [
      "NextJS",
      "Framer Motion",
      "Shadcn/ui",
      "TailwindCSS"
    ]
  },
  {
    title: 'zkMinter', 
    description: "Compressed Solana tokens (cTokens) minter DApp",
    image: zkminter,
    link: 'https://zk-sol-minter.vercel.app/',
    stacks: [
      "NextJS",
      "TailwindCSS",
      "@solana/web3js",
      "ZK Light Protocol",
      "Supabase",
      "Pinata"
    ]
  },
  {
    title: 'Ballot', 
    description: "Solana Meme Project",
    image: ballot,
    link: 'https://ballot-pink.vercel.app/',
    stacks: [
      "ReactJS/ViteJS",
      "TailwindCSS",
      "@solana/web3js",
      "GSAP",
      "Axios"
    ]
  },
  {
    title: 'Scraper', 
    description: "Automated Web Scraper built using Nodejs/Express and Selenium WebDriver",
    image: null,
    link: 'https://github.com/cypherslopps/nodejs-scraper',
    stacks: [
      "NodeJS/Express",
      "Selenium WebDriver"
    ]
  },
  {
    title: 'Sharepond', 
    description: "Real-time File Sharing App",
    image: sharepond,
    link: 'https://sharepond.vercel.app/',
    stacks: [
      "ReactJS/ViteJS",
      "Supabase (RealTime Database and Storage)",
      "TailwindCSS"
    ]
  },
  {
    title: 'ChainPay', 
    description: "Escrow DApp for Remote workers",
    image: chainpay,
    link: 'https://chainpay-rho.vercel.app/',
    stacks: [
      "ReactJS/ViteJS",
      "Tailwindcss"
    ]
  },  
  {
    title: 'Astra', 
    description: "Multichain Streaming DApp that incentivices both the Streamers and Artist",
    image: chainpay,
    link: 'https://astra.vercel.app/',
    stacks: [
      "Nextjs",
      "Typescript",
      "Howler",
      "TailwindCSS",
      "Tanstack Query",
      "@solana/webjs",
      "shadcn/ui",
      "Motion",
      "Zod",
      "Redux Toolkit"
    ]
  },  
  {
    title: 'SummarizerAI', 
    description: "SummarizerAI summarizes lengthy texts into clear, concise, and accurate summaries, preserving key insights and essential information.",  
    image: summarizerAI,
    link: 'https://astra.vercel.app/',
    stacks: [
      "Nextjs",
      "Nebius AI Studio (deepseek-ai/Deepseek-V3)",
      "Axios",
      "React Hot Toast",
      "Lucide React",
      "React-spinners"
    ]
  },
];

export const resumeLink = "https://docs.google.com/document/d/1d3B8PobcWBZL_Z6RKvEhCuJtpBzrIpkHbH-NfF8wMM4/edit?usp=sharing";
export const businessWhatsappLink = "https://wa.me/2348157483352";

export const skills = [
  {
    title: "ReactJS",
    Icon: reactIcon
  },
  {
    title: "Nextjs",
    Icon: nextjsIcon
  },
  {
    title: "Typescript",
    Icon: typescriptIcon
  },
  {
    title: "NodeJS",
    Icon: nodejsIcon
  },
  {
    title: "React Native",
    Icon: reactNativeIcon
  },
  {
    title: "Express",
    Icon: expressIcon
  },
  {
    title: "NestJS",
    Icon: nestjsIcon
  },
  {
    title: "CSS3",
    Icon: cSS3Icon
  },
  {
    title: "TailwindCSS",
    Icon: tailwindcssIcon
  },
  {
    title: "HTML5",
    Icon: html5Icon
  },
  {
    title: "MongoDB",
    Icon: mongoDBIcon
  },
  {
    title: "PostgreSQL",
    Icon: postgresqlIcon
  },
  {
    title: "Git",
    Icon: gitIcon
  },
  {
    title: "Github",
    Icon: githubIcon
  },
  {
    title: "Prisma",
    Icon: prismaIcon
  },
  {
    title: "Sanity",
    Icon: sanityIcon
  },
  {
    title: "Redux",
    Icon: reduxIcon
  },
  {
    title: "Supabase",
    Icon: supabaseIcon
  },
  {
    title: "Solidity",
    Icon: solidityIcon
  }
];

export const services: IService[] = [
  {
    title: "API Development and Integration",
    description: "Designing and building robust, scalable APIs to power seamless communication between systems, with proper documentations, ensuring high performance, security, and easy integration for your web and mobile platforms."
  },
  {
    title: "Blockchain & Smart Contract Development",
    description: "I deliver dApps, blockchain solutions and integrations, that suits your business needs."
  },
  {
    title: "Mobile Applications",
    description: "I build cross-platform mobile apps with React Native to captivate your audience. I deliver intuitive apps, enhancing user retention and functionality on iOS and Android."
  },
  {
    title: "Frontend Development",
    description: "Crafting scalable <strong>Web2</strong> and <strong>Web3</strong> apps that suits your business needs. I optimize for performance and security with server-side rendering and authentication, ensuring seamless, engaging interfaces for your users.",
  },
  {
    title: "Bots",
    description: "Automate tasks and boost engagement with AI-powered Discord and Telegram bots built using Node.js. I create tailored bots for community interaction and data processing, saving time and enhancing your operational efficiency."
  },
  {
    title: "Agile Development",
    description: "Accelerate your project delivery with agile methodologies, using Jira or ClickUp for streamlined sprints and collaboration. I ensure rapid, high-quality software releases, adapting to your needs and keeping your business goals on track."
  }
]