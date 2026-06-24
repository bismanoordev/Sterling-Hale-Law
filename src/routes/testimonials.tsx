import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Star, Quote, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Sterling & Hale Law" },
      { name: "description", content: "Hear from the clients we've helped. Real stories from real people who trusted Sterling & Hale Law." },
      { property: "og:title", content: "Client Testimonials — Sterling & Hale Law" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const testimonials = [
  { q: "They turned the worst time of my life into something manageable. I always knew what was happening with my case.", a: "Sarah M.", case: "Personal Injury" },
  { q: "Professional, responsive, and genuinely caring. They got me far more than I expected.", a: "James T.", case: "Business Litigation" },
  { q: "I felt heard from day one. I'd recommend Sterling & Hale to anyone going through something difficult.", a: "Maria L.", case: "Family Law" },
  { q: "Sterling & Hale handled my case with precision and compassion. The outcome was beyond what I hoped for.", a: "Robert K.", case: "Medical Malpractice" },
  { q: "They kept me informed every step of the way. No surprises, no confusion — just results.", a: "Angela P.", case: "Employment Law" },
  { q: "After my accident I didn't know where to turn. Sterling & Hale took care of everything and fought hard for me.", a: "David W.", case: "Auto Accident" },
  { q: "Honest, straightforward, and incredibly effective. They treated my case like it was their own.", a: "Linda C.", case: "Estate Planning" },
  { q: "I was nervous about the process but they made it simple to understand. Highly recommended.", a: "Thomas B.", case: "Real Estate" },
  { q: "Exceptional service from start to finish. My family is so grateful for everything they did.", a: "Grace H.", case: "Family Law" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function Testimonials() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-[var(--color-navy-deep)] text-[var(--color-cream)] pt-40 pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            className="lg:col-span-7"
            variants={stagger} initial="hidden" animate="show"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-6">Client Stories</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              What our clients<br /><em className="text-[var(--color-gold)] not-italic">say about us.</em>
            </motion.h1>
          </motion.div>
          <motion.p
            className="lg:col-span-5 text-lg text-[var(--color-cream)]/75 leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            We measure our success by the people we've helped. Here are some of their stories.
          </motion.p>
        </div>
      </section>

      {/* Rating Strip */}
      <section className="py-12">
        <motion.div
          className="container-x flex flex-row items-center justify-center gap-10 text-center"
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <div className="font-display text-5xl text-[var(--color-gold)]">4.9</div>
            <div className="flex gap-0.5 justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
            <div className="text-sm text-[var(--color-navy-deep)]/70 mt-1">Average Rating</div>
          </motion.div>
          <div className="w-px h-16 bg-[var(--color-navy-deep)]/20" />
          <motion.div variants={fadeUp}>
            <div className="font-display text-5xl text-[var(--color-gold)]">200+</div>
            <div className="text-sm text-[var(--color-navy-deep)]/70 mt-1">Client Reviews</div>
          </motion.div>
          <div className="w-px h-16 bg-[var(--color-navy-deep)]/20" />
          <motion.div variants={fadeUp}>
            <div className="font-display text-5xl text-[var(--color-gold)]">98%</div>
            <div className="text-sm text-[var(--color-navy-deep)]/70 mt-1">Client Satisfaction</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <motion.div
            className="max-w-2xl mb-16"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true, margin: "-80px" }}
          >
            <p className="eyebrow mb-6">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight">
              Real people. Real outcomes.
            </h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: "-60px" }}
          >
            {testimonials.map((t) => (
              <motion.figure
                key={t.a} variants={fadeUp}
                className="bg-secondary rounded-lg p-8 flex flex-col"
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Quote className="w-8 h-8 text-[var(--color-gold)] mb-4" />
                <blockquote className="text-[var(--color-navy-deep)] leading-relaxed mb-6 flex-1">"{t.q}"</blockquote>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <figcaption className="font-display text-lg text-[var(--color-navy-deep)]">{t.a}</figcaption>
                    <span className="text-xs text-[var(--color-gold)] font-medium uppercase tracking-widest">{t.case}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                    ))}
                  </div>
                </div>
              </motion.figure>
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
          <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to become our next success story?</h2>
          <p className="text-[var(--color-cream)]/75 mb-8">Your first consultation is free and completely confidential.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Request a Free Consultation</Link>
            <a href="tel:5551234567" className="btn-outline-light"><Phone className="w-4 h-4" /> (555) 123-4567</a>
          </div>
        </div>
      </motion.section>
    </SiteLayout>
  );
}
