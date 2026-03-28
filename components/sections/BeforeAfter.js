"use client";
import { motion } from "framer-motion";
import SpringReveal from "@/components/ui/SpringReveal";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const comparisons = [
  {
    business: "Designer Inn — Interior Design Studio",
    before: "Basic Google Maps listing, no website, enquiries only through word of mouth",
    after: "4-page premium dark site with portfolio, services, booking — 12 enquiries in first week",
    metric: "12 enquiries in week 1",
  },
  {
    business: "Your Business Could Be Next",
    before: "No online presence, losing potential customers to competitors with websites",
    after: "Professional, mobile-first website with WhatsApp CTA — customers find you on Google",
    metric: "Starting ₹5,999",
  },
];

export default function BeforeAfter() {
  return (
    <section className="section-ps bg-ink-2 relative">
      <div className="container-ps">
        <SpringReveal>
          <p className="sec-label">The Difference</p>
        </SpringReveal>
        <SpringReveal>
          <h2 className="text-section font-extrabold text-cream mb-4">
            The difference a website makes.
          </h2>
        </SpringReveal>
        <SpringReveal>
          <p className="text-sub text-cream-dim max-w-xl mb-14">
            Most small businesses in Hyderabad are invisible online. A Stitch Website website changes that in 48 hours.
          </p>
        </SpringReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-8"
        >
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="glass-elevated p-6 md:p-8 overflow-hidden"
            >
              <p className="text-sm font-medium text-gold mb-6">{item.business}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="relative p-5 rounded-xl bg-ink/60 border border-red-900/20">
                  <span className="absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase text-red-400/60 font-medium">
                    Before
                  </span>
                  <div className="flex items-start gap-3 mt-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center text-red-400 text-sm">✗</span>
                    <p className="text-cream-dim text-sm leading-relaxed">{item.before}</p>
                  </div>
                </div>

                {/* After */}
                <div className="relative p-5 rounded-xl bg-ink/60 border border-green-900/20">
                  <span className="absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase text-green-400/60 font-medium">
                    After
                  </span>
                  <div className="flex items-start gap-3 mt-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-green-900/20 flex items-center justify-center text-green-400 text-sm">✓</span>
                    <p className="text-cream-dim text-sm leading-relaxed">{item.after}</p>
                  </div>
                </div>
              </div>

              {/* Result metric */}
              <div className="mt-6 pt-5 border-t border-glass-border flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-gold font-semibold text-sm">{item.metric}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
