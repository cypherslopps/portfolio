import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { projects } from '@/lib/constants'
import { IProject } from '../..'
import Icons from '../Icons'
import SectionHeader from '../SectionHeader'
import Card from '../Card'

interface ProjectCardProps extends IProject {
  projectIndex: number
}

const ProjectCard: FC<ProjectCardProps> = ({ title, company, year, link, image, results, projectIndex }) => {
  return (
    <Card 
      wrapperClassName="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden sticky"
      style={{
        top: `calc(16px + ${projectIndex} + 40px)`
      }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <div className="bg-gradient-to-r from-purple-300 to-cyan-400 inline-flex gap-x-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
            <span>{company}</span>
            <span>&bull;</span>
            <span>{year}</span>
          </div>

          <h3 className="text-2xl md:text-4xl mt-2 md:mt-3 font-bold">{title}</h3>
          
          {/* Divider */}
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

          {/* Results */}
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {results.map((result) => (
              <li 
                key={result.title}
                className="flex items-center gap-2 text-sm md:text-base text-white/50"
              >
                <Icons.check className='size-5 md:size-6' />
                {result.title}
              </li>
            ))}
          </ul>

          <Link
            href={link}
            className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-7"
          >
            Visit Live Site
            <Icons.arrowUp className="size-4 rotate-45" />
          </Link>
        </div>

        <div className="relative w-full">
          <Image 
            src={image}
            alt={title}
            className="mt-8 lg:rounded-tl-3xl lg:mt-0 object-cover -mb-4 w-full lg:w-auto lg:max-w-none lg:mb-0 lg:absolute lg:h-full !rounded-br-4xl"
          />
        </div>
      </div>
    </Card>
  )
}

const Projects = () => {
  return (
    <section className='wrapper space-y-10 pb-16 lg:pt-10'>
      <SectionHeader 
        headline="Real-World Results"
        title="Featured Projects"
        description="See how I transformed concepts into engaging digital experiences."
      />

      <div className="mt-10 md:mt-20 flex flex-col gap-y-20 container mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard 
            key={project.company}
            projectIndex={idx}
            {...project}
          />
        ))}
      </div>
    </section>  
  )
}

export default Projects