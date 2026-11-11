"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { scrollToSection } from "@/lib/scrollTo";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight03FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { projects, side_quests } from "@/lib/constants";
import SectionHeader from "../SectionHeader";
import { cn } from "@/lib/utils";
import { IProject } from "@/index";

const tabs = ["Clients", "Personal"] as const;
type Tab = (typeof tabs)[number];


const initials = (title: string) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const Thumb = ({ project }: { project: IProject }) =>
  project.image ? (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover/project:scale-[1.04]"
      />
    </div>
  ) : (
    <div className="thumb-fallback flex aspect-[16/10] items-center justify-center border-b border-border">
      <span className="font-display text-6xl italic text-primary/80">
        {initials(project.title)}
      </span>
    </div>
  );

const ProjectCard = ({
  project,
  index,
  reduced,
}: {
  project: IProject;
  index: number;
  reduced: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = !!project.contribution?.length;
  const open = () =>
    project.link ? window.open(project.link, "_blank", "noopener") : null;

  return (
    <motion.article
      onClick={open}
      className={cn(
        "reveal-card group/project flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-[border-color,transform] duration-300",
        project.link &&
          "cursor-pointer hover:-translate-y-1 hover:border-primary/45",
      )}
    >
      <Thumb project={project} />

      <div className="flex flex-1 flex-col gap-y-4 p-5 sm:p-6">
        <header className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="transition-colors hover:text-primary"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="text-sm italic text-muted-foreground">
              {project.role}
              {project.period && (
                <span className="not-italic"> · {project.period}</span>
              )}
            </p>
          </div>

          {project.link && (
            <span
              aria-hidden
              className="mt-1 shrink-0 rounded-md border border-border p-1.5 text-muted-foreground transition-colors duration-300 group-hover/project:border-primary/45 group-hover/project:text-primary"
            >
              <HugeiconsIcon icon={ArrowUpRight03FreeIcons} className="size-4" />
            </span>
          )}
        </header>

        {project.description && (
          <p className={cn("text-[15px] leading-relaxed text-muted-foreground", !expanded && "line-clamp-3")}>
            {project.description}
          </p>
        )}

        {hasDetails && expanded ? (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              What I built
            </h4>
            <ul className="list-disc space-y-1.5 pl-4 marker:text-primary/60">
              {project.contribution!.map((c) => (
                <li
                  key={c}
                  className="text-sm leading-relaxed text-foreground/85"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.stacks?.map((stack) => (
            <span
              key={stack}
              className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
            >
              {stack}
            </span>
          ))}
        </div>
        {(hasDetails || (project.description?.length ?? 0) > 140) && (
          <button
            type="button"
            aria-expanded={expanded}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((v) => !v);
            }}
            className="w-max text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            {expanded ? "Show less" : "What I built →"}
          </button>
        )}
      </div>
    </motion.article>
  );
};

const INITIAL = 4;

const Projects = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Clients");
  const reduced = !!useReducedMotion();
  const [showAll, setShowAll] = useState(false);
  const gridRef = useScrollReveal<HTMLDivElement>([activeTab, showAll]);

  const displayedProjects = activeTab === "Clients" ? projects : side_quests;

  return (
    <section id="projects" className="wrapper space-y-10 pb-16 lg:pt-10">
      <div>
        <SectionHeader headline="Real-World Results" title="My Projects" />

        {/* Tabs */}
        <div className="mt-10 flex justify-center sm:mt-14">
          <div
            role="tablist"
            aria-label="Project categories"
            className="inline-flex rounded-full border border-border bg-card p-1"
          >
            {tabs.map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setActiveTab(tab);
                    setShowAll(false);
                  }}
                  className={cn(
                    "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
                    active
                      ? "text-brand-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="project-tab-pill"
                      className="absolute inset-0 rounded-full bg-brand"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        key={activeTab}
        ref={gridRef}
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6"
      >
        {(showAll ? displayedProjects : displayedProjects.slice(0, INITIAL)).map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            reduced={reduced}
          />
        ))}
      </div>

      {displayedProjects.length > INITIAL && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => {
              if (showAll) scrollToSection("#projects", { offset: -80 });
              setShowAll((v) => !v);
            }}
            className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/45"
          >
            {showAll ? "Show fewer projects" : `Show all ${displayedProjects.length} projects`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
