"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowUpRight03FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { IProject } from "@/index";
import { projects } from "@/lib/constants";
import SectionHeader from "../SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const ProjectBlock = ({ project }: { project: IProject }) => {
  return (
    <blockquote
      onClick={() =>
        project.link ? window.open(project.link, "_blank") : null
      }
      className="project-block bg-neutral-400/10 p-4 sm:px-8 sm:py-6 md:py-8 lg:py-8 cursor-pointer border-t last:border-b border-neutral-800 border-dotted flex flex-col justify-between group/project relative opacity-0 translate-y-10"
    >
      <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-500 bg-background/50" />
      <div className="relative space-y-5 lg:space-y-0">
        {project.image && (
          <div className="h-[15rem] lg:hidden">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full size-full object-cover [background-position:top center]"
            />
          </div>
        )}

        <div className="flex items-center justify-between mt-5 lg:mt-0 lg:grid lg:grid-cols-[1fr_300px_max-content] lg:gap-8">
          <div className="lg:group-hover/project:pl-4 transition-all duration-700 flex flex-col gap-y-2 sm:gap-y-3">
            <header className="flex items-center justify-between sm:inline-block">
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-[1.73rem] sm:text-4xl text-white font-bold">
                    {project.title}
                  </h3>
                  <p className="text-base italic text-white/80">
                    {project.role}
                  </p>
                </div>

                <p>{project.description}</p>
              </div>
              <div className="sm:hidden lg:group-hover/project:pr-4 transition-all duration-700">
                <HugeiconsIcon
                  className="text-neutral-400 size-7"
                  icon={ArrowUpRight03FreeIcons}
                />
              </div>
            </header>

            <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-3 text-sm sm:items-center w-[100%] md:w-[115%]">
              <span className="w-max inline-block relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[.2rem] after:bg-primary/70 after:rounded-full after:rotate-[-1deg]">
                Technologies:
              </span>
              <div className="flex gap-x-1 gap-y-1 sm:gap-y-3 items-center flex-wrap">
                {project.stacks.length > 0 &&
                  project.stacks.map((stack, idx) => (
                    <span
                      key={idx}
                      className="text-xs md:text-md bg-[#222] shadow-sm shadow-neutral-900 rounded-md py-1 px-2"
                    >
                      {stack}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="relative [perspective: 800px] hidden lg:block">
            {project.image && (
              <div className="absolute w-[30rem] h-[15rem] top-1/2 -translate-y-1/2 right-5 opacity-0 scale-50 group-hover/project:opacity-100 lg:group-hover/project:scale-100 transition-all duration-500 z-10 rounded-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full object-cover rounded-md"
                />
              </div>
            )}
          </div>
          {project.link && (
            <div className="hidden sm:inline-block lg:group-hover/project:pr-4 transition-all duration-700">
              <HugeiconsIcon
                className="text-neutral-400 size-7"
                icon={ArrowUpRight03FreeIcons}
              />
            </div>
          )}
        </div>
      </div>
    </blockquote>
  );
};

const Projects = () => {
  useEffect(() => {
    // Kill any old triggers (good practice in React/Next.js)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Target all project blocks
    const blocks = gsap.utils.toArray<HTMLElement>(".project-block");

    gsap.to(blocks.slice(0, 4), {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
    });

    // Use batch for progressive reveal
    ScrollTrigger.batch(blocks, {
      start: "top 85%",
      end: "bottom 20%",
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.18,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.in",
          overwrite: "auto",
        });
      },
      interval: 0.1,
      batchMax: 4,
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="projects" className="wrapper space-y-10 pb-16 lg:pt-10">
      <SectionHeader headline="Real-World Results" title="My Projects" />

      <div className="w-full mt-10 bg-[#0a0b0d]">
        <div className="w-full relative grid grid-cols-1">
          {projects.map((project) => (
            <ProjectBlock key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
