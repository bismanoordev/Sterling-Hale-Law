import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, CheckCircle2, Quote } from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";
import integrityImg from "@/assets/integrity-card.jpg";
import compassionImg from "@/assets/compassion-card.jpg";
import resultsImg from "@/assets/Results-card.jpg";
import clearCommImg from "@/assets/clear-communication.jpg";
import { SiteLayout } from "@/components/site/Layout";
import { PracticeAreaGrid } from "@/components/site/PracticeAreas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sterling & Hale Law — Trusted Attorneys Fighting For You" },
      { name: "description", content: "Sterling & Hale Law helps individuals and businesses navigate their toughest legal challenges with clarity, compassion, and results. Free consultation." },
      { property: "og:title", content: "Sterling & Hale Law — Trusted Attorneys" },
      { property: "og:description", content: "Personal injury, family, business, and more. 15+ years experience. $50M+ recovered." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { n: "$50M+", l: "Recovered for clients" },
  { n: "1,000+", l: "Cases handled" },
  { n: "98%", l: "Client satisfaction" },
  { n: "15+", l: "Years of experience" },
];

const steps = [
  { n: "01", t: "Free Consultation", d: "Tell us what happened. We'll listen and explain your options — no cost, no pressure." },
  { n: "02", t: "Your Personalized Plan", d: "We build a clear strategy tailored to your situation." },
  { n: "03", t: "We Fight for You", d: "We handle the legal heavy lifting while keeping you informed." },
  { n: "04", t: "Resolution", d: "We pursue the best possible outcome for you and your family." },
];

const testimonials = [
  { q: "They turned the worst time of my life into something manageable. I always knew what was happening with my case.", a: "Sarah M." },
  { q: "Professional, responsive, and genuinely caring. They got me far more than I expected.", a: "James T." },
  { q: "I felt heard from day one. I'd recommend Sterling & Hale to anyone.", a: "Maria L." },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center text-[var(--color-cream)] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sterling & Hale law office" className="w-full h-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-deep)] via-[var(--color-navy-deep)]/90 to-[var(--color-navy-deep)]/60" />
        </div>
        <div className="container-x relative pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Trusted Attorneys Serving Your City Since 2008</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              When life gets complicated, you deserve a lawyer who <em className="text-[var(--color-gold)] not-italic">fights for you</em>.
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-cream)]/80 leading-relaxed mb-10 max-w-2xl">
              Sterling &amp; Hale Law helps individuals and businesses navigate their toughest legal challenges — with clarity, compassion, and results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Request a Free Consultation</Link>
              <a href="tel:5551234567" className="btn-outline-light"><Phone className="w-4 h-4" /> (555) 123-4567</a>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-[var(--color-navy-deep)]/80 backdrop-blur">
          <div className="container-x py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2"><Star className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" /> <span className="text-[var(--color-cream)]/85">4.9/5 from 200+ clients</span></div>
            <div className="text-[var(--color-cream)]/85">15+ Years Experience</div>
            <div className="text-[var(--color-cream)]/85">$50M+ Recovered</div>
            <div className="text-[var(--color-cream)]/85">No Win, No Fee*</div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-6">Why Sterling &amp; Hale</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight mb-6">
              You don't have to face this alone.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Legal problems are stressful, confusing, and often overwhelming. For over 15 years, our team has guided clients through their most difficult moments — explaining every step in plain language and fighting hard for the outcome they deserve.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Whether you're recovering from an injury, going through a divorce, or protecting your business, we treat your case like it's our own.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg aspect-square overflow-hidden relative">
              <img src={integrityImg} alt="Integrity" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[var(--color-navy-deep)]/40" />
              <div className="absolute bottom-5 left-5 font-display text-xl text-[var(--color-cream)]">Integrity</div>
            </div>
            <div className="rounded-lg aspect-square overflow-hidden relative">
              <img src={compassionImg} alt="Compassion" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[var(--color-navy-deep)]/40" />
              <div className="absolute bottom-5 left-5 font-display text-xl text-[var(--color-cream)]">Compassion</div>
            </div>
            <div className="rounded-lg aspect-square overflow-hidden relative">
              <img src={resultsImg} alt="Results" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[var(--color-navy-deep)]/40" />
              <div className="absolute bottom-5 left-5 font-display text-xl text-[var(--color-cream)]">Results</div>
            </div>
            <div className="rounded-lg aspect-square overflow-hidden relative">
              <img src={clearCommImg} alt="Clear Communication" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[var(--color-navy-deep)]/40" />
              <div className="absolute bottom-5 left-5 font-display text-xl text-[var(--color-cream)]">Clear Communication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-6">Practice Areas</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight">How we can help.</h2>
          </div>
          <PracticeAreaGrid />
          <div className="mt-12 text-center">
            <Link to="/practice-areas" className="btn-outline-dark">View All Practice Areas</Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-6">Our Process</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight">Working with us is simple.</h2>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-4 rounded-lg overflow-hidden border border-border">
            {steps.map((s) => (
              <div key={s.n} className="bg-white p-8">
                <div className="font-display text-5xl text-[var(--color-gold)] mb-6">{s.n}</div>
                <h3 className="font-display text-xl text-[var(--color-navy-deep)] mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="results" className="py-24 bg-[var(--color-navy-deep)] text-[var(--color-cream)]">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-6">Results</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Results that speak for themselves.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.l} className="border-t border-white/15 pt-6">
                <div className="font-display text-5xl md:text-6xl text-[var(--color-gold)] mb-2">{s.n}</div>
                <div className="text-sm text-[var(--color-cream)]/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-6">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight">What our clients say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.a} className="bg-secondary rounded-lg p-8 flex flex-col">
                <Quote className="w-8 h-8 text-[var(--color-gold)] mb-4" />
                <blockquote className="text-[var(--color-navy-deep)] leading-relaxed mb-6 flex-1">"{t.q}"</blockquote>
                <div className="flex items-center justify-between">
                  <figcaption className="font-display text-lg text-[var(--color-navy-deep)]">{t.a}</figcaption>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                    ))}
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[var(--color-navy-deep)] text-[var(--color-cream)] relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
        <div className="container-x relative text-center max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5">
            Get the legal help you deserve — today.
          </h2>
          <p className="text-lg text-[var(--color-cream)]/75 mb-10">
            Your first consultation is free and completely confidential. Let's talk about how we can help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Request a Free Consultation</Link>
            <a href="tel:5551234567" className="btn-outline-light"><Phone className="w-4 h-4" /> (555) 123-4567</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
