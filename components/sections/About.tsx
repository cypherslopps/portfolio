"use client";

import React, { useRef } from 'react'
import { motion } from "framer-motion";

import SectionHeader from '../SectionHeader'
import Card from '../Card'
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindcssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";

import CardHeader from '../CardHeader';
import ToolboxItems from '../ToolboxItems';

const toolboxItems = [
    {
        title: "Javascript",
        iconType: JavascriptIcon
    },
    {
        title: "Typescript",
        iconType: JavascriptIcon
    },
    {
        title: "TailwindCSS",
        iconType: TailwindcssIcon
    },
    {
        title: "Sanity",
        iconType: TailwindcssIcon
    },
    {
        title: "Supabase",
        iconType: JavascriptIcon
    },
    {
        title: "Reactjs",
        iconType: ReactIcon
    },
    {
        title: "React Native",
        iconType: ReactIcon
    },
    {
        title: "Nodejs",
        iconType: ReactIcon
    },
    {
        title: "Nestjs",
        iconType: ReactIcon
    },
    {
        title: "Github",
        iconType: GithubIcon
    },
    {
        title: "Jira",
        iconType: ReactIcon
    },
    {
        title: "C#",
        iconType: ReactIcon
    },
    {
        title: "Postgres",
        iconType: ReactIcon
    },
    {
        title: "Firebase",
        iconType: ReactIcon
    }
]

const hobbies = [
    {
        title: "Gaming",
        emoji: "🎮",
        left: "5%",
        top: "5%"
    },
    {
        title: "Reading",
        emoji: "📖",
        left: "50%",
        top: "5%"
    },
    {
        title: "Cooking",
        emoji: "🍳",
        left: "2%",
        top: "40%"
    },
    {
        title: "Anime",
        emoji: "🇯🇵",
        left: "65%",
        top: "70%"
    },
    {
        title: "Fashion",
        emoji: "🩳",
        left: "15%",
        top: "75%"
    },
    {
        title: "Workout",
        emoji: "🌩️",
        left: "60%",
        top: "30%"
    },
    {
        title: "Music",
        emoji: "🎵",
        left: "38%",
        top: "50%"
    }
]

const About = () => {
    const constraintRef = useRef(null);
    
    return (
        <section className="wrapper space-y-20 !lg:py-28">
            <SectionHeader 
                headline="About Me"
                title="A Glimpse into My World"
                description="Learn more about who I am, what I do, and what inspires me"
            />

            <div className="mx-auto w-11/12 grid grid-cols-1 md:grid-cols-[calc(60%-16px)_calc(40%-16px)] lg:grid-cols-[calc(70%-16px)_calc(30%-16px)] gap-8">
                <Card className="col-span-full h-[400px]">
                    <CardHeader 
                        title="Connect With Me"
                        description="Get to know me"
                    />
                    
                </Card>

                <Card className="h-[320px]">
                    <CardHeader 
                        title="My Toolbox"
                        description="Explore the technologies and tools I use to create digital experiences."
                    />
                    
                    {/* Toolbox Items */}
                    <div className='space-y-6'>
                        <ToolboxItems 
                            items={toolboxItems} 
                            itemsWrapperClassName="animate-move-left"
                        />
                        <ToolboxItems 
                            items={toolboxItems} 
                            itemsWrapperClassName="animate-move-right"  
                        />
                    </div>
                </Card>

                <Card wrapperClassName="h-[320px] grid grid-rows-[max-content_1fr]">
                    <CardHeader 
                        title="Beyond the code"
                        description="Explore my interests and hobbies beyond the digital realm."
                    />

                    <div 
                        className='relative h-full'
                        ref={constraintRef}
                    >
                        {hobbies.map(({ title, emoji, top, left }) => (
                            <motion.div 
                                key={title}
                                className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-purple-300 to-cyan-300 rounded-full py-1.5 absolute"
                                style={{
                                    top,
                                    left
                                }}
                                drag
                                dragConstraints={constraintRef}
                            >
                                <span className="font-medium text-gray-950">{title}</span>
                                <span>{emoji}</span>
                            </motion.div>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default About