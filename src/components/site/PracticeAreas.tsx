import { Link } from "@tanstack/react-router";
import { HeartPulse, Users, Briefcase, Scroll, Shield, Home, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const PRACTICE_AREAS = [
  { slug: "personal-injury", title: "Personal Injury", icon: HeartPulse,
    desc: "Injured because of someone else's negligence? We help you recover the compensation you deserve." },
  { slug: "family-law", title: "Family Law", icon: Users,
    desc: "Divorce, custody, and family matters handled with care and discretion." },
  { slug: "business-law", title: "Business Law", icon: Briefcase,
    desc: "Protect and grow your business with trusted legal guidance." },
  { slug: "estate-planning", title: "Estate Planning", icon: Scroll,
    desc: "Secure your family's future with wills, trusts, and clear planning." },
  { slug: "criminal-defense", title: "Criminal Defense", icon: Shield,
    desc: "Facing charges? We protect your rights at every step." },
  { slug: "real-estate", title: "Real Estate Law", icon: Home,
    desc: "Smooth, secure property transactions and dispute resolution." },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function PracticeAreaGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PRACTICE_AREAS.map(({ slug, title, icon: Icon, desc }, i) => (
        <motion.div
          key={slug}
          variants={cardVariants}
          custom={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link
            to="/practice-areas"
            className="group relative bg-white border border-border rounded-lg p-8 flex flex-col h-full transition-all hover:border-[var(--color-gold)] hover:shadow-[0_20px_50px_-20px] hover:shadow-[var(--color-navy)]/25"
          >
            <div className="w-12 h-12 rounded flex items-center justify-center bg-[var(--color-navy)]/5 text-[var(--color-navy)] group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy-deep)] transition-colors mb-6">
              <Icon className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl text-[var(--color-navy-deep)] mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-navy)] group-hover:text-[var(--color-gold)] mt-auto">
              Learn more <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
