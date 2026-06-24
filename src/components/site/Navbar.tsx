import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Scale } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/results", label: "Results" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-navy-deep)]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5 text-[var(--color-cream)]">
          <Scale className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.5} />
          <span className="font-display text-xl tracking-tight">Sterling &amp; Hale Law</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold">Free Consultation</Link>
        </div>

        <button
          className="lg:hidden text-[var(--color-cream)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--color-navy-deep)] border-t border-white/10">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-[var(--color-cream)]/90 hover:text-[var(--color-gold)] py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-2">
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
