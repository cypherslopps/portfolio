import React, { FC } from 'react'
import TechIcon from './TechIcon';
import { cn } from '@/lib/utils';

interface IToolboxItems {
    items: {
        title: string;
        iconType: React.ElementType
    }[];
    className?: string;
    itemsWrapperClassName?: string;
}

const ToolboxItems: FC<IToolboxItems> = ({ 
    items, 
    className,
    itemsWrapperClassName
}) => {
  return (
    <div className={cn(
        "flex mask-toolbox",
        className
    )}>
        <div className={cn(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemsWrapperClassName
        )}>
            {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                    {items.map(({ title, iconType }) => (
                        <div 
                            key={title}
                            className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
                        >
                            <TechIcon component={iconType} />
                            <span>{title}</span>
                        </div>
                    ))}
                </React.Fragment>    
            ))}
        </div>
    </div>
  )
}

export default ToolboxItems