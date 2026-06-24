import { Link } from "@tanstack/react-router";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

const areas = [
  "Personal Injury",
  "Family Law",
  "Business Law",
  "Estate Planning",
  "Criminal Defense",
  "Real Estate Law",
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy-deep)] text-[var(--color-cream)]/80">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 text-[var(--color-cream)] mb-4">
            <Scale className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.5} />
            <span className="font-display text-xl">Sterling &amp; Hale</span>
          </div>
          <p className="text-sm leading-relaxed">
            Trusted legal counsel for individuals, families, and businesses since 2008.
          </p>
        </div>

        <div>
          <h4 className="text-[var(--color-cream)] text-sm font-semibold tracking-widest uppercase mb-4">
            Practice Areas
          </h4>
          <ul className="space-y-2 text-sm">
            {areas.map((a) => (
              <li key={a}>
                <Link to="/practice-areas" className="hover:text-[var(--color-gold)] transition-colors">
                  {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[var(--color-cream)] text-sm font-semibold tracking-widest uppercase mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[var(--color-gold)]">About Us</Link></li>
            <li><Link to="/practice-areas" className="hover:text-[var(--color-gold)]">Practice Areas</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-gold)]">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-gold)]">Free Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[var(--color-cream)] text-sm font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[var(--color-gold)] shrink-0" /> 1200 Market Street, Suite 800</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[var(--color-gold)] shrink-0" /> (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[var(--color-gold)] shrink-0" /> contact@sterlinghale.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="max-w-3xl text-[var(--color-cream)]/50">
            This website is for informational purposes only and does not constitute legal advice.
            © {new Date().getFullYear()} Sterling &amp; Hale Law. All rights reserved.
          </p>
          <p className="text-[var(--color-cream)]/40">Demo project designed &amp; built by Bisma Noor</p>
        </div>
      </div>
    </footer>
  );
}
