"use client";

import { socials } from '@/lib/constants';
import Link from 'next/link';
import React, { useRef } from 'react'

const githubLink = socials[0];

const Navigation = () => {
    const navRef = useRef(null);

    const scrollToTop = () => {
        if (window) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
        <nav 
            ref={navRef}
            className="fixed top-0 left-0 w-full px-4 py-3.5 md:px-12 md:py-5 z-50 flex items-center justify-between backdrop-blur-xl bg-background/85 border-b border-border/50"
        >
            <p 
                className="text-white leading-none text-xl md:text-2xl font-extrabold inline-flex items-end gap-x-0.5"
                onClick={scrollToTop}
            >
                SolidDev
                <span className="size-2 mb-1 bg-red-400 rounded-sm" />
            </p>

            <Link
                href={githubLink.link}
                className="flex items-center gap-x-2 bg-secondary py-2 px-3 sm:py-2 sm:px-3.5 rounded-full text-foreground hover:cursor-pointer overflow-hidden transition-colors duration-50 relative z-0 before:block before:absolute before:top-0 before:left-0 before:w-full before:scale-x-0 before:origin-left before:rounded-full before:h-full before:bg-primary before:-z-10 before:transition-all before:duration-500 hover:before:scale-x-100 hover:text-primary-foreground text-sm sm:text-base"
                target="_blank"
                title="Github Profile"
            >
                <githubLink.Icon className="size-5 sm:size-6" />
                <span className="text-base font-semibold">{githubLink.title}</span>
            </Link>
        </nav>
    )
}

export default Navigation