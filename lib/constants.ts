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
import Clubonline247 from "@/assets/projects/clubonline.png";
import XDegen from "@/assets/projects/xdegen.png";
import SassLanding from "@/assets/projects/sass-landing.png";
import casinoBetil from "@/assets/projects/casino-betil.png";
import SolanaHunt from "@/assets/projects/solanahunt.png";
import summarizerAI from "@/assets/projects/summarizerai.png";

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
    description:
      "A discovery platform for the Solana ecosystem that helps developers and enthusiasts find, vote on, and showcase projects. Focused on performance, consistent state, and frictionless wallet authentication.",
    role: "Fullstack Engineer",
    contribution: [
      "Improved application performance by 25% through optimized data fetching, code splitting, and cleaner state management.",
      "Centralized application state to eliminate flickering and stale data across the product.",
      "Redesigned key interfaces and contributed to a 30% increase in user engagement.",
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
    title: "XDegen",
    description:
      "A decentralized learning and streaming platform for crypto and Web3 users. Built multi-step flows, live sessions, and reliable real-time notifications.",
    role: "Frontend / Fullstack Engineer",
    contribution: [
      "Built multi-step academy/course creation flow with robust validation using React Hook Form and Zod.",
      "Integrated Pinata (IPFS) for file uploads and Solana smart contracts for wallet-based payouts.",
      "Implemented Livekit for live video sessions and scheduling.",
      "Integrated Dialect for real-time, token-gated notifications reaching 1,000+ daily users with 98% delivery reliability.",
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
  {
    title: "CasinoBetil",
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
    description:
      "A Web3 game on the TON blockchain with NFT collectibles, minting, ownership verification, and a Telegram Mini App.",
    role: "Web3 Frontend Engineer",
    contribution: [
      "Led the frontend for viewing, minting, and verifying ownership of digital collectibles.",
      "Built a Telegram Mini App integrating external APIs and blockchain functions.",
      "Optimized TON SDK usage to reduce transaction wait times by 30%.",
      "Improved player retention by 25% across a user base of 10,000+ players and contributed to $15k+ project income.",
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
    title: "OneBeam",
    description:
      "Early-stage event and ticketing platform focused on clear organizer and attendee experiences.",
    role: "Frontend Engineer",
    contribution: [
      "Built event creation flows and ticket template features.",
      "Implemented event landing pages and key parts of the merchant dashboard.",
      "Helped establish frontend structure and reusable UI patterns.",
    ],
    image: null,
    link: null,
    stacks: ["React", "TypeScript", "TailwindCSS"],
  },
];

export const side_quests = [
  {
    title: "Transaction Risk API",
    description:
      "A production-grade payment backend that moves funds between wallets while surviving network retries, concurrent transfers, and partial failures — without losing, duplicating, or double-spending money.",
    role: "Backend Engineer (Personal Project)",
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
    title: "API Development & Backend Systems",
    description:
      "I design and build production-grade APIs and backend systems focused on reliability, clean architecture, and growth. This includes asynchronous processing, background jobs, caching, and workflows that stay correct under load and failure.",
  },
  {
    Icon: BlockGameIcon,
    title: "Blockchain & Smart Contract Integrations",
    description:
      "I build and integrate dApps, wallet authentication, and on-chain features that fit real product needs — from ownership verification to payout flows.",
  },
  {
    Icon: SmartPhone02Icon,
    title: "Mobile Applications",
    description:
      "I build cross-platform mobile apps with React Native, focusing on clear UX, reliable performance, and features that keep users engaged on both iOS and Android.",
  },
  {
    Icon: LaptopIcon,
    title: "Frontend Development",
    description:
      "I craft fast, consistent Web2 and Web3 interfaces. I focus on performance, state consistency, validated multi-step flows, and removing friction so users actually stay and convert.",
  },
  {
    Icon: ChatBotIcon,
    title: "Bots & Operational Tools",
    description:
      "I build automation-driven bots for Discord, Telegram, and internal tooling that trigger workflows, process data, and integrate with external systems — acting as reliable operational tools rather than simple messaging bots.",
  },
  {
    Icon: RepeatIcon,
    title: "n8n Automation & AI Workflows",
    description:
      "I design scalable automation systems with n8n and API-driven services. Workflows include retries, error handling, logging, and idempotency so they remain reliable as volume and complexity grow.",
  },
];
