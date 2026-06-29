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

type Project = {
  n: string;
  name: string;
  role: string;
  overview: string;
  problem: string;
  process: string;
  outcome: string;
  link?: { href: string; label: string };
};

const projects: Project[] = [
  {
    n: "01",
    name: "NayaPay Business Portal",
    role: "Associate Product Manager · Web",
    overview:
      "Web operations hub for NayaPay Business merchants. Spearheaded the Sales module (invoicing and payment links) end to end and shipped Transactions, Approvals and Merchant Payments integrating major partners like StormFiber, Fly Jinnah and M-Tag. Also led the rebranding of major modules across the portal and contributed to Disbursements as an upcoming feature.",
    problem:
      "Business owners and teams, from sole proprietors to LLP and partnership setups, small businesses to enterprise level, were looking for one calm place to manage expenses, bills, invoicing, business cards and team usage. They needed a proper approval hierarchy and defined user roles like admin, finance, sales and approver, each with the right functions, without the heaviness of legacy banking dashboards.",
    process:
      "Market research, competitor teardowns, 50+ Figma wireframes mapping user flows across modules, detailed PRDs, prioritisation in Redmine across 100+ tickets, Notion for documentation and Excel for data analysis, with weekly partnership across design, dev and marketing.",
    outcome:
      "Sales shipped from scratch including research, wireframes, launch and testing. Rigorous iteration across most modules, a portal-wide rebrand, more merchants onboarded, and the product moved noticeably closer to going live for business.",
    link: {
      href: "https://www.nayapay.com/business",
      label: "Product overview · NayaPay Business",
    },
  },
  {
    n: "02",
    name: "NayaPay Business App",
    role: "Associate Product Manager · Mobile",
    overview:
      "A more accessible form of the portal, on the phone. Shipped every module from scratch including dashboard, sign up, onboarding, splash screen, transactions, cards and approvals, with detailed PRDs and tickets.",
    problem:
      "Once merchants signed up on the portal, they needed quick approvals, a fast review of transactions and a clean overview of expense management while on the go. Core functionality like onboarding stayed on the portal, but the app had to make the daily essentials feel one tap away.",
    process:
      "Mobile first rethinking of the core flows, wireframes, prioritised backlog, alpha cohorts and post launch listening with the team.",
    outcome:
      "A native feeling companion app with thoughtful empty states, quick actions for approvals and review, and microcopy that quietly builds trust between sessions.",
  },
  {
    n: "03",
    name: "Inspire CRM User Journeys",
    role: "Business Analyst · Ignite Labs",
    overview:
      "End to end CRM journeys for sales and support, built around the people doing the work, not the org chart.",
    problem:
      "Workflows were jumping between tools and tabs. Information was getting lost between handoffs.",
    process:
      "Stakeholder interviews, swimlane maps, feature definition, UX recommendations with engineering.",
    outcome:
      "Cleaner workflows, fewer handoff bugs, and a CRM that finally matched how the team actually worked.",
  },
  {
    n: "04",
    name: "Revamping SureCompute Website",
    role: "Product · Brand · IA",
    overview:
      "Full reimagining of the SureCompute marketing site, content strategy, IA, SEO and a refreshed brand surface.",
    problem:
      "A growing company stuck behind a website that no longer reflected what they did, with no real story for their plans or services.",
    process:
      "Competitor analysis of Hostinger and similar services, proper SEO pass, wireframing and ideation on Figma, sitting with designers to modify the look and feel of the UI, and designing the pricing plans UI as a new feature from scratch before handing it over for refinement.",
    outcome:
      "A site that actually invites people in, a clearer pricing story, and a brand surface sales can finally point to.",
  },
  {
    n: "05",
    name: "Dua Pal",
    role: "Side project · Flutter",
    overview:
      "A gentle daily companion for duas built in Flutter with Firebase and Riverpod. Favourites, a thought journal, Islamic reminders and audio playback, wrapped in calm typography and generous spacing.",
    problem:
      "Most spiritual apps feel like productivity tools wearing different clothes.",
    process:
      "Personal research, mood boards, wireframes, Flutter + Firestore build, slow iteration.",
    outcome:
      "A small, careful product I’m proud of, with a quiet, opinionated feel to it.",
    link: {
      href: "https://www.linkedin.com/posts/minalsarwar_flutter-firebase-firestore-ugcPost-7205272041405460480-h1ig/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyNRgoBopDRxNbqIwIDVfiRIY_j7ZmyQYk",
      label: "See the Dua Pal build on LinkedIn",
    },
  },
  {
    n: "06",
    name: "DhikrBloom",
    role: "Side project · AI vibe code",
    overview:
      "A personal AI vibe coded dhikr counter. Switchable colour themes, custom dhikrs, a soft ripple when you tap the centre, and a celebratory confetti moment when you hit your target.",
    problem:
      "Counters are functional. Habits are emotional.",
    process:
      "Concept sketches, AI assisted prototyping, motion studies, and a lot of small interaction polish.",
    outcome:
      "A reminder that delight isn’t decoration, it’s the reason people come back.",
    link: {
      href: "https://dhikr-bloom.vercel.app/",
      label: "Try DhikrBloom",
    },
  },
];

function CraftPage() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-12 sm:pt-48">
        <Reveal>
          <SectionLabel>Things I’ve built</SectionLabel>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-tight text-balance">
            Craft,
            <span className="italic bg-gradient-to-r from-lavender via-pink-400 to-sky-400 bg-clip-text text-transparent"> the work, in its own words</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A small but honest archive. Each card has space for the overview,
            the problem, the process and the outcome.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <ul className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.03}>
              <article
                className="group relative overflow-hidden rounded-[2rem] border border-lavender/20 bg-card p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-lavender/40 hover:shadow-float sm:p-10"
                data-cursor="hover"
              >
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "color-mix(in oklab, var(--lavender) 60%, transparent)" }}
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-lavender">
                    Project · {p.n}
                  </span>
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

                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-lavender underline decoration-lavender/40 decoration-2 underline-offset-4 transition-colors hover:decoration-lavender"
                  >
                    {p.link.label} <ArrowUpRight size={14} />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16">
          <div className="rounded-3xl border border-lavender/30 bg-gradient-to-br from-lavender/20 via-pink-100/30 to-sky-100/20 p-8 dark:from-lavender/15 dark:via-pink-500/5 dark:to-sky-500/5">
            <p className="max-w-xl font-display text-2xl tracking-tight sm:text-3xl">
              Interested in diving deeper or hearing the longer story?
              <span className="text-muted-foreground"> Reach out and I’ll happily walk you through.</span>
            </p>
          </div>
        </Reveal>
      </section>
    </PageWrap>
  );
}

function Field({ term, desc }: { term: string; desc: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-lavender">
        {term}
      </dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-foreground/80">{desc}</dd>
    </div>
  );
}
