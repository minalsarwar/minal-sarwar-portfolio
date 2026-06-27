import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, Reveal, SectionLabel } from "../components/site/Reveal";
import {
  Search,
  FileText,
  GitBranch,
  PencilRuler,
  ListChecks,
  Users,
  Rocket,
} from "lucide-react";

export const Route = createFileRoute("/brain")({
  head: () => ({
    meta: [
      { title: "Inside My Product Brain — Minal" },
      { name: "description", content: "A look at how I think — discovery, PRDs, flows, wireframes, prioritisation, collaboration, launch and feedback." },
      { property: "og:title", content: "Inside My Product Brain — Minal" },
      { property: "og:description", content: "Not projects — the way I think about them." },
    ],
  }),
  component: BrainPage,
});

const stages = [
  {
    icon: Search,
    label: "01 · Discovery",
    title: "Product Discovery",
    body: "Market research, competitor teardowns, talking to people who actually use the thing. The shape of the problem before the shape of the solution.",
    bullets: ["Industry & market scans", "Competitor analysis", "Opportunity sizing"],
    accent: false,
  },
  {
    icon: FileText,
    label: "02 · Definition",
    title: "Product Requirement Documents",
    body: "PRDs that engineers actually open. Goals, scope, edge cases, and a clear non-goals section so we stay honest with ourselves.",
    bullets: ["Problem & goals", "Scope & non-goals", "Acceptance criteria"],
    accent: true,
  },
  {
    icon: GitBranch,
    label: "03 · Flow",
    title: "User Flows",
    body: "Mapping the path from intent to outcome — including the rough days, the empty states, and the moments people will inevitably tap twice.",
    bullets: ["Happy + edge paths", "Empty + error states", "Cross-platform parity"],
    accent: false,
  },
  {
    icon: PencilRuler,
    label: "04 · Shape",
    title: "Wireframes",
    body: "Low-fi sketches that earn their way into Figma. Layout, hierarchy, microcopy — the boring parts that quietly make a product feel right.",
    bullets: ["Layout & hierarchy", "Microcopy first drafts", "Design system alignment"],
    accent: false,
  },
  {
    icon: ListChecks,
    label: "05 · Sequence",
    title: "Prioritisation",
    body: "What ships first, what waits, what gets cut. RICE, value vs effort, or a clear-eyed conversation — whatever helps the team agree.",
    bullets: ["RICE / value vs effort", "Trade-off notes", "Release sequencing"],
    accent: true,
  },
  {
    icon: Users,
    label: "06 · Together",
    title: "Collaboration",
    body: "Working across product, design, marketing and engineering — translating between worlds so the product feels like one voice.",
    bullets: ["Design partnership", "Eng pairing", "Marketing & launch alignment"],
    accent: false,
  },
  {
    icon: Rocket,
    label: "07 · Live",
    title: "Launch, Feedback & Testing",
    body: "Soft launches, monitoring, listening. A launch is the start of the conversation, not the end.",
    bullets: ["Phased rollouts", "Telemetry & feedback loops", "Iteration cadence"],
    accent: false,
  },
];

function BrainPage() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-16 sm:pt-48">
        <Reveal>
          <SectionLabel>How I think</SectionLabel>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-tight text-balance">
            Inside my
            <span className="italic text-muted-foreground"> product brain</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Less of a portfolio, more of a process. Here are the stages I move
            through on most products — with room for the screenshots, PRDs and
            flows that go with each one.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="grid auto-rows-[minmax(280px,auto)] grid-cols-1 gap-4 sm:grid-cols-6">
          {stages.map((s, i) => {
            const Icon = s.icon;
            // Bento sizing pattern
            const span =
              i === 0 ? "sm:col-span-3" :
              i === 1 ? "sm:col-span-3" :
              i === 2 ? "sm:col-span-2" :
              i === 3 ? "sm:col-span-2" :
              i === 4 ? "sm:col-span-2" :
              i === 5 ? "sm:col-span-3" :
              "sm:col-span-3";
            return (
              <Reveal key={s.title} className={span} delay={i * 0.04}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-float sm:p-8 ${
                    s.accent ? "bg-lavender/15" : "bg-card"
                  }`}
                  data-cursor="hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {s.label}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-card text-foreground/70">
                      <Icon size={15} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h2 className="mt-8 font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/80"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Placeholder media area */}
                  <div className="relative mt-6 grow overflow-hidden rounded-2xl border border-dashed border-border/70 bg-background/40">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,color-mix(in_oklab,var(--lavender)_22%,transparent),transparent_60%)]" />
                    <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      space for screenshots
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageWrap>
  );
}
