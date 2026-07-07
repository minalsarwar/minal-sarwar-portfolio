import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CloudRain,
  Camera,
  UtensilsCrossed,
  Sparkles,
  BookOpen,
  Sparkle,
  Palette,
  Plane,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageWrap, Reveal, SectionLabel } from "../components/site/Reveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Minal" },
      { name: "description", content: "A floating cloud of skills across product, research, design, analytics, development and tools." },
      { property: "og:title", content: "Skills — Minal" },
      { property: "og:description", content: "What I bring to the table, without the progress bars." },
    ],
  }),
  component: SkillsPage,
});

const groups: { label: string; items: string[]; accent?: boolean }[] = [
  {
    label: "Product",
    items: [
      "Product strategy", "PRDs", "Roadmapping", "Feature prioritisation",
      "User stories", "Product launches", "Stakeholder management", "Testing",
    ],
    accent: true,
  },
  {
    label: "Research",
    items: [
      "User interviews", "Surveys", "Journey mapping",
      "Market research", "Competitive analysis", "Usability testing",
    ],
  },
  {
    label: "Design",
    items: [
      "Wireframing", "User flows", "Information architecture",
      "Interaction design", "Human computer interaction", "Design system thinking",
      "Figma", "Canva", "Adobe Express",
    ],
  },
  {
    label: "Analytics & Data",
    items: [
      "SQL", "Dashboards", "A/B testing", "Power BI", "Tableau",
      "Power Pivot (Excel)", "Knime", "Analysis",
    ],
  },
  {
    label: "Development",
    items: [
      "HTML / CSS", "React", "Python", "Java", "Flutter",
      "Selenium", "MongoDB", "Oracle Apex", "GitHub",
    ],
  },
  {
    label: "Tools",
    items: [
      "Figma", "Notion", "Redmine", "Slack", "Excel",
      "Claude", "Lovable", "ChatGPT", "Cursor",
    ],
    accent: true,
  },
];

function SkillsPage() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-12 sm:pt-48">
        <Reveal>
          <SectionLabel>Skills</SectionLabel>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-tight text-balance">
            A cloud of things I bring,
            <span className="italic bg-gradient-to-r from-lavender via-pink-400 to-sky-400 bg-clip-text text-transparent"> no progress bars</span>.
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
                className={`relative h-full overflow-hidden rounded-3xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-float ${
                  g.accent
                    ? "border-lavender/30 bg-gradient-to-br from-lavender/20 via-pink-100/25 to-card dark:from-lavender/15 dark:via-pink-500/5 dark:to-card"
                    : "border-border/70 bg-card"
                }`}
                data-cursor="hover"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-lavender">
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
                      className="cursor-default rounded-full border border-lavender/25 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-foreground/85 backdrop-blur transition-colors hover:border-lavender hover:bg-lavender/15"
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
            Off the resume,
            <span className="italic bg-gradient-to-r from-lavender to-pink-400 bg-clip-text text-transparent"> and probably more honest</span>.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {([
            [CloudRain, "Rain instantly improves my mood."],
            [Camera, "I enjoy photography and creative edits."],
            [UtensilsCrossed, "Good food has solved more bad days than I’d like to admit."],
            [Sparkles, "I collect anything artsy, crafty, pinteresty, vintage."],
            [BookOpen, "Dark thrillers are a new comfort genre. Gone Girl had me hooked far too late at night."],
            [Sparkle, "New found passion: vibe coding my way through every idea I get."],
            [Palette, "A canvas, some paint, and suddenly I’m an artist for the afternoon. I love painting my emotions out."],
            [Plane, "Lively, a little crazy, very into travelling. Mountains, beaches, in between, count me in."],
          ] as [LucideIcon, string][]).map(([Icon, text], i) => (
            <Reveal key={text} delay={i * 0.04}>
              <div
                className="group relative h-full overflow-hidden rounded-3xl border border-lavender/20 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-lavender/40 hover:shadow-float"
                data-cursor="hover"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lavender/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span
                  className="inline-grid h-11 w-11 place-items-center rounded-2xl text-white shadow-soft"
                  style={{
                    background:
                      "linear-gradient(135deg, #C8B6FF 0%, #F9A8D4 50%, #7DD3FC 100%)",
                  }}
                >
                  <Icon size={20} strokeWidth={2.25} />
                </span>
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
