import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageWrap, Reveal, SectionLabel } from "../components/site/Reveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Minal" },
      { name: "description", content: "A floating cloud of skills across product, research, design, analytics, development and tools." },
      { property: "og:title", content: "Skills — Minal" },
      { property: "og:description", content: "What I bring to the table — without the progress bars." },
    ],
  }),
  component: SkillsPage,
});

const groups: { label: string; items: string[]; accent?: boolean }[] = [
  {
    label: "Product",
    items: [
      "Product strategy", "PRDs", "Roadmapping", "Prioritisation (RICE)",
      "User stories", "OKRs", "Product launches", "Stakeholder management",
    ],
    accent: true,
  },
  {
    label: "Research",
    items: [
      "User interviews", "Surveys", "Journey mapping", "JTBD",
      "Competitive analysis", "Usability testing",
    ],
  },
  {
    label: "Design",
    items: [
      "Wireframing", "User flows", "Information architecture",
      "Interaction design", "Microcopy", "Design system thinking",
    ],
  },
  {
    label: "Analytics",
    items: [
      "SQL", "Mixpanel", "Amplitude", "GA", "Dashboards", "A/B testing", "Cohort analysis",
    ],
  },
  {
    label: "Development",
    items: [
      "HTML / CSS", "JavaScript", "React", "Tailwind", "Python", "Git",
    ],
  },
  {
    label: "Tools",
    items: [
      "Figma", "Notion", "Jira", "Linear", "Miro", "Slack", "Loom",
    ],
  },
];

function SkillsPage() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-12 sm:pt-48">
        <Reveal>
          <SectionLabel>Skills</SectionLabel>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-tight text-balance">
            A cloud of things I bring —
            <span className="italic text-muted-foreground"> no progress bars</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Skills aren’t bars to fill. They’re instincts you sharpen. Here are
            the ones I lean on most.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div
                className={`relative h-full overflow-hidden rounded-3xl border border-border/70 p-6 transition-all hover:-translate-y-0.5 hover:shadow-float ${
                  g.accent ? "bg-lavender/15" : "bg-card"
                }`}
                data-cursor="hover"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Group · {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-3xl tracking-tight">{g.label}</h2>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((skill, idx) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                      className="cursor-default rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-foreground/85 backdrop-blur transition-colors hover:border-lavender/70 hover:bg-lavender/15"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Personal section */}
        <Reveal className="mt-20">
          <SectionLabel>A few things about me</SectionLabel>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Off the resume — and probably more honest.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["🌧️", "Rain instantly improves my mood."],
            ["📱", "I unintentionally analyse every app I use."],
            ["✨", "Tiny UX details make me ridiculously happy."],
            ["📷", "I enjoy photography and creative edits."],
            ["🍝", "Pasta has solved more bad days than I’d like to admit."],
            ["💡", "My favourite product conversations usually start with ‘Why?’"],
          ].map(([emoji, text], i) => (
            <Reveal key={text} delay={i * 0.04}>
              <div
                className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-float"
                data-cursor="hover"
              >
                <span className="text-3xl">{emoji}</span>
                <p className="mt-4 font-display text-xl leading-snug tracking-tight text-balance">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageWrap>
  );
}
