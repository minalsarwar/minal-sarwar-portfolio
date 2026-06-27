import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageWrap, Reveal, SectionLabel } from "../components/site/Reveal";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Story — Minal" },
      { name: "description", content: "From Computer Science at IBA Karachi to shipping fintech at NayaPay — the long way into product." },
      { property: "og:title", content: "Story — Minal" },
      { property: "og:description", content: "A visual timeline of how Minal arrived at product management." },
    ],
  }),
  component: StoryPage,
});

const chapters = [
  {
    year: "2019 — 2023",
    title: "Computer Science",
    place: "IBA Karachi",
    body:
      "Four years of code, late-night front-end tinkering and a soft spot for design systems. I learned that the gap between an idea and a useful product is almost always interface.",
    accent: "From the terminal to the canvas.",
  },
  {
    year: "Summer · 2022",
    title: "Business Analyst Intern",
    place: "Ignite Labs",
    body:
      "My first taste of product. Mapping user journeys, defining requirements, and learning that ‘obvious’ is the hardest thing to design for.",
    accent: "First time saying ‘why?’ in a meeting.",
  },
  {
    year: "2023",
    title: "Data Analytics Intern",
    place: "Foodpanda",
    body:
      "Automated duplicate image detection across thousands of restaurant menus and dug into operational signals. Numbers stopped being scary and started being useful.",
    accent: "Where I learned to trust the dashboard, gently.",
  },
  {
    year: "Final Year · 2023",
    title: "Fraud Detection Research",
    place: "Final Year Project",
    body:
      "Built fraud detection models on real-world fintech data — a quiet preview of the world I’d end up working in.",
    accent: "Suspicious patterns are interesting patterns.",
  },
  {
    year: "2024 — Now",
    title: "Associate Product Manager",
    place: "NayaPay",
    body:
      "Shipping fintech for NayaPay Business across web and mobile. PRDs, user research, prioritisation, launches — and the small, satisfying details in between.",
    accent: "Where everything quietly clicked into place.",
  },
  {
    year: "Next",
    title: "The next chapter…",
    place: "TBD",
    body:
      "Something that asks better questions. Something that takes craft seriously. Coffee chats welcome.",
    accent: "To be continued.",
  },
];

function StoryPage() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-16 sm:pt-48">
        <Reveal>
          <SectionLabel>Chapter by chapter</SectionLabel>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-tight text-balance">
            The story so far —
            <span className="italic text-muted-foreground"> told as a few honest chapters</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A non-linear path, in roughly linear order. Each card is a small
            moment that nudged me closer to product.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="relative">
          {/* spine */}
          <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-border to-transparent sm:left-1/2 sm:block" />

          <ul className="space-y-12 sm:space-y-20">
            {chapters.map((c, i) => {
              const left = i % 2 === 0;
              return (
                <li key={c.title} className="relative">
                  <div className={`grid gap-6 sm:grid-cols-2 sm:gap-12 ${left ? "" : "sm:[&>*:first-child]:order-2"}`}>
                    <div className={`sm:px-2 ${left ? "sm:text-right" : ""}`}>
                      <Reveal y={30}>
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          {c.year}
                        </p>
                        <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
                          {c.title}
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">{c.place}</p>
                        <p className="mt-4 text-base leading-relaxed text-foreground/80">
                          {c.body}
                        </p>
                        <p className="mt-3 font-display text-lg italic text-lavender">
                          {c.accent}
                        </p>
                      </Reveal>
                    </div>

                    <Reveal y={30} delay={0.1}>
                      <div
                        className="group relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-float"
                        data-cursor="hover"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--lavender)_22%,transparent),transparent_55%)]" />
                        <div className="absolute inset-0 grain" />
                        <div className="absolute inset-0 grid place-items-center">
                          <motion.span
                            initial={{ scale: 0.92, opacity: 0.7 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="font-display text-[7rem] leading-none tracking-tight text-foreground/15 sm:text-[10rem]"
                          >
                            0{i + 1}
                          </motion.span>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-muted-foreground">
                          <span className="font-mono uppercase tracking-[0.18em]">chapter · 0{i + 1}</span>
                          <span className="font-mono uppercase tracking-[0.18em]">more · soon</span>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* spine dot */}
                  <div className="pointer-events-none absolute left-[14px] top-2 hidden h-3 w-3 rounded-full border border-border bg-background sm:left-1/2 sm:block sm:-translate-x-1/2">
                    <span className="absolute inset-[3px] rounded-full bg-lavender" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </PageWrap>
  );
}
