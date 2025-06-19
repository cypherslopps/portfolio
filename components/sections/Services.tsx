import React from 'react'
import SectionHeader from '../SectionHeader'
import { services } from '@/lib/constants'

const Services = () => {
  return (
    <section id="services" className="wrapper space-y-8 md:space-y-14 pb-16 lg:pt-10">
      <SectionHeader 
        headline="What I Offer"
        title="My Services"
      />

      <div className="grid-cols-1 sm:grid-cols-2 gap-3.5 md:w-11/12 mx-auto grid lg:grid-cols-3 lg:gap-5">
        {services.map(({ title, description }) => (
          <blockquote
            key={title}
            className="p-4 flex flex-col gap-y-1 sm:gap-y-1.5 bg-white text-black rounded-xl"
          >
            <h1 className="text-base sm:text-lg font-black">{title}</h1>
            <p 
              className="opacity-85 font-medium text-[15px] sm:text-base" 
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default Services