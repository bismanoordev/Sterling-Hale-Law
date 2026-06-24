import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-scales.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sterling & Hale Law" },
      { name: "description", content: "Dedicated advocates with real results. Meet the team behind Sterling & Hale Law, serving clients since 2008." },
      { property: "og:title", content: "About Sterling & Hale Law" },
      { property: "og:description", content: "Honest advice, relentless advocacy, and genuine care for our clients since 2008." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const team = [
  { name: "Margaret Sterling", role: "Founding Partner", bio: "20+ years in personal injury and trial litigation. Recognized among top trial attorneys in the state." },
  { name: "David Hale", role: "Partner, Business & Estate", bio: "Helps families and business owners structure their affairs with foresight and care." },
  { name: "Priya Anand", role: "Senior Associate", bio: "Family law and mediation specialist with a calm, solutions-first approach." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-[var(--color-navy-deep)] text-[var(--color-cream)] pt-40 pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            className="lg:col-span-7"
            variants={stagger} initial="hidden" animate="show"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-6">About the Firm</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Dedicated advocates.<br /><em className="text-[var(--color-gold)] not-italic">Real results.</em>
            </motion.h1>
          </motion.div>
          <motion.p
            className="lg:col-span-5 text-lg text-[var(--color-cream)]/75 leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Founded on a simple belief: everyone deserves a lawyer who truly fights for them.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <motion.img
            src={aboutImg} alt="Scales of justice"
            className="w-full rounded-lg"
            width={1600} height={1100} loading="lazy"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="eyebrow mb-6">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--color-navy-deep)] mb-6 leading-tight">
              Built on trust. Driven by outcomes.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Sterling &amp; Hale Law was founded on a simple belief: everyone deserves a lawyer who truly fights for them. Since 2008, we've represented hundreds of individuals, families, and businesses across the region — earning a reputation for honest advice, relentless advocacy, and genuine care for our clients.</p>
              <p>We know that behind every case is a real person facing a difficult moment. That's why we take the time to listen, explain your options clearly, and stand by you from the first consultation to the final resolution.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container-x">
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >Our Values</motion.p>
          <motion.div
            className="grid md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-60px" }}
          >
            {[
              { t: "Integrity", d: "We give honest advice, even when it's hard to hear." },
              { t: "Compassion", d: "Every case is personal. So is our approach." },
              { t: "Results", d: "We measure success by outcomes, not hours billed." },
              { t: "Clear Communication", d: "No jargon. No surprises. Just clarity." },
            ].map((v) => (
              <motion.div
                key={v.t} variants={fadeUp}
                className="bg-white p-8"
                whileHover={{ backgroundColor: "#faf8f3", y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <h3 className="font-display text-2xl text-[var(--color-navy-deep)] mb-3">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true, margin: "-80px" }}
          >
            <p className="eyebrow mb-6">The Team</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight mb-14 max-w-2xl">
              Meet the attorneys.
            </h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-60px" }}
          >
            {team.map((m) => (
              <motion.article
                key={m.name} variants={fadeUp}
                className="group"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-deep)] rounded-lg mb-5 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-7xl text-[var(--color-gold)]/40">
                      {m.name.split(" ").map((p) => p[0]).join("")}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-[var(--color-navy-deep)]">{m.name}</h3>
                <p className="text-sm text-[var(--color-gold)] font-medium mb-2">{m.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-20 bg-[var(--color-navy-deep)] text-[var(--color-cream)] text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}
      >
        <div className="container-x max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl mb-6">Ready to talk?</h2>
          <Link to="/contact" className="btn-gold">Request a Free Consultation</Link>
        </div>
      </motion.section>
    </SiteLayout>
  );
}
