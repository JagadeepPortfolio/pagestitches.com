"use client";
import { motion } from "framer-motion";
import { spring, heroWord, fadeUp } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

/* Glass orbs — floating background elements */
function GlassOrbs() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg animate-grid-drift opacity-40" />

      {/* Radial gold glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
      />

      {/* Floating orbs */}
      <div className="absolute top-[15%] right-[12%] w-[280px] h-[280px] rounded-full bg-gold/[0.04] blur-[80px] animate-float-1 hidden md:block" />
      <div className="absolute bottom-[20%] left-[8%] w-[220px] h-[220px] rounded-full bg-navy-light/50 blur-[60px] animate-float-2 hidden md:block" />
      <div className="absolute top-[60%] right-[30%] w-[180px] h-[180px] rounded-full bg-gold/[0.03] blur-[70px] animate-float-3" />
    </div>
  );
}

/* Scroll indicator */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
      aria-hidden="true"
    >
      <span className="text-[10px] tracking-[0.2em] uppercase text-cream-faint">Scroll</span>
      <span className="w-[1px] h-10 bg-cream-faint origin-top animate-scrl-drop" />
    </motion.div>
  );
}

export default function Hero() {
  const headline = ["We build websites", "that make your", "phone ring."];

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-b from-navy/60 via-ink to-ink">
      <GlassOrbs />

      <div className="container-ps relative z-10 pt-28 pb-20 md:pt-0 md:pb-0">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring.gentle, delay: 0.2 }}
            className="sec-label mb-8"
          >
            AI-Powered Web Studio · Hyderabad
          </motion.p>

          {/* Headline — staggered spring reveal per line */}
          <h1 className="mb-6">
            {headline.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "spring",
                    mass: 1.1,
                    stiffness: 80,
                    damping: 16,
                    delay: 0.4 + i * 0.12,
                  }}
                  className={`block text-hero font-extrabold ${
                    i === 1
                      ? "font-accent italic font-light text-gold"
                      : "text-cream"
                  }`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            transition={{ ...spring.default, delay: 0.9 }}
            className="text-sub text-cream-dim max-w-lg mb-10"
          >
            48 hours. Starting ₹5,999. AI-powered. Professional websites for clinics, restaurants, CAs, and local businesses in Hyderabad.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring.default, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton
              href="https://wa.me/?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business"
              className="btn-gold text-base px-8 py-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Your Website
            </MagneticButton>

            <MagneticButton href="/work" className="btn-ghost text-base px-8 py-4">
              See Our Work →
            </MagneticButton>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...spring.gentle, delay: 1.5 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-cream-faint"
          >
            {[
              "Delivered in 48 hours",
              "Starting ₹5,999",
              "50-point quality audit",
              "Lighthouse 85+ guaranteed",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
