"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Soliddev from "@/assets/soliddev.jpeg";
import Grain from "@/assets/grain.jpg"
import { socials } from '@/lib/constants';
import SkillsTicker from './SkillsTicker';


const About = () => {    
    return (
        <section className="!bg-black wrapper space-y-20 lg:!pt-28 z-50">
            <Image 
                src={Grain}
                alt=""
                fill
                className="opacity-5 -z-10"
            />

            <div className="space-y-20">
                <div className="w-[95%] sm:w-11/12 lg:w-10/12 mx-auto grid gap-y-4 sm:gap-y-10 lg:grid-cols-[max-content_1fr] lg:gap-y-0 lg:gap-x-20">
                    <figure className="size-36 sm:size-40 lg:w-80 lg:h-96 rounded-md relative transition-transform duration-300 hover:rotate-6 hover:scale-110">
                        <Image 
                            src={Soliddev}
                            alt="soliddev"
                            fill
                            className="grayscale-[55%] hover:grayscale-0 object-cover rounded-full lg:rounded-none"
                        />
                    </figure>

                    <div className="space-y-3.5 md:space-y-6">
                        <header className="-space-y-0.5 sm:space-y-2">
                            <p className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-gray-300/30">Hello</p>
                            <h1 className="uppercase text-[1.9rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight">{"I'm"} Joseph</h1>
                        </header>

                        <div className="text-base sm:text-lg text-white/65 space-y-2">
                            <p>
                                Passionate Software Engineer with <strong className="text-white">8 years</strong> of experience building elegant, high-impact solutions that bridge web, mobile, and blockchain technologies. I transform ideas into scalable real products that drive innovation and client success.
                            </p>

                            <p>
                                When I’m not coding, connecting with the tech community to inspire and collaborate, watching <strong className="text-white">ANIMES</strong>, playing <strong className="text-white">Games 🎮</strong>, <strong className="text-white">Reading books 📚</strong> and <strong className="text-white">Learning new concepts</strong>. Let’s create something extraordinary together—reach out to discuss your next project!
                            </p>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-x-4 mt-6">
                            {socials.map(({ title, link, Icon }) => (
                                <Link
                                    key={title}
                                    href={link}
                                    className="transition-transform duration-300 hover:scale-110"
                                >
                                    <Icon />
                                    <span className="sr-only">{title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Ticker */}
                <SkillsTicker />
            </div>
        </section>
    )
}

export default About