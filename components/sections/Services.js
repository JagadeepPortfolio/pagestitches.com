"use client";
import { motion } from "framer-motion";
import SpringReveal from "@/components/ui/SpringReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const tiers = [
  {
    name: "Starter",
    price: "5,999",
    delivery: "48 hours",
    pages: "Up to 5 pages",
    best: "Clinics, local shops, professionals",
    features: [
      "Mobile-responsive design",
      "WhatsApp integration",
      "Google SEO basics",
      "Custom domain + SSL",
      "6 months free hosting",
      "2 revision rounds",
    ],
  },
  {
    name: "Pro",
    price: "12,999",
    delivery: "72 hours",
    pages: "Up to 8 pages",
    best: "CA firms, coaching, growing businesses",
    featured: true,
    features: [
      "Everything in Starter",
      "CMS for blog/updates",
      "Lead capture forms",
      "Google Analytics setup",
      "Performance audit",
      "1 year free hosting",
      "3 revision rounds",
    ],
  },
  {
    name: "Premium",
    price: "24,999",
    delivery: "10 days",
    pages: "Unlimited pages",
    best: "Serious businesses, D2C brands",
    features: [
      "Everything in Pro",
      "Booking/appointment system",
      "Payment integration",
      "Advanced SEO + schema",
      "Google Business setup",
      "Lifetime hosting",
      "5 revision rounds",
    ],
  },
];

export default function Services() {
  return (
    <section className="section-ps bg-navy relative overflow-hidden">
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-navy-radial pointer-events-none"
      />

      <div className="container-ps relative z-10">
        <SpringReveal>
          <p className="sec-label">Pricing</p>
        </SpringReveal>
        <SpringReveal>
          <h2 className="text-section font-extrabold text-cream mb-4">
            Agencies charge ₹50,000.<br />
            <span className="text-gold font-accent italic font-light">We charge ₹5,999.</span>
          </h2>
        </SpringReveal>
        <SpringReveal>
          <p className="text-sub text-cream-dim max-w-xl mb-14">
            Same quality. Fraction of the cost. Because AI does the heavy lifting, not a team of 5 people over 4 weeks.
          </p>
        </SpringReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              custom={i}
              className={`relative p-7 rounded-2xl border transition-colors duration-300 ${
                tier.featured
                  ? "bg-glass-elevated border-gold/25 shadow-lg shadow-gold/5"
                  : "glass border-glass-border hover:border-gold/15"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-gradient text-ink text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <p className="text-eyebrow text-gold mb-3">{tier.name}</p>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-cream text-xs">₹</span>
                <span className="text-4xl font-extrabold text-cream">{tier.price}</span>
              </div>
              <p className="text-cream-faint text-xs mb-1">{tier.delivery} delivery</p>
              <p className="text-cream-dim text-sm mb-6">{tier.pages} · {tier.best}</p>

              <ul className="space-y-2.5 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-cream-dim">
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="https://wa.me/?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business"
                className={tier.featured ? "btn-gold w-full justify-center" : "btn-ghost w-full justify-center"}
              >
                Get Started
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
