import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sterling & Hale Law" },
      { name: "description", content: "Free, confidential consultation. Reach out to Sterling & Hale Law and we'll respond within 24 hours." },
      { property: "og:title", content: "Contact Sterling & Hale Law" },
      { property: "og:description", content: "Request your free consultation. We respond within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const areas = ["Personal Injury", "Family Law", "Business Law", "Estate Planning", "Criminal Defense", "Real Estate Law", "Other"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-[var(--color-navy-deep)] text-[var(--color-cream)] pt-40 pb-20">
        <div className="container-x max-w-4xl">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="eyebrow mb-6">Contact</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Let's talk about <em className="text-[var(--color-gold)] not-italic">your case.</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-[var(--color-cream)]/75 mt-6 max-w-2xl leading-relaxed">
              Your first consultation is free and confidential. Reach out and we'll respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            {sent ? (
              <motion.div
                className="bg-secondary rounded-lg p-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle2 className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-4" />
                <h2 className="font-display text-3xl text-[var(--color-navy-deep)] mb-3">Message received.</h2>
                <p className="text-muted-foreground">Thanks for reaching out. An attorney will get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone" name="phone" type="tel" />
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-navy-deep)] mb-2">How can we help?</label>
                    <select className="w-full h-12 px-4 rounded border border-input bg-white text-[var(--color-navy-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]" required>
                      <option value="">Select a practice area</option>
                      {areas.map((a) => <option key={a}>{a}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-navy-deep)] mb-2">Message</label>
                  <textarea
                    rows={6} required
                    placeholder="Briefly tell us what's going on..."
                    className="w-full px-4 py-3 rounded border border-input bg-white text-[var(--color-navy-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full sm:w-auto">Request My Free Consultation</button>
                <p className="text-xs text-muted-foreground">Submitting this form does not create an attorney-client relationship.</p>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.aside
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="bg-[var(--color-navy-deep)] text-[var(--color-cream)] rounded-lg p-8">
              <h2 className="font-display text-2xl mb-6">Get in touch</h2>
              <ul className="space-y-5 text-sm">
                <Info icon={MapPin} label="Office" value="1200 Market Street, Suite 800" />
                <Info icon={Phone} label="Phone" value="(555) 123-4567" href="tel:5551234567" />
                <Info icon={Mail} label="Email" value="contact@sterlinghale.com" href="mailto:contact@sterlinghale.com" />
                <Info icon={Clock} label="Hours" value="Mon–Fri 9am–6pm" />
              </ul>
            </div>
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                Map placeholder
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,var(--color-gold)/15%,transparent_50%)]" />
            </div>
          </motion.aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--color-navy-deep)] mb-2">{label}</label>
      <input
        name={name} type={type} required={required}
        className="w-full h-12 px-4 rounded border border-input bg-white text-[var(--color-navy-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
      />
    </div>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const body = (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
      <div>
        <div className="text-[var(--color-cream)]/60 text-xs uppercase tracking-wider mb-0.5">{label}</div>
        <div className="text-[var(--color-cream)]">{value}</div>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="hover:text-[var(--color-gold)]">{body}</a> : body}</li>;
}
