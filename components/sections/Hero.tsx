"use client";

import { resumeLink } from "@/lib/constants";
import { scrollToSection } from "@/lib/scrollTo";
import Me from "@/assets/me.jpg";
import Image from "next/image";
import Icons from "../Icons";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="hero-section relative flex flex-col items-center justify-center overflow-hidden bg-background px-5 text-center">
      <div className="hero-in relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <div className="mb-7 inline-flex items-center gap-2 text-xs font-medium text-mint sm:text-sm">
          <span className="size-2 rounded-full bg-mint" />
          Available for roles and contracts
        </div>     

        <div className="relative mb-8">
          <Image 
            src={Me}
            alt="Joseph Ibok"
            className="hero-portrait size-40 rotate-[-10deg] rounded-[45%] object-cover sm:h-44 sm:w-44"
          />

          <Icons.sparkle
            aria-hidden="true"
            className="absolute -right-9 top-3 size-7 text-peach" 
          />

          <span
            aria-hidden="true"
            className="absolute -left-8 bottom-2 text-3xl text-rose"
          >✳</span>
        </div> 

        <p className="hero-caption mb-4 text-base font-medium">
          Hi, I'm Joseph {' '}
          <span aria-hidden="true">👋</span>
        </p>

        <h1 className="hero-title max-w-4xl text-foreground">
          I build software that<br className="hidden sm:block" />{" "}
          <span className="hero-emphasis">holds up when it matters.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A senior software engineer working across backend,
          frontend and mobile. I've shipped for streaming, fintech, Web3,
          betting and AI teams, and I go deepest on the parts that break
          quietly {/* : payments, background jobs, real-time state. */}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" asChild className="h-12 rounded-full bg-peach px-6 text-ink hover:bg-peach/90">
            <Link 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Icons.download />
              Download CV
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 rounded-full border-primary/50 bg-primary/10 px-6 text-foreground hover:bg-primary/20" onClick={() => scrollToSection("#contact", { offset: -100 })}>
            Let's talk<Icons.arrow_up_right />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="mt-7 rounded-full text-muted-foreground" aria-label="Explore my projects" title="Explore my projects" onClick={() => scrollToSection("#projects", { offset: -80 })}><Icons.arrow_down /></Button>
      </div>
    </section>
  );
}

export default Hero;