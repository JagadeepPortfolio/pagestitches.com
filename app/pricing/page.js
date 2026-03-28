"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpringReveal from "@/components/ui/SpringReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { spring } from "@/lib/animations";

const niches = [
  { label: "Clinic / Hospital", rec: "Pro", reason: "Needs appointment info, doctor profiles, and trust signals" },
  { label: "Restaurant / Cafe", rec: "Starter", reason: "Menu display, location, and WhatsApp ordering" },
  { label: "CA / Legal Firm", rec: "Pro", reason: "Service pages, blog for SEO, and lead capture" },
  { label: "Coaching / Tutor", rec: "Starter", reason: "Course list, testimonials, and contact form" },
  { label: "Interior Designer", rec: "Pro", reason: "Portfolio gallery, project pages, and booking" },
  { label: "Real Estate", rec: "Premium", reason: "Listing pages, search, and lead management" },
  { label: "Salon / Spa", rec: "Starter", reason: "Services, pricing, and WhatsApp booking" },
  { label: "D2C Brand", rec: "Premium", reason: "E-commerce features, payments, and advanced SEO" },
  { label: "Other", rec: "Pro", reason: "We'll recommend the best tier on WhatsApp" },
];

const agencyComparison = [
  { feature: "Timeline", agency: "4-6 weeks", ps: "48 hours" },
  { feature: "Cost", agency: "₹50,000 — ₹2,00,000", ps: "₹5,999 — ₹24,999" },
  { feature: "Mobile-first", agency: "Sometimes", ps: "Always" },
  { feature: "SEO included", agency: "Extra cost", ps: "Included" },
  { feature: "Hosting", agency: "Extra cost", ps: "Included free" },
  { feature: "Revisions", agency: "1-2 rounds", ps: "2-5 rounds" },
];

export default function PricingPage() {
  const [selected, setSelected] = useState(null);

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.05) 0%, transparent 50%)",
          }}
        />
        <div className="container-ps relative z-10">
          <SpringReveal>
            <p className="sec-label mb-6">Pricing</p>
          </SpringReveal>
          <SpringReveal>
            <h1 className="text-section font-extrabold text-cream mb-4 max-w-2xl">
              Agencies charge ₹50,000.{" "}
              <span className="text-gold font-accent italic font-light">
                We charge ₹5,999.
              </span>
            </h1>
          </SpringReveal>
          <SpringReveal>
            <p className="text-sub text-cream-dim max-w-lg">
              Same quality. Fraction of the cost. Pick your tier or tell us your
              business type — we&apos;ll recommend the best fit.
            </p>
          </SpringReveal>
        </div>
      </section>

      {/* Niche Recommender */}
      <section className="section-ps bg-ink-2">
        <div className="container-ps max-w-3xl">
          <SpringReveal>
            <h2 className="text-2xl font-extrabold text-cream mb-2 text-center">
              What does your business do?
            </h2>
          </SpringReveal>
          <SpringReveal>
            <p className="text-cream-dim text-center mb-8">
              Select your business type and we&apos;ll recommend a tier.
            </p>
          </SpringReveal>

          <SpringReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {niches.map((niche) => (
                <button
                  key={niche.label}
                  onClick={() =>
                    setSelected(selected === niche.label ? null : niche.label)
                  }
                  className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                    selected === niche.label
                      ? "bg-gold/15 border-gold/40 text-gold"
                      : "glass border-glass-border text-cream-dim hover:border-gold/20 hover:text-cream"
                  }`}
                >
                  {niche.label}
                </button>
              ))}
            </div>
          </SpringReveal>

          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={spring.gentle}
                className="glass-elevated p-6 text-center"
              >
                <p className="text-cream-dim text-sm mb-2">
                  For <span className="text-cream font-medium">{selected}</span>,
                  we recommend:
                </p>
                <p className="text-gold text-2xl font-extrabold mb-2">
                  {niches.find((n) => n.label === selected)?.rec} Tier
                </p>
                <p className="text-cream-faint text-sm">
                  {niches.find((n) => n.label === selected)?.reason}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing tiers */}
      <Services />

      {/* Agency Comparison */}
      <section className="section-ps bg-ink">
        <div className="container-ps max-w-3xl">
          <SpringReveal>
            <h2 className="text-3xl font-extrabold text-cream mb-10 text-center">
              Stitch Website vs Agencies
            </h2>
          </SpringReveal>

          <SpringReveal>
            <div className="glass-elevated overflow-hidden">
              <div className="grid grid-cols-3 text-sm font-semibold border-b border-glass-border">
                <div className="p-4 text-cream-faint" />
                <div className="p-4 text-cream-faint text-center">
                  Typical Agency
                </div>
                <div className="p-4 text-gold text-center">Stitch Website</div>
              </div>
              {agencyComparison.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 text-sm border-b border-glass-border last:border-0"
                >
                  <div className="p-4 text-cream font-medium">
                    {row.feature}
                  </div>
                  <div className="p-4 text-cream-faint text-center">
                    {row.agency}
                  </div>
                  <div className="p-4 text-cream text-center font-medium">
                    {row.ps}
                  </div>
                </div>
              ))}
            </div>
          </SpringReveal>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </main>
  );
}
