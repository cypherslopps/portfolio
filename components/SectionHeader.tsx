import React, { FC } from 'react'

interface ISectionHeader {
    headline: string;
    title: string;
    description: string;
}

const SectionHeader: FC<ISectionHeader> = ({ headline, title, description }) => {
  return (
    <header className="flex flex-col items-center">
        <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 to-cyan-300 text-transparent bg-clip-text">{headline}</p>
        </div>
        <h2 className="heading !text-white mt-3">{title}</h2>
        <p className="text-white/60 mx-auto text-center md:text-lg max-w-md">{description}</p>
    </header>
  )
}

export default SectionHeader