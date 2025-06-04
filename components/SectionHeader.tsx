import React, { FC } from 'react'


// initial={{ opacity: 0, y: 20 }}
// whileInView={{ opacity: 1, y: 0 }}
// transition={{ duration: 0.5 }}
// viewport={{ once: true }}  

interface ISectionHeader {
  headline?: string;
  title: string;
  description?: string;
}

const SectionHeader: FC<ISectionHeader> = ({ headline, title, description }) => {
  return (
    <header className="flex flex-col items-center">
      {headline && (
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">{headline}</p>
        </div>
      )}
      <h2 className="heading !text-white mt-2">{title}</h2>
      {description && (
        <p className="text-white/60 mx-auto text-center md:text-lg max-w-[30rem]">{description}</p>
      )}
    </header>
  )
}

export default SectionHeader