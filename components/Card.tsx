import React, { ComponentPropsWithoutRef } from 'react'
import Grain from "@/assets/grain.jpg";
import { cn } from '@/lib/utils';

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  wrapperClassName?: string;
}

const Card = ({ 
  children, 
  className,
  wrapperClassName, 
  ...props 
}: CardProps) => {
  return (
    <div className={cn(
        "bg-gray-900 rounded-3xl relative z-0  after:content-[''] after:absolute after:inset-0 after:z-10 after:pointer-events-none after:outline-2 after:outline-offset-2 after:rounded-3xl after:outline-white/20",
        className
      )}
      {...props}
    >
      <div className={cn(
        "relative",
        wrapperClassName
      )}>
        <div 
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${Grain.src})`
          }}
        />
        {children}
      </div>
    </div>
  )
}

export default Card