import React, { FC } from "react";

interface ITechIcon {
    component: React.ElementType
}

const TechIcon: FC<ITechIcon> = ({ component }) => {
    const Component = component;
    
    return <>
        <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
        <svg className="size-0 absolute">
            <linearGradient id="tech-icon-gradient">
                <stop 
                    offset="0%"
                    stopColor="oklch(82.7% 0.119 306.383)"
                />
                <stop 
                    offset="100%"
                    stopColor="oklch(71.5% 0.143 215.221)"
                />
            </linearGradient>
        </svg>
    </>
}

export default TechIcon;