import { projects } from '@/lib/constants'
import React from 'react'

const Projects = () => {
  return (
    <section className='wrapper wrapper-overlay'>
      <header>
        <p>Real-World Results</p>
        <h2 className="heading">Featured Projects</h2>
        <p>See how I transformed concepts into engaging digital experiences.</p>
      </header>

      <div>
        {projects.map(project => (
          <blockquote key={project.title}>
            <div>
              <span>{project.company}</span>
              <span>{project.year}</span>
            </div>

            <h3>{project.title}</h3>
            <hr />
            <ul>
              {project.results.map(result => (
                <li>{result.title}</li>
              ))}
            </ul>
            <button>View Live Site</button>
          </blockquote>
        ))}
      </div>
    </section>  
  )
}

export default Projects