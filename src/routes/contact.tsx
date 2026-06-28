import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { PageWrap, Reveal, SectionLabel } from "../components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Minal" },
      { name: "description", content: "Have an interesting product problem or opportunity? Let’s talk." },
      { property: "og:title", content: "Contact — Minal" },
      { property: "og:description", content: "A quiet inbox, always open for thoughtful product conversations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const email = "minalsarwar51@gmail.com";
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const links = [
    {
      label: "LinkedIn",
      value: "in/minalsarwar",
      href: "https://www.linkedin.com/in/minalsarwar/",
    },
    {
      label: "Resume",
      value: "View on Drive",
      href: "https://drive.google.com/file/d/1wNY9-R5WT5z5MReCXk9gaR9yg00tDrjl/view?usp=sharing",
    },
  ];

  return (
    <PageWrap>
      <section className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 pt-40 pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--lavender)_30%,transparent),transparent_60%)]" />
        <div className="pointer-events-none absolute right-0 top-40 -z-10 h-[360px] w-[360px] rounded-full bg-pink-300/30 blur-[120px]" />
        <div className="pointer-events-none absolute left-0 bottom-10 -z-10 h-[320px] w-[320px] rounded-full bg-sky-200/30 blur-[120px]" />

        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="max-w-5xl font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.98] tracking-tight text-balance">
            Have an interesting product problem
            <span className="italic bg-gradient-to-r from-lavender via-pink-400 to-sky-400 bg-clip-text text-transparent"> or opportunity?</span>
            <br />
            I’d love to hear about it.
          </h1>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              {email}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-lavender/40 bg-card px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-lavender/15"
              data-cursor="hover"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-lavender/25 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-lavender/50 hover:shadow-float"
                data-cursor="hover"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: "color-mix(in oklab, var(--lavender) 60%, transparent)" }}
                />
                <div className="flex items-start justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-lavender">
                    {c.label}
                  </p>
                  <ArrowUpRight size={16} className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lavender" />
                </div>
                <p className="mt-8 font-display text-2xl tracking-tight">{c.value}</p>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.35} className="mt-16">
          <p className="max-w-xl text-sm text-muted-foreground">
            Currently based in Karachi, Pakistan. Open to thoughtful remote
            product roles anywhere in the world, coffee chats and the occasional
            brain pick about how good products get made.
          </p>
        </Reveal>
      </section>
    </PageWrap>
  );
}
