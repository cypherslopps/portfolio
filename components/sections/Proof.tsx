"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { contact, testimonials } from "@/lib/constants";

const initials = (n: string) => n.split(" ").map((w) => w[0]).join("").slice(0, 2);

const Proof = () => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="proof" className="wrapper py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase text-primary">Kind words</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            What people say <span className="font-display italic font-normal text-primary">after</span> we work together
          </h2>
        </div>

        <div ref={ref} className="mt-10 grid gap-5 mx-auto max-w-4xl md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="reveal-card flex flex-col rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/45"
            >
              <span aria-hidden className="font-display text-5xl leading-none text-primary/70">“</span>
              <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-secondary"
          >
            More recommendations on LinkedIn <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Proof;
