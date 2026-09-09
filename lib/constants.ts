import {
  CodeIcon,
  BlockGameIcon,
  SmartPhone02Icon,
  LaptopIcon,
  ChatBotIcon,
  RepeatIcon,
} from "@hugeicons/core-free-icons";
import Icons from "@/components/Icons";

// Assets
import { IProject, IService, ISocial } from "..";

// Skills
import cSS3Icon from "@/assets/icons/skills/css3.svg";
import gitIcon from "@/assets/icons/skills/git-plain.svg";
import githubIcon from "@/assets/icons/skills/github.svg";
import reactNativeIcon from "@/assets/icons/skills/react-native.svg";
import html5Icon from "@/assets/icons/skills/html5.svg";

// Cloud
import awsIcon from "@/assets/icons/skills/aws.svg";
import dockerIcon from "@/assets/icons/skills/docker.svg";

// Javascript Frameworks
import expressIcon from "@/assets/icons/skills/express.svg";
import nestjsIcon from "@/assets/icons/skills/nestjs.svg";
import nextjsIcon from "@/assets/icons/skills/nextjs.svg";
import nodejsIcon from "@/assets/icons/skills/nodejs.svg";
import gsapIcon from "@/assets/icons/skills/gsap.svg";
import web3jsIcon from "@/assets/icons/skills/web3js.svg";
import ethersIcon from "@/assets/icons/skills/ethers.svg";
import reactIcon from "@/assets/icons/skills/react.svg";
import reduxIcon from "@/assets/icons/skills/redux.svg";
import sanityIcon from "@/assets/icons/skills/sanity.svg";
import shadcnIcon from "@/assets/icons/skills/shadcn.svg";
import tanstackIcon from "@/assets/icons/skills/react-query.svg";
import tailwindcssIcon from "@/assets/icons/skills/tailwindcss.svg";
import typescriptIcon from "@/assets/icons/skills/typescript.svg";

// Backend
import mongoDBIcon from "@/assets/icons/skills/mongodb.svg";
import supabaseIcon from "@/assets/icons/skills/supabase.svg";
import postgresqlIcon from "@/assets/icons/skills/postgresql.svg";
import prismaIcon from "@/assets/icons/skills/prisma.svg";
import n8nIcon from "@/assets/icons/skills/n8n.svg";
import solidityIcon from "@/assets/icons/skills/solidity.svg";
import pythonIcon from "@/assets/icons/skills/python.svg";
import fastAPIIcon from "@/assets/icons/skills/fastapi.svg";
import redisIcon from "@/assets/icons/skills/redis.svg";

// Projects
import XDegen from "@/assets/projects/xdegen.png";
import SassLanding from "@/assets/projects/sass-landing.png";
import casinoBetil from "@/assets/projects/casino-betil.png";
import SolanaHunt from "@/assets/projects/solanahunt.png";
import summarizerAI from "@/assets/projects/summarizerai.png";

// Testimonials
import abasImage from "@/assets/users-testimonials/abas.jpeg";
import etienoImage from "@/assets/users-testimonials/etieno.jpeg";

export const contact = {
  mobileNumber: "08028456343",
  whatsapp: "2348157483352",
  region: "Uyo, Akwa Ibom - Nigeria",
  mail: "josephibok75@gmail.com",
  name: "Joseph Ibok",
};

export const socials: ISocial[] = [
  {
    title: "Github",
    link: "https://github.com/cypherslopps",
    Icon: Icons.github,
  },
  {
    title: "Twitter",
    link: "https://x.com/cypherslopps",
    Icon: Icons.x,
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/joseph-ibok",
    Icon: Icons.linkedIn,
  },
  {
    title: "WhatsApp",
    link: `https://wa.me/${contact.whatsapp}`,
    Icon: Icons.whatsapp,
  },
];

export const projects: IProject[] = [
  {
    title: "ClubOnline247",
    description:
      "ClubOnline247 is a digital nightlife streaming platform where independent artists can perform LIVE, promote their music, connect with fans, enter contests, and build a real community around their work.",
    role: "Backend Engineer",
    contribution: [
      "Developed a robust backend for a live audio/video streaming platform, enhancing user engagement for creators.",

      "Designed a real-time room system using WebSocket gateway, enabling seamless interactions in concurrent rooms.",

      "Implemented a comprehensive gift economy, facilitating transactions and creator payouts through Stripe Connect Express.",

      "Built the API ensuring scalability and reliability for high-traffic events.",
    ],
    image: XDegen,
    link: "app.clubonline247.com",
    stacks: [
      "Nest.js/Typescript",
      "Stripe",
      "Stripe Connect",
      "Livekit",
      "Socket.io",
      "Cloud Firestore",
      "Redis",
      "BullMQ",
    ],
  },
  {
    title: "SolanaHunt",
    description:
      "SolanaHunt is a discovery platform for the Solana ecosystem, designed to help developers, investors, and enthusiasts find, vote on, and showcase the most exciting Solana projects.",
    role: "Fullstack Engineer",
    contribution: [
      "Led development and ongoing maintenance of SolanaHunt, a community-driven platform for discovering and upvoting Solana projects, increasing user engagement by 30%.",
      "Refactored the Next.js/TypeScript frontend and Node.js/TypeScript backend, reducing page load times by 25% and improving overall developer experience.",
      "Integrated PrivyAuth for secure, wallet-based authentication, enabling frictionless Solana wallet sign-ins.",
      "Improved UI consistency, responsiveness, and application state management using TailwindCSS and Zustand to deliver a smoother browsing and voting experience.",
    ],
    image: SolanaHunt,
    link: null,
    stacks: [
      "Next.js/Typescript",
      "Framer Motion",
      "TailwindCSS",
      "Zustand",
      "PrivyAuth",
      "Node.js/Express - Typescript",
      "MongoDB",
    ],
  },
  {
    title: "XDegen",
    description:
      "XDegen is a decentralized learning and streaming platform for crypto and Web3 enthusiasts, designed specifically for “degens” who crave fast, interactive, and community-driven experiences",
    role: "Frontend Engineer",
    contribution: [
      "Built the academy creation and management flow using React Hook Form and Zod, integrating Pinata (IPFS) for file uploads and Solana smart contracts to enable wallet-based payouts.",
      "Implemented Livekit to support live video sessions and scheduling, improving real-time interaction and delivery of educational content.",
      "Integrated Dialect for real-time, token-gated broadcasting, enabling academies to send notifications to 1,000+ subscribed users daily with 98% delivery reliability.",
    ],
    image: XDegen,
    link: "https://xdegen.xyz/",
    stacks: [
      "Vite.js/Typescript",
      "TailwindCSS",
      "Pinata (IPFS)",
      "Dialect",
      "GetStream.io",
      "Zustand",
      "Supabase",
    ],
  },
  {
    title: "OneBeam",
    role: "Frontend Engineer",
    description: "Event and ticketing platform (early-stage build)",
    contribution: [
      "Built event ticket checkout flows",
      "Implemented event landing pages",
      "Developed key parts of the merchant dashboard",
      "Helped establish frontend structure and reusable UI patterns",
    ],
    stacks: [
      "React",
      "TypeScript",
      "Checkout Flows",
      "Dashboard UI",
      "Event Systems",
    ],
    image: null,
    link: null,
  },
  {
    title: "Tonbunnies",
    role: "Web3 Frontend / Game Engineer",
    description: "Shipped Web3 game with real users and revenue",
    contribution: [
      "Led frontend development of a Web3 game on the TON blockchain, integrating NFTs, token minting, and ownership verification into gameplay flows.",
      "Built a Telegram Mini App using TypeScript and React-based architecture to support seamless in-app game interactions.",
      "Integrated smart contract functions and GO-based REST APIs to enable secure in-game transactions and asset interactions.",
      "Researched and optimized TON SDK usage to reduce in-game transaction latency by 30% and improve overall player experience.",
      "Delivered frontend features that increased player retention by 25% across a user base of 10,000+ players.",
    ],
    stacks: [
      "React",
      "TypeScript",
      "2D Game UI Architecture",
      "Web3",
      "TON Smart Contract Integration",
      "State Management",
      "NFTs",
      "Tokens",
    ],
    image: null,
    link: null,
  },
  {
    title: "CasinoBetil",
    description:
      "A betting platform built and maintained core user-facing features that support real-time interactions, internalization, and transactional flows",
    role: "Senior Frontend Engineer",
    image: casinoBetil,
    link: null,
    contribution: [
      "Developed core frontend features for a sports betting platform, improving engagement for thousands of active users.",
      "Optimized page load times, resulting in significantly faster performance and reduced bounce rates.",
      "Implemented internationalization (English & Hebrew) for a broader audience reach.",
      "Built a responsive, intuitive betting interface for seamless user interactions across devices.",
    ],
    stacks: [
      "React",
      "TypeScript",
      "i18n",
      "Transactional State",
      "Tailwindcss",
      "Betting UX Patterns",
    ],
  },
];

export const side_quests = [
  {
    title: "Sass Landing",
    description: "Animated aesthetic landing page for SASS Projects",
    role: "Frontend Engineer",
    image: SassLanding,
    link: "https://sass-landing-gilt.vercel.app/",
    contribution: [
      "Created fluid scroll-triggered animations and micro-interactions using Framer Motion",
      "Implemented responsive design system with TailwindCSS",
    ],
    stacks: ["Next.js", "Framer Motion", "TailwindCSS"],
  },
  {
    title: "SummarizerAI",
    description:
      "Fast, privacy-focused text summarization tool powered by modern LLMs.",
    role: "Frontend Engineer (AI Integration)",
    image: summarizerAI,
    link: "https://astra.vercel.app/",
    contribution: [
      "Built clean, responsive React interface with real-time feedback during summarization",
      "Integrated DeepSeek-V3 via Nebius AI Studio API with streaming response support",
      "Implemented error handling, rate limiting, and toast notifications for smooth UX",
    ],
    stacks: [
      "Nextjs",
      "Nebius AI Studio (deepseek-ai/Deepseek-V3)",
      "Axios",
      "React Hot Toast",
      "Lucide React",
      "React-spinners",
    ],
  },
];

export const resumeLink =
  "https://drive.google.com/drive/u/1/folders/1N_CVMEw0ATbM64ycfYSBiYGyUZpzUR_k";
export const businessWhatsappLink = "https://wa.me/2348157483352";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { title: "ReactJS", Icon: reactIcon },
      { title: "Next.js", Icon: nextjsIcon },
      { title: "TypeScript", Icon: typescriptIcon },
      { title: "GSAP", Icon: gsapIcon },
      { title: "TailwindCSS", Icon: tailwindcssIcon },
      { title: "Shadcn UI", Icon: shadcnIcon },
      { title: "Web3.js", Icon: web3jsIcon },
      { title: "Ethers.js", Icon: ethersIcon },
      { title: "HTML5", Icon: html5Icon },
      { title: "CSS3", Icon: cSS3Icon },
      { title: "TanStack Query", Icon: tanstackIcon },
      { title: "Redux", Icon: reduxIcon },
      { title: "Redux Toolkit", Icon: reduxIcon },
    ],
  },
  {
    title: "Backend",
    skills: [
      { title: "Node.js", Icon: nodejsIcon },
      { title: "Express", Icon: expressIcon },
      { title: "NestJS", Icon: nestjsIcon },
      { title: "Python", Icon: pythonIcon },
      { title: "FastAPI", Icon: fastAPIIcon },
    ],
  },
  {
    title: "Mobile",
    skills: [{ title: "React Native", Icon: reactNativeIcon }],
  },
  {
    title: "Database & ORM",
    skills: [
      { title: "PostgreSQL", Icon: postgresqlIcon },
      { title: "MongoDB", Icon: mongoDBIcon },
      { title: "Redis", Icon: redisIcon },
      { title: "Prisma", Icon: prismaIcon },
      { title: "Supabase", Icon: supabaseIcon },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { title: "AWS", Icon: awsIcon },
      { title: "Docker", Icon: dockerIcon },
      { title: "Git", Icon: gitIcon },
      { title: "GitHub", Icon: githubIcon },
    ],
  },
  {
    title: "CMS & Content",
    skills: [{ title: "Sanity", Icon: sanityIcon }],
  },
  {
    title: "Automation",
    skills: [{ title: "n8n", Icon: n8nIcon }],
  },
  {
    title: "Blockchain",
    skills: [{ title: "Solidity", Icon: solidityIcon }],
  },
];

export const services: IService[] = [
  {
    Icon: CodeIcon,
    title: "API Development and Integration",
    description:
      "I design and build scalable, production-grade systems with a focus on clean architecture, reliability, and growth-readiness. This includes API-first backend design, asynchronous processing, background jobs, caching strategies, and automation-friendly workflows that support increasing load without system fragility.",
  },
  {
    Icon: BlockGameIcon,
    title: "Blockchain & Smart Contract Development",
    description:
      "I deliver dApps, blockchain solutions and integrations, that suits your business needs.",
  },
  {
    Icon: SmartPhone02Icon,
    title: "Mobile Applications",
    description:
      "I build cross-platform mobile apps with React Native to captivate your audience. I deliver intuitive apps, enhancing user retention and functionality on iOS and Android.",
  },
  {
    Icon: LaptopIcon,
    title: "Frontend Development",
    description:
      "Crafting scalable <strong>Web2</strong> and <strong>Web3</strong> apps that suits your business needs. I optimize for performance and security with server-side rendering and authentication, ensuring seamless, engaging interfaces for your users.",
  },
  {
    Icon: ChatBotIcon,
    title: "Bots",
    description:
      "I build automation-driven bots for Discord, Telegram, and internal tooling that trigger workflows, process data, and integrate with external systems. These bots go beyond messaging—acting as operational tools for alerts, moderation, data collection, and automated actions across platforms.",
  },
  {
    Icon: RepeatIcon,
    title: "n8n Automation & AI Workflows",
    description:
      "I build scalable automation systems using n8n and API-driven services to orchestrate complex workflows across multiple tools and platforms. My workflows are designed with retries, error handling, logging, and idempotency in mind; ensuring reliability even as volume and complexity increase.",
  },
];
