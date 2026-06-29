import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, Reveal, SectionLabel } from "../components/site/Reveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Minal" },
      { name: "description", content: "Work experience across NayaPay, Foodpanda and Ignite Labs in product, data and business analysis." },
      { property: "og:title", content: "Experience — Minal" },
      { property: "og:description", content: "Three roles, one through line: making complex things feel obvious." },
    ],
  }),
  component: ExperiencePage,
});

const roles = [
  {
    company: "NayaPay",
    role: "Associate Product Manager",
    range: "2024 to 2025",
    summary:
      "Shipped B2B fintech products for NayaPay Business across web and mobile, owning discovery through launch.",
    pillars: [
      "Product strategy",
      "User research",
      "Wireframes",
      "PRDs",
      "Cross functional collaboration",
      "Product launches",
      "Testing & iteration",
    ],
  },
  {
    company: "Foodpanda",
    role: "Data Analytics Intern",
    range: "Summer 2023",
    summary:
      "Worked on automation and image quality detection across the menu catalogue, turning messy ops data into decisions.",
    pillars: [
      "Python & Selenium automation",
      "Duplicate image detection",
      "Analytical problem solving",
    ],
  },
  {
    company: "Ignite Labs",
    role: "Business Analyst Intern",
    range: "Summer 2023",
    summary:
      "Defined product features and end to end CRM journeys with the team, first taste of what product would later become.",
    pillars: [
      "Feature definition",
      "User journeys",
      "CRM workflows",
      "UX improvements",
    ],
  },
];

function ExperiencePage() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-16 sm:pt-48">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-tight text-balance">
            Three rooms,
            <span className="italic bg-gradient-to-r from-lavender to-pink-400 bg-clip-text text-transparent"> one through line</span>.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <ol className="relative">
          <div className="pointer-events-none absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-lavender via-lavender/50 to-transparent sm:left-6" />
          {roles.map((r, i) => (
            <li key={r.company} className="relative pl-12 sm:pl-20">
              <Reveal y={28}>
                <span className="absolute left-[10px] top-3 grid h-4 w-4 place-items-center rounded-full border border-lavender/60 bg-background sm:left-[18px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-lavender" />
                </span>

                <div className="grid gap-6 pb-16 sm:grid-cols-[1fr_1.4fr] sm:gap-12">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-lavender">
                      {r.range}
                    </p>
                    <h2 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
                      {r.company}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{r.role}</p>
                  </div>

                  <div>
                    <p className="text-lg leading-relaxed text-foreground/85">
                      {r.summary}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {r.pillars.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-lavender/30 bg-card px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-lavender hover:bg-lavender/15"
                          data-cursor="hover"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {i < roles.length - 1 && (
                  <div className="absolute left-0 right-0 h-px bg-border/60" style={{ bottom: 0 }} />
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
    </PageWrap>
  );
}
