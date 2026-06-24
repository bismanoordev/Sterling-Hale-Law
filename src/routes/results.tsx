import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Sterling & Hale Law" },
      { name: "description", content: "Over $50M recovered for our clients. See the real results Sterling & Hale Law has achieved for individuals, families, and businesses." },
      { property: "og:title", content: "Results — Sterling & Hale Law" },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: Results,
});

const stats = [
  { n: "$50M+", l: "Recovered for clients" },
  { n: "1,000+", l: "Cases handled" },
  { n: "98%", l: "Client satisfaction" },
  { n: "15+", l: "Years of experience" },
];

const cases = [
  {
    category: "Personal Injury",
    amount: "$4.2M",
    desc: "Catastrophic injury settlement for a construction worker injured on-site due to employer negligence.",
  },
  {
    category: "Medical Malpractice",
    amount: "$2.8M",
    desc: "Verdict for a family whose loved one suffered permanent harm due to a surgical error.",
  },
  {
    category: "Business Litigation",
    amount: "$1.5M",
    desc: "Breach of contract recovery for a mid-size business after a major vendor failed to perform.",
  },
  {
    category: "Auto Accident",
    amount: "$875K",
    desc: "Settlement for a client who suffered spinal injuries in a multi-vehicle collision.",
  },
  {
    category: "Wrongful Termination",
    amount: "$620K",
    desc: "Recovery for an employee wrongfully dismissed after 12 years of service.",
  },
  {
    category: "Premises Liability",
    amount: "$540K",
    desc: "Settlement for a client injured due to unsafe property conditions at a commercial establishment.",
  },
];

function Results() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-[var(--color-navy-deep)] text-[var(--color-cream)] pt-40 pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Our Track Record</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Results that<br /><em className="text-[var(--color-gold)] not-italic">speak for themselves.</em>
            </h1>
          </div>
          <p className="lg:col-span-5 text-lg text-[var(--color-cream)]/75 leading-relaxed">
            For over 15 years, we've fought to get our clients the outcomes they deserve. Numbers don't tell the full story — but they're a start.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white text-[var(--color-navy-deep)]">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="border-t-2 border-[var(--color-navy-deep)]/20 pt-6">
              <div className="font-display text-5xl md:text-6xl text-[var(--color-gold)] mb-2">{s.n}</div>
              <div className="text-sm text-[var(--color-navy-deep)]/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Results */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-6">Notable Cases</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight">
              Real cases. Real outcomes.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Past results do not guarantee future outcomes. Every case is unique. These examples reflect the dedication and effort we bring to every client we serve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.amount} className="border border-border rounded-lg p-8 flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">{c.category}</span>
                <div className="font-display text-4xl text-[var(--color-navy-deep)]">{c.amount}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-navy-deep)] text-[var(--color-cream)] text-center">
        <div className="container-x max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Your case could be next.</h2>
          <p className="text-[var(--color-cream)]/75 mb-8">Free consultation — no fees unless we win.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Request a Free Consultation</Link>
            <a href="tel:5551234567" className="btn-outline-light"><Phone className="w-4 h-4" /> (555) 123-4567</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
