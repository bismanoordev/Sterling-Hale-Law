import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PracticeAreaGrid } from "@/components/site/PracticeAreas";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Sterling & Hale Law" },
      { name: "description", content: "Personal injury, family law, business, estate planning, criminal defense, and real estate. Find the right legal help for your situation." },
      { property: "og:title", content: "Practice Areas — Sterling & Hale Law" },
      { property: "og:description", content: "Six core practice areas. One trusted firm. Free consultation." },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreasPage,
});

const handles = [
  "Car & truck accidents",
  "Slip and fall injuries",
  "Medical malpractice",
  "Workplace injuries",
  "Wrongful death",
];

const whyUs = [
  "No fee unless we win your case",
  "Free, no-pressure consultation",
  "We deal with insurance companies, so you don't have to",
  "Personal attention from an experienced attorney",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function PracticeAreasPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-[var(--color-navy-deep)] text-[var(--color-cream)] pt-40 pb-24">
        <div className="container-x max-w-4xl">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="eyebrow mb-6">Practice Areas</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              One firm. <em className="text-[var(--color-gold)] not-italic">Six core practices.</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-[var(--color-cream)]/75 mt-6 max-w-2xl leading-relaxed">
              Whatever you're facing, we likely have an attorney who's handled it before — and won.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <PracticeAreaGrid />
        </div>
      </section>

      {/* Featured: Personal Injury */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="eyebrow mb-6">Featured: Personal Injury</p>
              <h2 className="font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight mb-6">
                Personal injury attorneys who fight for full compensation.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                An injury can change everything — your health, your income, your peace of mind. If someone else's negligence caused your injury, you shouldn't have to pay the price. We help you recover the compensation you need to move forward.
              </p>
              <h3 className="font-display text-xl text-[var(--color-navy-deep)] mt-10 mb-4">We handle</h3>
              <motion.ul
                className="grid sm:grid-cols-2 gap-3"
                variants={stagger} initial="hidden"
                whileInView="show" viewport={{ once: true }}
              >
                {handles.map((h) => (
                  <motion.li key={h} variants={fadeUp} className="flex items-start gap-2 text-[var(--color-navy-deep)]">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" strokeWidth={2} />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.aside
              className="lg:col-span-5 bg-[var(--color-navy-deep)] text-[var(--color-cream)] rounded-lg p-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h3 className="font-display text-2xl mb-6">Why choose us</h3>
              <ul className="space-y-4">
                {whyUs.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-[var(--color-cream)]/85">{w}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[var(--color-cream)]/70 text-sm leading-relaxed">
                Injured and unsure what to do next? It costs nothing to find out where you stand.
              </p>
              <Link to="/contact" className="btn-gold mt-6 w-full">Request a Free Consultation</Link>
            </motion.aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
