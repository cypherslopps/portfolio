import React, { FC } from 'react'

import StarIcon from "@/assets/icons/star.svg";
import { cn } from '@/lib/utils';

interface ICardHeader {
  title: string;
  description: string;
  className?: string;
}

const CardHeader: FC<ICardHeader> = ({
  title, 
  description,
  className
}) => {
  return (
    <header className={cn(
      "flex flex-col gap-y-2 p-6 md:py-8 md:px-10",
      className
    )}>
      <div className="inline-flex items-center gap-x-2">
        <StarIcon className="size-9 text-purple-500 leading-none" />
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>

      <p className="text-sm lg:text-base max-w-xs text-white/60">{description}</p>
    </header>
  )
}

export default CardHeader