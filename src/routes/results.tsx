import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { motion } from "framer-motion";
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
  { category: "Personal Injury", amount: "$4.2M", desc: "Catastrophic injury settlement for a construction worker injured on-site due to employer negligence." },
  { category: "Medical Malpractice", amount: "$2.8M", desc: "Verdict for a family whose loved one suffered permanent harm due to a surgical error." },
  { category: "Business Litigation", amount: "$1.5M", desc: "Breach of contract recovery for a mid-size business after a major vendor failed to perform." },
  { category: "Auto Accident", amount: "$875K", desc: "Settlement for a client who suffered spinal injuries in a multi-vehicle collision." },
  { category: "Wrongful Termination", amount: "$620K", desc: "Recovery for an employee wrongfully dismissed after 12 years of service." },
  { category: "Premises Liability", amount: "$540K", desc: "Settlement for a client injured due to unsafe property conditions at a commercial establishment." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function Results() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-[var(--color-navy-deep)] text-[var(--color-cream)] pt-40 pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            className="lg:col-span-7"
            variants={stagger} initial="hidden" animate="show"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-6">Our Track Record</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Results that<br /><em className="text-[var(--color-gold)] not-italic">speak for themselves.</em>
            </motion.h1>
          </motion.div>
          <motion.p
            className="lg:col-span-5 text-lg text-[var(--color-cream)]/75 leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            For over 15 years, we've fought to get our clients the outcomes they deserve. Numbers don't tell the full story — but they're a start.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white text-[var(--color-navy-deep)]">
        <motion.div
          className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true, margin: "-60px" }}
        >
          {stats.map((s) => (
            <motion.div key={s.l} variants={fadeUp} className="border-t-2 border-[var(--color-navy-deep)]/20 pt-6">
              <div className="font-display text-5xl md:text-6xl text-[var(--color-gold)] mb-2">{s.n}</div>
              <div className="text-sm text-[var(--color-navy-deep)]/60">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Case Results */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <motion.div
            className="max-w-2xl mb-16"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true, margin: "-80px" }}
          >
            <p className="eyebrow mb-6">Notable Cases</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight">
              Real cases. Real outcomes.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Past results do not guarantee future outcomes. Every case is unique. These examples reflect the dedication and effort we bring to every client we serve.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-60px" }}
          >
            {cases.map((c, i) => (
              <motion.div
                key={c.amount}
                variants={fadeUp}
                custom={i}
                className="border border-border rounded-lg p-8 flex flex-col gap-4"
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">{c.category}</span>
                <div className="font-display text-4xl text-[var(--color-navy-deep)]">{c.amount}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-24 bg-[var(--color-navy-deep)] text-[var(--color-cream)] text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}
      >
        <div className="container-x max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Your case could be next.</h2>
          <p className="text-[var(--color-cream)]/75 mb-8">Free consultation — no fees unless we win.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Request a Free Consultation</Link>
            <a href="tel:5551234567" className="btn-outline-light"><Phone className="w-4 h-4" /> (555) 123-4567</a>
          </div>
        </div>
      </motion.section>
    </SiteLayout>
  );
}
