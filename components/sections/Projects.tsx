'use client'

import { ArrowUpRight03FreeIcons } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from 'next/image'
import { IProject } from "@/index"
import { projects } from "@/lib/constants"
import SectionHeader from "../SectionHeader"


const ProjectBlock = ({ project }: {project: IProject}) => {
  return (
    <blockquote 
      onClick={() => project.link ? window.open(project.link, "_blank") : null}
      className='bg-neutral-400/10 p-4 sm:px-8 sm:py-6 md:py-8 lg:py-8 cursor-pointer border-t last:border-b border-neutral-800 border-dotted flex flex-col justify-between group/project relative'
    >
      <div className='absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-500 bg-background/50' />
      <div className='relative'>
        {project.image && (
          <div className='h-[15rem] md:hidden'>
            <Image 
              src={project.image} 
              alt={project.title} 
              className='w-full h-full size-full object-cover [background-position:top center]' 
            />
          </div>
        )}

        <div className='flex items-center justify-between mt-5 md:mt-0 md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8'>
          <div className='lg:group-hover/project:pl-4 transition-all duration-700 flex flex-col gap-y-2 sm:gap-y-3'>
            <header className="flex items-center justify-between sm:inline-block">
              <div>
                <h3 className='text-[1.73rem] sm:text-4xl text-white font-bold'>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className='sm:hidden lg:group-hover/project:pr-4 transition-all duration-700'>
                <HugeiconsIcon 
                  className='text-neutral-400 size-7'
                  icon={ArrowUpRight03FreeIcons} 
                />
              </div>
            </header>
            <div className='flex flex-col gap-y-2 sm:flex-row sm:gap-x-3 text-sm sm:items-center w-[100%] md:w-[115%]'>
              <span className='w-max inline-block relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[.2rem] after:bg-primary/70 after:rounded-full after:rotate-[-1deg]'>Technologies:</span>
              <div className='flex gap-x-1 gap-y-1 sm:gap-y-3 items-center flex-wrap'>
                {project.stacks.length > 0 && project.stacks.map((stack, idx) => (
                  <span key={idx} className='text-xs md:text-md bg-[#222] shadow-sm shadow-neutral-900 rounded-md py-1 px-2'>{stack}</span>
                ))}
              </div>
            </div>
          </div>
          <div className='relative [perspective: 800px] hidden md:block'>
           {project.image && (
             <div className='absolute w-[30rem] h-[15rem] top-1/2 -translate-y-1/2 right-5 opacity-0 scale-50 group-hover/project:opacity-100 lg:group-hover/project:scale-100 transition-all duration-500 z-10 rounded-md'>
              <Image 
                src={project.image} 
                alt={project.title}
                className='h-full object-cover rounded-md' 
              />
            </div>
           )}
          </div>
          {project.link.length && (
            <div className='hidden sm:inline-block lg:group-hover/project:pr-4 transition-all duration-700'>
              <HugeiconsIcon 
                className='text-neutral-400 size-7'
                icon={ArrowUpRight03FreeIcons} 
              />
            </div>
          )}
        </div>
      </div>
    </blockquote>
  )
}

const Projects = () => {
  return (
  <section id="projects" className="wrapper space-y-10 pb-16 lg:pt-10">
      <SectionHeader 
        headline="Real-World Results"
        title="My Projects"
      />

      <div className='w-full mt-10 bg-[#0a0b0d]'>
        <div className='w-full relative grid grid-cols-1'>
          {projects.map(project => (
            <ProjectBlock 
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects