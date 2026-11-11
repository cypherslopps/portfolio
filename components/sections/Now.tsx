"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { side_quests } from "@/lib/constants";

const txRepo = side_quests[0]?.link ?? "https://github.com/solidDev434/transaction-risk-api";

const Now = () => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
  <section id="now" className="wrapper pb-6">
    <div className="mx-auto max-w-5xl bg-transparent py-2">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="uppercase text-sm font-semibold text-primary">
          Now · 2026 – present
        </p>
        <span className="text-sm text-muted-foreground">Independent engineer</span>
      </div>
      <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground">
        Building an open transaction risk API
      </h3>
      <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
        FastAPI and PostgreSQL. Idempotent requests, atomic phases, a transactional outbox drained by
        Celery, balances held as integer cents and moved through explicit reserve, capture and release.
        Built to prove the failure cases, not just the happy path.
      </p>
      <div ref={ref} className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["The problem", "A client retries a payment after a timeout. Did the first one go through? Without care you charge twice or lose the payment."],
          ["How it works", "Every request carries an idempotency key. Money moves in phases (reserve, capture, release) inside one database transaction, and events are written to an outbox in that same transaction."],
          ["Why it holds", "Celery drains the outbox, so a crash never loses an event or sends one twice. Amounts are integer cents, so there are no rounding errors."],
        ].map(([h, b]) => (
          <div key={h} className="reveal-card border-t border-border pt-5">
            <p className="text-sm font-semibold text-foreground">{h}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
          </div>
        ))}
      </div>
      <a
        href={txRepo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        View the repo →
      </a>
    </div>
  </section>
  );
};

export default Now;
