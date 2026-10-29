import {
  CodeIcon,
  BlockGameIcon,
  LaptopIcon,
  ServerStackIcon
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
import Clubonline247 from "@/assets/projects/clubonline.png";
import XDegen from "@/assets/projects/xdegen.png";
import SassLanding from "@/assets/projects/sass-landing.png";
import casinoBetil from "@/assets/projects/casino-betil.png";
import SolanaHunt from "@/assets/projects/solanahunt.png";
import summarizerAI from "@/assets/projects/summarizerai.png";
import SolaHub from "@/assets/projects/solanahub.png";
import ZkMinter from "@/assets/projects/zkminter.png";
import Ballot from "@/assets/projects/ballot.png";

export const contact = {
  mobileNumber: "08028456343",
  whatsapp: "2348157483352",
  region: "Uyo, Akwa Ibom - Nigeria",
  mail: "josephibok75@gmail.com",
  name: "Joseph Ibok",
  linkedin: "https://linkedin.com/in/joseph-ibok"
};

export const socials: ISocial[] = [
  {
    title: "Github",
    link: "https://github.com/solidDev434",
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
    quote:
      "Joseph is a meticulous and very thorough individual. \n\n I worked with him on a project, and I was really impressed by the level of attention he paid to even the minutest of details. \n\n I highly recommend him because he is good at what he does and most importantly, he is disciplined.",
    name: "Mfonobong Nyoho",
    role: "Project Manager, Clubonline247",
  },
  {
    quote:
      "Joseph is an exceptional senior front-end developer. His adeptness at handling complex tasks, learning from every challenge, and solving tough problems, combined with excellent communication, makes him an absolute pleasure to work with.",
    name: "Abasifreke James",
    role: "Software Engineer",
  }
];

export const projects: IProject[] = [
  {
    title: "ClubOnline247",
    period: "Jan 2026 – Jun 2026",
    description:
      "A live nightlife streaming platform where venues and creators perform live, engage fans, and receive payouts. The core challenge was moving money safely without slowing down the live experience.",
    role: "Backend Engineer",
    contribution: [
      "Built a complete Stripe Connect payout system: secure bank account linking, payout requests, and mandatory admin review before any funds are released.",
      "Introduced background job processing (BullMQ + Redis) so payouts and notifications run reliably without impacting live streaming performance during high-traffic events.",
      "Designed real-time room interactions with WebSocket support for concurrent live sessions.",
      "Used Redis for session management and caching to keep returning users fast and authenticated under load.",
    ],
    image: Clubonline247,
    link: "app.clubonline247.com",
    stacks: [
      "Nest.js / TypeScript",
      "Stripe Connect",
      "BullMQ",
      "Redis",
      "Livekit",
      "Socket.io",
      "Cloud Firestore",
    ],
  },
  {
    title: "SolanaHunt",
    period: "Jul 2025 - Oct 2025",
    description:
      "A discovery platform for the Solana ecosystem that helps developers and enthusiasts find, vote on, and showcase projects. Focused on performance, consistent state, and frictionless wallet authentication.",
    role: "Fullstack Engineer",
    contribution: [
      "Reworked data fetching, code splitting and state management to speed up the app.",
      "Centralized application state to eliminate flickering and stale data across the product.",
      "Redesigned key interfaces to make discovery and voting easier.",
      "Integrated PrivyAuth for secure, passwordless crypto-wallet sign-in.",
    ],
    image: SolanaHunt,
    link: null,
    stacks: [
      "Next.js / TypeScript",
      "Zustand",
      "Redux Toolkit",
      "TailwindCSS",
      "Framer Motion",
      "PrivyAuth",
      "Node.js / TypeScript",
      "MongoDB",
    ],
  },
  
  {
    title: "CasinoBetil",
    period: "Jun 2024 - Sep 2024",
    description:
      "A real-money sports betting platform where speed and correctness directly affect user trust and retention.",
    role: "Senior Frontend Engineer",
    contribution: [
      "Built core betting interface features used by thousands of active users, prioritizing speed and accuracy under high-stakes conditions.",
      "Optimized page loads and reduced drop-off during time-sensitive betting windows.",
      "Implemented full English and Hebrew internationalization to support regulated markets.",
      "Delivered a responsive, consistent betting experience across devices.",
    ],
    image: casinoBetil,
    link: null,
    stacks: [
      "React (Vite) / TypeScript",
      "Zustand",
      "Redux Toolkit",
      "TailwindCSS",
      "i18next",
    ],
  },
  {
    title: "TonBunnies",
    period: "May 2024 - Sep 2024",
    description:
      "A Web3 game on the TON blockchain with NFT collectibles, minting, ownership verification, and a Telegram Mini App.",
    role: "Web3 Frontend Engineer",
    contribution: [
      "Led the frontend for viewing, minting, and verifying ownership of digital collectibles.",
      "Built a Telegram Mini App integrating external APIs and blockchain functions.",
      "Tuned TON SDK usage to cut transaction wait times.",
      "Shipped to a player base of 10,000+.",
    ],
    image: null,
    link: null,
    stacks: [
      "Next.js / TypeScript",
      "TON SDK",
      "Telegram Mini App SDK",
      "TailwindCSS",
      "JavaScript Canvas",
    ],
  },
  { 
    title: "SolaHub", 
    period: "May 2025 - Jun 2025", 
    description: "Community hub for Solana projects: listings, profiles and media uploads, with a typed Express API.", 
    role: "Fullstack Engineer", 
    image: SolaHub, 
    link: "https://solahub.online/", 
    stacks: ["React", "Node.js / Express", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Cloudinary"] 
  },
  {
    title: "XDegen",
    period: "May 2025 – Jun 2026",
    description:
      "A decentralized learning and streaming platform for crypto and Web3 users. Built multi-step flows, live sessions, and reliable real-time notifications.",
    role: "Frontend / Fullstack Engineer",
    contribution: [
      "Built multi-step academy/course creation flow with robust validation using React Hook Form and Zod.",
      "Integrated Pinata (IPFS) for file uploads and Solana smart contracts for wallet-based payouts.",
      "Implemented Livekit for live video sessions and scheduling.",
      "Integrated Dialect for real-time, token-gated notifications reaching 1,000+ daily users.",
    ],
    image: XDegen,
    link: "https://xdegen.xyz/",
    stacks: [
      "React (Vite) / TypeScript",
      "React Hook Form",
      "Zod",
      "TailwindCSS",
      "Pinata (IPFS)",
      "Dialect",
      "GetStream.io",
      "Zustand",
      "Supabase",
    ],
  },
  // {
  //   title: "OneBeam",
  //   period: "Sep 2025 – Nov 2025",
  //   description:
  //     "Early-stage event and ticketing platform focused on clear organizer and attendee experiences.",
  //   role: "Frontend Engineer (Contract)",
  //   contribution: [
  //     "Built event creation flows and ticket template features.",
  //     "Implemented event landing pages and key parts of the merchant dashboard.",
  //     "Helped establish frontend structure and reusable UI patterns.",
  //   ],
  //   image: null,
  //   link: null,
  //   stacks: ["React", "TypeScript", "TailwindCSS"],
  // },
];

export const side_quests: IProject[] = [
  {
    title: "Transaction Risk API",
    description:
      "A production-grade payment backend that moves funds between wallets while surviving network retries, concurrent transfers, and partial failures — without losing, duplicating, or double-spending money.",
    role: "Backend Engineer",
    period: "2026 – present",
    contribution: [
      "Designed a reservation-based wallet system (hold → confirm/release) instead of direct balance edits.",
      "Implemented idempotency keys, database-level locking with consistent lock ordering, and an explicit state machine with full audit trail.",
      "Built asynchronous settlement using Celery + transactional outbox pattern with exponential backoff retries.",
      "Fully containerized the application with Docker for consistent local and deployed environments.",
    ],
    stacks: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Docker",
      "SQLAlchemy",
    ],
    image: null,
    link: "https://github.com/solidDev434/transaction-risk-api",
  },
  {
    title: "Sass Landing",
    period: "2024",
    description: "Animated aesthetic landing page for SaaS projects.",
    role: "Frontend Engineer",
    image: SassLanding,
    link: "https://sass-landing-gilt.vercel.app/",
    contribution: [
      "Created fluid scroll-triggered animations and micro-interactions using Framer Motion.",
      "Implemented a responsive design system with TailwindCSS.",
    ],
    stacks: ["Next.js", "Framer Motion", "TailwindCSS"],
  },
  {
    title: "SummarizerAI",
    period: "2025",
    description:
      "Fast, privacy-focused text summarization tool powered by modern LLMs.",
    role: "Frontend Engineer (AI Integration)",
    image: summarizerAI,
    link: "https://astra.vercel.app/",
    contribution: [
      "Built a clean, responsive React interface with real-time feedback during summarization.",
      "Integrated DeepSeek-V3 via Nebius AI Studio API with streaming response support.",
      "Implemented error handling, rate limiting, and toast notifications for smooth UX.",
    ],
    stacks: [
      "Next.js",
      "Nebius AI Studio (DeepSeek-V3)",
      "Axios",
      "React Hot Toast",
      "Lucide React",
    ],
  },
  { 
    title: "zkMinter", 
    period: "2025", 
    description: "Mint compressed tokens on Solana using ZK Light Protocol, with metadata pinned to IPFS.", 
    role: "Frontend Engineer", 
    image: ZkMinter, 
    link: "https://zk-sol-minter.vercel.app/", 
    stacks: ["Next.js", "Solana Web3.js", "ZK Light Protocol", "Supabase", "Pinata"] },
  { 
    title: "Ballot", 
    period: "2025", 
    description: "On-chain voting app on Solana: create polls, connect a wallet, vote with animated results.", 
    role: "Frontend Engineer", 
    image: Ballot, 
    link: "https://ballot-pink.vercel.app/", 
    stacks: ["React (Vite)", "Solana Web3.js", "GSAP", "TailwindCSS"] },
  { 
    title: "Scraper", 
    period: "2024", 
    description: "Headless Selenium scraper with a small Express API for scheduled data pulls.", 
    role: "Backend Engineer", 
    image: null, 
    link: "https://github.com/cypherslopps/nodejs-scraper", 
    stacks: ["Node.js / Express", "Selenium WebDriver"] },
];

export const resumeLink =
  "https://drive.google.com/drive/u/1/folders/1N_CVMEw0ATbM64ycfYSBiYGyUZpzUR_k";
export const businessWhatsappLink = "https://wa.me/2348157483352";
export const businessMail = "mailto:josephibok75@gmail.com";

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
    title: "Backend & APIs",
    description:
      "Production APIs, background jobs and data flows that stay correct under load and failure.",
  },
  {
    Icon: LaptopIcon,
    title: "Frontend & Mobile",
    description:
      "Fast, consistent web and React Native apps with validated flows that users actually finish.",
  },
  {
    Icon: BlockGameIcon,
    title: "Payments & Web3",
    description:
      "Payouts, wallets and on-chain features where money has to move exactly once.",
  },
  {
    Icon: ServerStackIcon,
    title: "DevOps & Reliability",
    description:
      "CI/CD pipelines, containerized deployments and monitoring that keep releases smooth and issues visible.",
  },
];
