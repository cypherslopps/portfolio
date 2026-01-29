import {
  CodeIcon,
  BlockGameIcon,
  SmartPhone02Icon,
  LaptopIcon,
  ChatBotIcon,
  ZapIcon,
  RepeatIcon,
} from "@hugeicons/core-free-icons";
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
import tanstackIcon from "@/assets/icons/skills/react-query.svg";
import n8nIcon from "@/assets/icons/skills/n8n.svg";
import solidityIcon from "@/assets/icons/skills/solidity.svg";
import supabaseIcon from "@/assets/icons/skills/supabase.svg";
import tailwindcssIcon from "@/assets/icons/skills/tailwindcss.svg";
import typescriptIcon from "@/assets/icons/skills/typescript.svg";

// Projects
import SolanaHub from "@/assets/projects/solanahub.png";
import XDegen from "@/assets/projects/xdegen.png";
import SassLanding from "@/assets/projects/sass-landing.png";
import SolanaHunt from "@/assets/projects/solanahunt.png";
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
  },
];

export const projects: IProject[] = [
  {
    title: "SolanaHub",
    description:
      "A marketplace and crowdfunding platform for Solana startups, built to simplify tokenized fundraising and digital asset trading.",
    role: "Fullstack Engineer",
    contribution: [
      "Architected the backend with secure REST APIs, PostgreSQL schemas, Wallet connect auth and Supabase Database",
      "Built the full frontend flow: onboarding, marketplace interactions, wallet integration, and crowdfunding modules.",
      "Implemented CI/CD pipelines, automated deployment, and error monitoring.",
    ],
    image: SolanaHub,
    link: "https://solahub.online/",
    stacks: [
      "Reactjs/Typescript",
      "Nodejs/Express - Typescript",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Cloudinary",
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
    link: "https://solanahunt.com/",
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
    title: "zkMinter",
    description: "Compressed Solana tokens (cTokens) minter DApp",
    role: "Web3 Frontend Engineer",
    contribution: [
      "Built the UI and user flows for token creation and minting.",
      "Integrated Solana/web3js for blockchain interactions.",
      "Connected ZK light-protocol endpoints and managed signature validation.",
    ],
    image: zkminter,
    link: "https://zk-sol-minter.vercel.app/",
    stacks: [
      "NextJS",
      "TailwindCSS",
      "@solana/web3js",
      "ZK Light Protocol",
      "Supabase",
      "Pinata",
    ],
  },
  {
    title: "Ballot",
    description: "Solana Meme Project",
    role: "Web3 Frontend Engineer",
    image: ballot,
    link: "https://ballot-pink.vercel.app/",
    stacks: [
      "ReactJS/ViteJS",
      "TailwindCSS",
      "@solana/web3js",
      "GSAP",
      "Axios",
    ],
  },
  {
    title: "Sass Landing",
    description: "Animated aesthetic landing page for SASS Projects",
    role: "Frontend Engineer",
    image: SassLanding,
    link: "https://sass-landing-gilt.vercel.app/",
    stacks: ["NextJS", "Framer Motion", "Shadcn/ui", "TailwindCSS"],
  },
  {
    title: "Scraper",
    description:
      "Automated Web Scraper built using Nodejs/Express and Selenium WebDriver",
    role: "Backend Engineer",
    image: null,
    link: "https://github.com/cypherslopps/nodejs-scraper",
    stacks: ["NodeJS/Express", "Selenium WebDriver"],
  },
  {
    title: "Sharepond",
    description: "Real-time File Sharing App",
    role: "Frontend Engineer",
    image: sharepond,
    link: "https://sharepond.vercel.app/",
    stacks: [
      "ReactJS/ViteJS",
      "Supabase (RealTime Database and Storage)",
      "TailwindCSS",
    ],
  },
  {
    title: "CasinoBetil",
    description:
      "A betting platform built and maintained core user-facing features that support real-time interactions, internalization, and transactional flows",
    role: "Senior Frontend Engineer",
    image: chainpay,
    link: null,
    stacks: [
      "React",
      "TypeScript",
      "i18n",
      "Transactional State",
      "Tailwindcss",
      "Betting UX Patterns",
    ],
  },
  {
    title: "ChainPay",
    description: "Escrow DApp for Remote workers",
    role: "Software Engineer",
    image: chainpay,
    link: "https://chainpay-rho.vercel.app/",
    stacks: ["ReactJS/ViteJS", "Tailwindcss"],
  },
  // {
  //   title: "Astra",
  //   description:
  //     "Multichain Streaming DApp that incentivices both the Streamers and Artist",
  //   image: chainpay,
  //   link: "https://astra.vercel.app/",
  //   stacks: [
  //     "Nextjs",
  //     "Typescript",
  //     "Howler",
  //     "TailwindCSS",
  //     "Tanstack Query",
  //     "@solana/webjs",
  //     "shadcn/ui",
  //     "Motion",
  //     "Zod",
  //     "Redux Toolkit",
  //   ],
  // },
  {
    title: "SummarizerAI",
    description:
      "SummarizerAI summarizes lengthy texts into clear, concise, and accurate summaries, preserving key insights and essential information.",
    role: "Frontend Engineer (AI)",
    image: summarizerAI,
    link: "https://astra.vercel.app/",
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
  "https://docs.google.com/document/d/1d3B8PobcWBZL_Z6RKvEhCuJtpBzrIpkHbH-NfF8wMM4/edit?usp=sharing";
export const businessWhatsappLink = "https://wa.me/2348157483352";

export const skills = [
  {
    title: "ReactJS",
    Icon: reactIcon,
  },
  {
    title: "Nextjs",
    Icon: nextjsIcon,
  },
  {
    title: "Typescript",
    Icon: typescriptIcon,
  },
  {
    title: "n8n",
    Icon: n8nIcon,
  },
  {
    title: "Tanstack Query",
    Icon: tanstackIcon,
  },
  {
    title: "NodeJS",
    Icon: nodejsIcon,
  },
  {
    title: "React Native",
    Icon: reactNativeIcon,
  },
  {
    title: "Express",
    Icon: expressIcon,
  },
  {
    title: "NestJS",
    Icon: nestjsIcon,
  },
  {
    title: "CSS3",
    Icon: cSS3Icon,
  },
  {
    title: "TailwindCSS",
    Icon: tailwindcssIcon,
  },
  {
    title: "HTML5",
    Icon: html5Icon,
  },
  {
    title: "MongoDB",
    Icon: mongoDBIcon,
  },
  {
    title: "PostgreSQL",
    Icon: postgresqlIcon,
  },
  {
    title: "Git",
    Icon: gitIcon,
  },
  {
    title: "Github",
    Icon: githubIcon,
  },
  {
    title: "Prisma",
    Icon: prismaIcon,
  },
  {
    title: "Sanity",
    Icon: sanityIcon,
  },
  {
    title: "Redux",
    Icon: reduxIcon,
  },
  {
    title: "Supabase",
    Icon: supabaseIcon,
  },
  {
    title: "Solidity",
    Icon: solidityIcon,
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
    Icon: ZapIcon,
    title: "Agile Development",
    description:
      "Accelerate your project delivery with agile methodologies, using Jira or ClickUp for streamlined sprints and collaboration. I ensure rapid, high-quality software releases, adapting to your needs and keeping your business goals on track.",
  },
  {
    Icon: RepeatIcon,
    title: "n8n Automation & AI Workflows",
    description:
      "I build scalable automation systems using n8n and API-driven services to orchestrate complex workflows across multiple tools and platforms. My workflows are designed with retries, error handling, logging, and idempotency in mind; ensuring reliability even as volume and complexity increase.",
  },
];
