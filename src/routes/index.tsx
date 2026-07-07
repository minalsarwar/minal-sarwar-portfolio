import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PageWrap, Reveal, SectionLabel } from "../components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minal Sarwar | Portfolio" },
      { property: "og:title", content: "Minal Sarwar | Portfolio" },
    ],
  }),
  component: Index,
});

const questions = [
  "What makes people love a product?",
  "Why do some experiences just… feel right?",
];

const headlines = [
  "I turn messy ideas into thoughtful digital experiences.",
  "Building products with curiosity, clarity, and just the right amount of questioning.",
  "I connect user needs, business goals and engineering realities, without dropping any of them.",
  "Shipping products that quietly do their job, and look good doing it.",
  "I believe a simple UI deserves the same care as a clever one.",
];

function Index() {
  return (
    <PageWrap>
      <Hero />
      <Marquee />
      <PrincipleBento />
      <FeaturedWork />
      <ThoughtStrip />
    </PageWrap>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const [qIdx, setQIdx] = useState(0);
  const [stage, setStage] = useState<"questions" | "intro">("questions");

  useEffect(() => {
    if (reduce) { setStage("intro"); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i < questions.length; i++) {
      timers.push(setTimeout(() => setQIdx(i), i * 2200));
    }
    timers.push(setTimeout(() => setStage("intro"), questions.length * 2200));
    return () => timers.forEach(clearTimeout);
  }, [reduce]);


  return (
    <section className="relative overflow-hidden pt-40 pb-32 sm:pt-48 sm:pb-40">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="pointer-events-none absolute left-1/3 top-24 -z-10 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-lavender/40 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-48 -z-10 h-[380px] w-[380px] rounded-full bg-pink-300/30 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-[320px] w-[520px] rounded-full bg-sky-200/30 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grain" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="min-h-[260px] sm:min-h-[320px]">
          <AnimatePresence mode="wait">
            {stage === "questions" ? (
              <motion.h1
                key={qIdx}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] tracking-tight text-balance"
              >
                <span className="italic text-lavender">“</span>
                {questions[qIdx] ?? questions[questions.length - 1]}
                <span className="italic text-lavender">”</span>
              </motion.h1>
            ) : (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-lavender">
                  Hi, I’m Minal.
                </p>
                <h1 className="mt-3 font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.02] tracking-tight text-balance">
                  <span className="italic bg-gradient-to-r from-lavender via-pink-400 to-sky-400 bg-clip-text text-transparent">Building</span>{" "}
                  thoughtful digital experiences
                  <span className="ml-2 inline-block h-3 w-3 translate-y-[-0.6em] rounded-full bg-lavender align-middle" />
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


        <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.2}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I’m a Computer Science grad from{" "}
              <span className="text-foreground">IBA Karachi</span> who took the long way
              into product, through business analysis, then data analytics at{" "}
              <span className="text-foreground">Foodpanda</span>, building a fraud
              detection system for my final year project, and most recently shipping B2B fintech for{" "}
              <span className="text-foreground">NayaPay Business</span> on web and
              mobile. I think a lot about why some things feel obvious to use, and
              quietly enjoy the days a tiny UI detail clicks into place.
            </p>
          </Reveal>

          <Reveal delay={0.35} className="md:justify-self-end">
            <div className="flex flex-col gap-3">
              <Link
                to="/story"
                className="group inline-flex items-center justify-between gap-6 rounded-full border border-lavender/40 bg-card/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-lavender/15"
              >
                Read the story
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = headlines;
  return (
    <section className="border-y border-border/60 bg-gradient-to-r from-lavender/10 via-pink-100/30 to-sky-100/20 py-6 overflow-hidden dark:from-lavender/10 dark:via-pink-500/5 dark:to-sky-500/5">
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="overflow-hidden">
        <div className="flex w-max gap-14 px-6 [animation:marquee_55s_linear_infinite]">
          {[...words, ...words, ...words].map((w, i) => (
            <span key={i} className="font-display text-2xl italic text-foreground/70 sm:text-3xl">
              {w} <span className="ml-14 text-lavender">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleBento() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <SectionLabel>The way I work</SectionLabel>
        <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
          Five things I keep
          <span className="italic bg-gradient-to-r from-lavender to-pink-400 bg-clip-text text-transparent"> coming back to</span>.
        </h2>
      </Reveal>

      <div className="mt-12 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-6">
        <BentoCard className="sm:col-span-3" eyebrow="Principle 01" title="Start with the question, not the feature.">
          Discovery is where I spend my best hours. The cleanest specs come from
          spending an extra day asking why.
        </BentoCard>
        <BentoCard className="sm:col-span-3 lavender" eyebrow="Principle 02" title="Small details, big trust.">
          Microcopy, loading states, the second tap. Trust is mostly built on
          quiet reassurances.
        </BentoCard>
        <BentoCard className="sm:col-span-2" eyebrow="Principle 03" title="Data is a co-pilot.">
          Numbers point. Conversations explain.
        </BentoCard>
        <BentoCard className="sm:col-span-2 lavender" eyebrow="Principle 04" title="Aesthetic is a feature.">
          A simple UI deserves the same care as a clever one.
        </BentoCard>
        <BentoCard className="sm:col-span-2" eyebrow="Principle 05" title="Ship, then listen.">
          The launch is the start of the conversation, not the end.
        </BentoCard>
      </div>
    </section>
  );
}

function BentoCard({
  children,
  title,
  eyebrow,
  className = "",
}: {
  children: React.ReactNode;
  title: string;
  eyebrow: string;
  className?: string;
}) {
  const lavender = className.includes("lavender");
  return (
    <Reveal className={className}>
      <div
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-float ${
          lavender ? "bg-gradient-to-br from-lavender/25 via-pink-100/40 to-card border-lavender/30 dark:from-lavender/15 dark:via-pink-500/5 dark:to-card" : "bg-card border-border/70"
        }`}
        data-cursor="hover"
      >
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: lavender ? "var(--lavender)" : "color-mix(in oklab, var(--lavender) 50%, transparent)" }}
        />
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-lavender">{eyebrow}</p>
        <div className="mt-10">
          <h3 className="font-display text-2xl leading-tight tracking-tight text-balance sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
        </div>
      </div>
    </Reveal>
  );
}

function FeaturedWork() {
  const items = [
    { tag: "Fintech", name: "NayaPay Business Portal", note: "Web · Merchant operations" },
    { tag: "Fintech", name: "NayaPay Business App", note: "Mobile · Owners on the go" },
    { tag: "CRM", name: "Inspire CRM User Journeys", note: "Workflow design" },
    { tag: "Marketing", name: "SureCompute Website Revamp", note: "Brand · IA" },
    { tag: "Flutter", name: "Dua Pal", note: "Personal spiritual companion" },
    { tag: "Vibe code", name: "DhikrBloom", note: "AI built personal dhikr app" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <SectionLabel>Selected craft</SectionLabel>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
            <span className="italic bg-gradient-to-r from-lavender to-sky-400 bg-clip-text text-transparent">Built</span> &amp; Shipped
          </h2>

        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/craft"
            className="group inline-flex items-center gap-2 rounded-full border border-lavender/40 px-4 py-2 text-sm font-medium hover:bg-lavender/15"
          >
            Full archive <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 divide-y divide-border/70 border-y border-border/70">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={i * 0.04}>
            <Link
              to="/craft"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 transition-colors hover:bg-lavender/10"
              data-cursor="hover"
            >
              <span className="font-mono text-xs tabular-nums text-lavender">0{i + 1}</span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  <h3 className="truncate font-display text-2xl tracking-tight transition-colors sm:text-3xl">
                    {it.name}
                  </h3>
                  <span className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground sm:inline">
                    · {it.tag}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{it.note}</p>
              </div>
              <ArrowUpRight
                className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lavender"
                size={20}
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ThoughtStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-lavender/30 bg-gradient-to-br from-lavender/20 via-pink-100/30 to-sky-100/20 p-10 sm:p-16 dark:from-lavender/15 dark:via-pink-500/5 dark:to-sky-500/5">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lavender/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
          <Sparkles className="text-lavender" size={20} />
          <p className="mt-6 max-w-3xl font-display text-3xl leading-[1.15] tracking-tight text-balance sm:text-5xl">
            “My favourite product conversations usually start with a quiet
            <span className="italic text-lavender"> ‘why?’</span>, and end with a UI detail I can’t stop tweaking.”
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Because beyond functionality and usability, I also have a soft spot for how it looks.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
