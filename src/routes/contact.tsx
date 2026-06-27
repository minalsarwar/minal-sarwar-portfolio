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
  const email = "hello@minal.design";
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <PageWrap>
      <section className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 pt-40 pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--lavender)_22%,transparent),transparent_60%)]" />

        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="max-w-5xl font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.98] tracking-tight text-balance">
            Have an interesting product problem
            <span className="italic text-muted-foreground"> or opportunity?</span>
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
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              data-cursor="hover"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-20">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "LinkedIn", value: "in/minal", href: "#" },
              { label: "Read.cv", value: "read.cv/minal", href: "#" },
              { label: "Twitter", value: "@minal", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-float"
                data-cursor="hover"
              >
                <div className="flex items-start justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {c.label}
                  </p>
                  <ArrowUpRight size={16} className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-8 font-display text-2xl tracking-tight">{c.value}</p>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.35} className="mt-16">
          <p className="max-w-xl text-sm text-muted-foreground">
            Currently based in Karachi · Open to thoughtful product roles,
            coffee chats and the occasional brain-pick about fintech UX.
          </p>
        </Reveal>
      </section>
    </PageWrap>
  );
}
