import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { projects } from '@/lib/constants'
import { IProject } from '..'
import Icons from './Icons'
import Grain from "@/public/grain.jpg";

const ProjectCard: FC<IProject> = ({ title, company, year, link, image, results }) => {
  return (
    <blockquote 
      key={title}
      className="bg-gray-900 rounded-3xl relative z-0  after:content-[''] after:absolute after:inset-0 after:z-10 after:pointer-events-none after:outline-2 after:outline-offset-2 after:rounded-3xl after:outline-white/20"
    >
      <div className="overflow-hidden relative px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
        <div 
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${Grain.src})`
          }}
        />
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

          <div className="relative">
            <Image 
              src={image}
              alt={title}
              className="mt-8 lg:rounded-tl-3xl lg:mt-0 object-cover -mb-4 w-full lg:w-auto lg:max-w-none lg:mb-0 lg:absolute lg:h-full"
            />
          </div>
        </div>
      </div>
    </blockquote>
  )
}

const Projects = () => {
  return (
    <section className='wrapper wrapper-overlay space-y-10 pb-16 lg:pt-10'>
      <header className="flex flex-col items-center">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">Real-World Results</p>
        </div>
        <h2 className="heading !text-white mt-3">Featured Projects</h2>
        <p className="text-white/60 mx-auto text-center md:text-lg max-w-md">See how I transformed concepts into engaging digital experiences.</p>
      </header>

      <div className="mt-10 md:mt-20 flex flex-col gap-y-20 container mx-auto">
        {projects.map(project => (
          <ProjectCard 
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>  
  )
}

export default Projects