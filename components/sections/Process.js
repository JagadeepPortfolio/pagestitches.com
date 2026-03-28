"use client";
import { motion } from "framer-motion";
import SpringReveal from "@/components/ui/SpringReveal";
import { fadeUp, staggerContainer, scaleIn, viewport } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "You Tell Us",
    desc: "Share your business details on WhatsApp. 10 minutes is all we need.",
    icon: "📋",
  },
  {
    num: "02",
    title: "We Design",
    desc: "Our AI agents craft your visual direction — fonts, colors, layout — in hours.",
    icon: "🎨",
  },
  {
    num: "03",
    title: "We Build",
    desc: "Multi-page, mobile-first, WhatsApp-ready. Every section purpose-built for your niche.",
    icon: "⚡",
  },
  {
    num: "04",
    title: "We Audit",
    desc: "50-point quality check. Lighthouse 85+ mobile. SEO-optimized. No shortcuts.",
    icon: "🔍",
  },
  {
    num: "05",
    title: "You're Live",
    desc: "Custom domain, SSL certificate, hosting — all included. Your business is online.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section className="section-ps bg-ink relative overflow-hidden">
      {/* Ghost text */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-[clamp(6rem,15vw,14rem)] text-white/[0.015] whitespace-nowrap pointer-events-none select-none"
      >
        48 HOURS
      </div>

      <div className="container-ps relative z-10">
        <SpringReveal>
          <p className="sec-label">Our Process</p>
        </SpringReveal>
        <SpringReveal>
          <h2 className="text-section font-extrabold text-cream mb-4">
            48 hours. That&apos;s it.
          </h2>
        </SpringReveal>
        <SpringReveal>
          <p className="text-sub text-cream-dim max-w-xl mb-16">
            From brief to live website. No meetings, no back-and-forth, no 4-week timelines. Here&apos;s how it works.
          </p>
        </SpringReveal>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[42px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={scaleIn}
                custom={i}
                className="glass-elevated p-6 lg:p-5 group hover:border-gold/20 transition-colors duration-300"
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-accent font-light text-gold/20 group-hover:text-gold/40 transition-colors duration-300">
                    {step.num}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-cream font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-cream-faint text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
