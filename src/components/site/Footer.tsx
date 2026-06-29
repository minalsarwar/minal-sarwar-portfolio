import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-gradient-to-br from-background via-lavender/5 to-pink-50/30 dark:to-pink-500/5">
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-lavender/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-200/30 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-[1.1] tracking-tight text-balance sm:text-4xl">
              Have an interesting product problem or opportunity?
              <span className="bg-gradient-to-r from-lavender via-pink-400 to-sky-400 bg-clip-text text-transparent"> I’d love to hear about it.</span>
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Get in touch <ArrowUpRight size={14} />
            </Link>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-lavender">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/minalsarwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1wNY9-R5WT5z5MReCXk9gaR9yg00tDrjl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Resume <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Minal.</p>
          <p className="font-mono">v 1.0 · made with curiosity</p>
        </div>
      </div>
    </footer>
  );
}
