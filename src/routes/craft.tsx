import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageWrap, Reveal, SectionLabel } from "../components/site/Reveal";

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "Craft — Things I’ve built — Minal" },
      { name: "description", content: "Selected product work across fintech, CRM, marketing sites and personal apps." },
      { property: "og:title", content: "Craft — Things I’ve built — Minal" },
      { property: "og:description", content: "NayaPay Business, Inspire CRM, SureCompute, Dua Pal, DhikrBloom." },
    ],
  }),
  component: CraftPage,
});

const projects = [
  {
    n: "01",
    name: "NayaPay Business Portal",
    role: "Associate Product Manager · Web",
    overview: "Web operations hub for merchants and businesses on NayaPay — payments, payouts, team management and reporting.",
    problem: "Owners and operators needed a calm, trustworthy place to run their money — without the heaviness of legacy banking dashboards.",
    process: "Discovery interviews, journey mapping, PRDs, weekly design partnership, phased launches with telemetry.",
    outcome: "Shipped across several releases with improved task completion and visibly fewer support tickets on core flows.",
  },
  {
    n: "02",
    name: "NayaPay Business App",
    role: "Associate Product Manager · Mobile",
    overview: "Mobile companion for owners on the move — quick approvals, real-time activity, push-first updates.",
    problem: "Mobile is where business owners actually live. The portal didn’t feel right on a phone — and shouldn’t.",
    process: "Mobile-first re-thinking of the core flows. Wireframes, prioritised backlog, beta cohorts, post-launch listening.",
    outcome: "A native-feeling app with thoughtful empty states and the kind of microcopy that quietly builds trust.",
  },
  {
    n: "03",
    name: "Inspire CRM User Journeys",
    role: "Business Analyst · Ignite Labs",
    overview: "End-to-end CRM journeys for sales and support — built around the people doing the work, not the org chart.",
    problem: "Workflows were jumping between tools and tabs. Information was getting lost between handoffs.",
    process: "Stakeholder interviews, swimlane maps, feature definition, UX recommendations with engineering.",
    outcome: "Cleaner workflows, fewer handoff bugs, and a CRM that finally matched how the team actually worked.",
  },
  {
    n: "04",
    name: "Revamping SureCompute Website",
    role: "Product · Brand · IA",
    overview: "Full reimagining of the SureCompute marketing site — content strategy, IA and a refreshed brand surface.",
    problem: "A growing company stuck behind a website that no longer reflected what they did.",
    process: "Content audit, IA reshuffle, wireframes, design partnership and a launch plan.",
    outcome: "A site that actually invites people in — and gives sales a story they can point to.",
  },
  {
    n: "05",
    name: "Dua Pal",
    role: "Side project · Concept",
    overview: "A gentle daily companion for duas — calm typography, generous spacing, no streaks shouting at you.",
    problem: "Most spiritual apps feel like productivity tools wearing different clothes.",
    process: "Personal research, mood boards, wireframes, slow iteration.",
    outcome: "A small, careful product I’m proud of even in its quiet form.",
  },
  {
    n: "06",
    name: "DhikrBloom",
    role: "Side project · Concept",
    overview: "Visual dhikr counter that grows a small garden as you remember — softness as a habit loop.",
    problem: "Counters are functional. Habits are emotional.",
    process: "Concept sketches, interaction prototypes, motion studies.",
    outcome: "A reminder that delight isn’t decoration — it’s the reason people come back.",
  },
];

function CraftPage() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-12 sm:pt-48">
        <Reveal>
          <SectionLabel>Things I’ve built</SectionLabel>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-tight text-balance">
            Craft —
            <span className="italic text-muted-foreground"> the work, in its own words</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A small but honest archive. Each card has space for the overview,
            the problem, the process and the outcome — and the screenshots that
            tell the rest.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <ul className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.03}>
              <article
                className="group relative grid overflow-hidden rounded-[2rem] border border-border/70 bg-card transition-all duration-500 hover:-translate-y-0.5 hover:shadow-float sm:grid-cols-[1.05fr_1fr]"
                data-cursor="hover"
              >
                <div className="p-7 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      Project · {p.n}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  </div>

                  <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight sm:text-5xl">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.role}</p>

                  <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                    <Field term="Overview" desc={p.overview} />
                    <Field term="Problem" desc={p.problem} />
                    <Field term="Process" desc={p.process} />
                    <Field term="Outcome" desc={p.outcome} />
                  </dl>
                </div>

                <div className="relative min-h-[280px] overflow-hidden border-t border-border/70 sm:border-l sm:border-t-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--lavender)_28%,transparent),transparent_60%)]" />
                  <div className="absolute inset-0 grain" />
                  <div className="absolute inset-6 rounded-2xl border border-dashed border-border/70 bg-background/40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-[6rem] leading-none tracking-tight text-foreground/10 sm:text-[9rem]">
                      {p.n}
                    </span>
                  </div>
                  <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span>image space</span>
                    <span>coming soon</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16">
          <div className="flex items-center justify-between rounded-3xl border border-border/70 bg-card p-8">
            <p className="max-w-xl font-display text-2xl tracking-tight sm:text-3xl">
              Want to see the case studies in more depth?
              <span className="text-muted-foreground"> Reach out and I’ll walk you through.</span>
            </p>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Get in touch <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageWrap>
  );
}

function Field({ term, desc }: { term: string; desc: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {term}
      </dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-foreground/80">{desc}</dd>
    </div>
  );
}
