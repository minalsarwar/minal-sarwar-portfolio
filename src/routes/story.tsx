import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, Reveal, SectionLabel } from "../components/site/Reveal";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Story — Minal" },
      { name: "description", content: "From Computer Science at IBA Karachi to shipping products at NayaPay, the long way into product." },
      { property: "og:title", content: "Story — Minal" },
      { property: "og:description", content: "A visual timeline of how Minal arrived at product management." },
    ],
  }),
  component: StoryPage,
});

const chapters = [
  {
    year: "2020 to 2024",
    title: "Computer Science",
    place: "IBA Karachi",
    body:
      "Four years of code, late night front end tinkering and a soft spot for design systems. I learned that the gap between an idea and a useful product is almost always interface.",
    accent: "From the terminal to the canvas.",
    image: "https://msfinance.iba.edu.pk/images/16.jpg",
  },
  {
    year: "Summer · 2023",
    title: "Business Analyst Intern",
    place: "Ignite Labs",
    body:
      "My first taste of product. Mapping user journeys, defining requirements, and learning that ‘obvious’ is the hardest thing to design for.",
    accent: "First time saying ‘why?’ in a meeting.",
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQFNnkxz4BjNSw/company-logo_200_200/company-logo_200_200/0/1630607600261/ignite_labs_pk_logo?e=2147483647&v=beta&t=8PLhkNbJCf-dfAcalXkUUjR6usNSi6rhc19ZaPi225Y",
    contain: true,
  },
  {
    year: "Summer · 2023",
    title: "Data Analytics Intern",
    place: "Foodpanda",
    body:
      "Automated duplicate image detection across thousands of restaurant menus and dug into operational signals. Numbers stopped being scary and started being useful.",
    accent: "Where I learned to trust the dashboard, gently.",
    image: "https://logos-world.net/wp-content/uploads/2021/02/Foodpanda-Logo.png",
    contain: true,
  },
  {
    year: "Final Year · 2024",
    title: "Fraud Mitigation in Foodpanda",
    place: "Final Year Project",
    body:
      "Built a fraud detection system using image analysis and semi supervised ML on 700,000+ unlabeled entries. Used Vision Transformers, VGGNet and ResNet to flag duplicate refund images and cut financial losses.",
    accent: "Suspicious patterns are interesting patterns.",
    image: "https://www.foodpanda.com/wp-content/uploads/2023/07/FOODPANDA_exploring.png",
  },
  {
    year: "2024 to 2025",
    title: "Associate Product Manager",
    place: "NayaPay",
    body:
      "Shipped B2B fintech for NayaPay Business across web and mobile. PRDs, user research, prioritisation, launches, and the small satisfying details in between.",
    accent: "Where everything quietly clicked into place.",
    image: "https://www.nayapay.com/images/rebrand/meta-image-2.png",
  },
  {
    year: "Next",
    title: "The next chapter…",
    place: "TBD",
    body:
      "Something that asks better questions. Something that takes craft seriously. Coffee chats welcome.",
    accent: "To be continued.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQH9uIQNd_kMAg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1688675969171?e=2147483647&v=beta&t=SvkewI47pyJchqmarZUOoLE_otAMI4sfvIQpVYuxa0w",
  },
];

function StoryPage() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-16 sm:pt-48">
        <Reveal>
          <SectionLabel>Chapter by chapter</SectionLabel>
          <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-tight text-balance">
            The story so far,
            <span className="italic bg-gradient-to-r from-lavender via-pink-400 to-sky-400 bg-clip-text text-transparent"> told as a few honest chapters</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A non linear path, in roughly linear order. Each card is a small
            moment that nudged me closer to product.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="relative">
          <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-lavender/40 to-transparent sm:left-1/2 sm:block" />

          <ul className="space-y-12 sm:space-y-20">
            {chapters.map((c, i) => {
              const left = i % 2 === 0;
              return (
                <li key={c.title} className="relative">
                  <div className={`grid gap-6 sm:grid-cols-2 sm:gap-12 ${left ? "" : "sm:[&>*:first-child]:order-2"}`}>
                    <div className={`sm:px-2 ${left ? "sm:text-right" : ""}`}>
                      <Reveal y={30}>
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-lavender">
                          {c.year}
                        </p>
                        <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
                          {c.title}
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">{c.place}</p>
                        <p className="mt-4 text-base leading-relaxed text-foreground/80">
                          {c.body}
                        </p>
                        <p className="mt-3 font-display text-lg italic text-lavender">
                          {c.accent}
                        </p>
                      </Reveal>
                    </div>

                    <Reveal y={30} delay={0.1}>
                      <div
                        className="group relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-lavender/20 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-float"
                        data-cursor="hover"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-lavender/20 via-pink-100/30 to-sky-100/20 dark:from-lavender/15 dark:via-pink-500/5 dark:to-sky-500/5" />
                        <img
                          src={c.image}
                          alt={`${c.title} at ${c.place}`}
                          loading="lazy"
                          className={`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                            c.contain ? "object-contain p-10" : "object-cover"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-foreground/80">
                          <span className="rounded-full bg-background/80 px-2.5 py-1 font-mono uppercase tracking-[0.18em] backdrop-blur">
                            chapter · 0{i + 1}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  <div className="pointer-events-none absolute left-[14px] top-2 hidden h-3 w-3 rounded-full border border-border bg-background sm:left-1/2 sm:block sm:-translate-x-1/2">
                    <span className="absolute inset-[3px] rounded-full bg-lavender" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </PageWrap>
  );
}
