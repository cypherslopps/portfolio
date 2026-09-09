"use client";

import Link from "next/link";
import Image from "next/image";

import Soliddev from "@/assets/soliddev.jpeg";
import Grain from "@/assets/grain.jpg";
import { socials } from "@/lib/constants";
import { scrollToSection } from "@/lib/scrollTo";

const About = () => {
  return (
    <section className="!bg-black wrapper space-y-20 lg:!pt-28 z-50">
      <Image src={Grain} alt="" fill className="opacity-5 -z-10" />

      <div className="w-[95%] sm:w-11/12 lg:w-10/12 mx-auto grid gap-y-4 sm:gap-y-10 lg:grid-cols-[max-content_1fr] lg:gap-y-0 lg:gap-x-20">
        <figure className="size-36 sm:size-40 lg:size-52 rounded-md relative transition-transform duration-300">
          <Image
            src={Soliddev}
            alt="soliddev"
            fill
            className="grayscale-[55%] object-cover rounded-full"
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
              {"I've"} built reliable and scalable systems/products that have
              made recurring revenue for businesses, solves real-world problems,
              and have been used by thousands of users. {"It's"} one thing to
              have an idea, but {"it's"} another to bring it to reality without
              any hiccups. I specialize in refining ideas into reliable products
              that are engineered for growth on the long run.
              <br />
              <br />I am a software engineer with a strong focus on system
              security, backend development, system architecture, building
              performant, fast, aesthetic and reliable applications, and cloud
              infrastructure.
            </p>

            <p>
              I have a keen interest in building payment systems (Fintech)
              across decentralized and centralized sectors. {"I've"} been making
              extensive research on Fintech to better understand the best
              measure, bottlenecks and approches that works. Because a great
              products {"isn't"} complete, if {"there're"} hitches around{" "}
              {"it's"} payment infastructure.
              <br /> <br />I am a{" "}
              <strong className="text-white">team player</strong> and I enjoy
              collaborating with other developers to build great products.
            </p>

            <p>
              Outside of coding, I enjoy collaborating with other builders,
              watching <strong className="text-white">Animes</strong>, playing{" "}
              <strong className="text-white">
                Games (P5, Snooker and more)
              </strong>
              ,{" "}
              <strong className="text-white">
                Reading books (Poetry, Philosophy and more)
              </strong>
              . Reach out to discuss how we can build something amazing together{" "}
              <span
                onClick={() => scrollToSection("#contact", { offset: -100 })}
                className="decoration-1 underline decoration-dashed italic text-white hover:text-primary transition-colors duration-300 text-sm sm:text-[15px] cursor-pointer"
              >
                Click below
              </span>
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
