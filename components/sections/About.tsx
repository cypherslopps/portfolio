"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Soliddev from "@/assets/soliddev.jpeg";
import Grain from "@/assets/grain.jpg";
import { socials } from "@/lib/constants";

const About = () => {
  return (
    <section className="!bg-black wrapper space-y-20 lg:!pt-28 z-50">
      <Image src={Grain} alt="" fill className="opacity-5 -z-10" />

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
            <p className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-gray-300/30">
              Hello
            </p>
            <h1 className="uppercase text-[1.9rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              {"I'm"} Joseph Ibok
            </h1>
          </header>

          <div className="text-base sm:text-lg text-white/65 space-y-3.5">
            <p>
              I am a Senior Software Engineer with{" "}
              <strong className="text-white font-black">8 years</strong> of
              experience building scalable, production-grade systems. My
              expertise lies in full-stack development, specializing in robust
              automation, API-first backends, and advanced Web3 platforms. I
              design and implement clean architectures that translate complex
              ideas into reliable products engineered for growth.
            </p>

            <p>
              My focus is on driving measurable business impact through system
              reliability and maintainability. I excel at bridging sophisticated
              backend logic with high-performance frontend experiences,
              designing efficient automation workflows, and leveraging
              data-driven processes to support sustainable growth at scale.
            </p>

            <p>
              Outside of coding, I enjoy collaborating with other builders,
              watching <strong className="text-white">ANIMES</strong>, playing{" "}
              <strong className="text-white">Games</strong>,{" "}
              <strong className="text-white">Reading books</strong> and{" "}
              <strong className="text-white">Learning new concepts</strong>.
              Reach out to discuss how we can build something amazing together.
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
    </section>
  );
};

export default About;
