"use client";

import Link from "next/link";
import Image from "next/image";

import Grain from "@/assets/grain.jpg";
import { socials } from "@/lib/constants";
import { scrollToSection } from "@/lib/scrollTo";

const About = () => {
  return (
    <section className="about-section wrapper space-y-12">
      <Image
        src={Grain}
        alt=""
        fill
        sizes="100vw"
        className="opacity-5 -z-10 object-cover"
      />

      <div className="w-[95%] sm:w-11/12 max-w-4xl lg:w-10/12 mx-auto grid gap-y-4 sm:gap-y-10 lg:grid-cols-1">

        <div className="space-y-3.5 md:space-y-6">
          <header className="-space-y-0.5 sm:space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl font-medium uppercase text-primary">
              Hello
            </p>
            <h1 className="text-[1.9rem] sm:text-5xl md:text-6xl font-display ">
              {"I'm"} Joseph Ibok
            </h1>
          </header>

          <div className="text-base sm:text-lg text-muted-foreground space-y-3.5">
            <p>
              {"I've"} built products that generate recurring revenue, solve
              real business problems, and serve thousands of users. I care about
              the hard parts — reliability under failure, clean architecture,
              and systems that stay correct when things go wrong.
            </p>
            <p>
              Payments are where that matters most, so {"it's"} where {"I've"}{" "}
              gone deepest: idempotency, outboxes, payout flows. But the same
              discipline shows up in every interface and API I ship.
            </p>
            <p>
              I work well in <strong className="text-foreground">teams</strong>,
              whether {"that's"} joining yours or partnering with you on a
              build.{" "}
              <span
                onClick={() => scrollToSection("#contact", { offset: -100 })}
                className="decoration-1 underline decoration-dashed italic text-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-[15px] cursor-pointer"
              >
                {"Let's"} talk
              </span>
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-x-4 mt-6">
            {socials.map(({ title, link, Icon }) => (
              <Link
                key={title}
                href={link}
                target="_blank"
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
