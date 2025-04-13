import React, { FC } from 'react'
import Grain from "@/public/grain.jpg";
import { cn } from '@/lib/utils';

interface ICard {
    children: React.ReactNode,
    className?: string;
}

const Card: FC<ICard> = ({ children, className }) => {
  return (
    <blockquote className="bg-gray-900 rounded-3xl relative z-0  after:content-[''] after:absolute after:inset-0 after:z-10 after:pointer-events-none after:outline-2 after:outline-offset-2 after:rounded-3xl after:outline-white/20">
      <div className={cn(
        "overflow-hidden relative p-6",
        className
      )}>
        <div 
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${Grain.src})`
          }}
        />
        {children}
      </div>
    </blockquote>
  )
}

export default Card