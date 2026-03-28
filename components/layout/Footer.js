"use client";
import SpringReveal from "@/components/ui/SpringReveal";
import { fadeUp } from "@/lib/animations";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Starter — ₹5,999", href: "/pricing" },
      { label: "Pro — ₹12,999", href: "/pricing" },
      { label: "Premium — ₹24,999", href: "/pricing" },
      { label: "Care Plans", href: "/pricing#care" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Work", href: "/work" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Lab", href: "/lab" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-glass-border">
      <div className="container-ps py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand column */}
          <SpringReveal>
            <div>
              <a href="/" className="inline-flex items-center gap-2 mb-4">
                <span className="text-gold font-bold text-xl">Stitch</span>
                <span className="text-cream font-bold text-xl">Website</span>
              </a>
              <p className="text-cream-faint text-sm leading-relaxed max-w-xs mb-6">
                AI-powered web studio in Hyderabad. Professional websites for local businesses — delivered in 48 hours.
              </p>
              <p className="text-cream-faint text-xs">
                Hyderabad, Telangana, India
              </p>
            </div>
          </SpringReveal>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <SpringReveal key={col.title}>
              <div>
                <p className="text-eyebrow text-gold mb-5">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-cream-dim hover:text-cream transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </SpringReveal>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-faint">
          <p>© {new Date().getFullYear()} Stitch Website. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-gold">Claude</span> +{" "}
            <span className="text-cream-dim">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
