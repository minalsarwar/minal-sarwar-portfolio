import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-[1.1] tracking-tight text-balance sm:text-4xl">
              Have an interesting product problem or opportunity?
              <span className="text-muted-foreground"> I’d love to hear about it.</span>
            </p>
            <a
              href="mailto:hello@minal.design"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline decoration-lavender decoration-2 underline-offset-4 hover:decoration-foreground"
            >
              hello@minal.design <ArrowUpRight size={14} />
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Navigate</p>
            <ul className="space-y-2 text-sm">
              {[
                ["/story", "Story"],
                ["/brain", "Product Brain"],
                ["/experience", "Experience"],
                ["/craft", "Craft"],
                ["/skills", "Skills"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              <li><a className="text-muted-foreground hover:text-foreground" href="#">LinkedIn</a></li>
              <li><a className="text-muted-foreground hover:text-foreground" href="#">Read.cv</a></li>
              <li><a className="text-muted-foreground hover:text-foreground" href="#">Twitter</a></li>
              <li><a className="text-muted-foreground hover:text-foreground" href="#">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Minal. Designed and built with care in Karachi.</p>
          <p className="font-mono">v 1.0 · made with curiosity</p>
        </div>
      </div>
    </footer>
  );
}
