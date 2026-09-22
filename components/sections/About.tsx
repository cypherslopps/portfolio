"use client";

import Link from "next/link";
import Image from "next/image";

import Me from "@/assets/me.jpg";
import Grain from "@/assets/grain.jpg";
import { socials } from "@/lib/constants";
import { scrollToSection } from "@/lib/scrollTo";

const About = () => {
  return (
    <section className="!bg-black wrapper space-y-20 lg:!pt-28 z-50">
      <Image
        src={Grain}
        alt=""
        fill
        sizes="100vw"
        className="opacity-5 -z-10 object-cover"
      />

      <div className="w-[95%] sm:w-11/12 lg:w-10/12 mx-auto grid gap-y-4 sm:gap-y-10 lg:grid-cols-[max-content_1fr] lg:gap-y-0 lg:gap-x-20">
        <figure className="size-36 sm:size-40 lg:size-52 rounded-md relative transition-transform duration-300">
          <Image
            src={Me}
            alt="soliddev"
            fill
            sizes="(max-width: 1024px) 10rem, 13rem"
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
              {"I've"} built reliable systems and products that generate
              recurring revenue, solve real business problems, and serve
              thousands of users. I specialize in turning ideas into
              production-ready software that is engineered for growth and
              resilience.
              <br />
              <br />I am a Senior Software Engineer with deep focus on backend
              systems, system architecture, payment infrastructure, and
              high-performance applications. I care about the hard parts —
              reliability under failure, clean architecture, and systems that
              stay correct when things go wrong.
            </p>

            <p>
              I have a strong interest in building payment systems (Fintech)
              across both centralized and decentralized environments. I
              continuously research the bottlenecks, trade-offs, and patterns
              that make financial products trustworthy.
              <br /> <br />I work well in{" "}
              <strong className="text-white">teams</strong> and enjoy
              collaborating with other engineers to ship products that actually
              matter.
            </p>

            <p>
              Outside of coding, I enjoy watching anime, playing games (PS5,
              Snooker), and reading (Poetry, Philosophy, and more). Reach out to
              discuss how we can build something amazing together{" "}
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
