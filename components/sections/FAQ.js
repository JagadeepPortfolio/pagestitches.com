"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpringReveal from "@/components/ui/SpringReveal";
import { spring, staggerContainer, fadeUp, viewport } from "@/lib/animations";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "48 hours for Starter and Pro tiers from the moment we receive your content. Premium projects take up to 10 business days. We deliver faster than any agency in Hyderabad because our AI agents handle the heavy lifting.",
  },
  {
    q: "What do I need to provide?",
    a: "Your business details, photos, and text content. We guide you through the entire process on WhatsApp — most clients spend about 10 minutes sharing what we need. If you don't have professional photos, we use high-quality stock images.",
  },
  {
    q: "Can I make changes after delivery?",
    a: "Yes. Each tier includes revision rounds — 2 for Starter, 3 for Pro, 5 for Premium. After that, our Care Plans (starting ₹2,999/year) cover ongoing changes plus hosting.",
  },
  {
    q: "Do you build mobile-friendly websites?",
    a: "Every PageStitches site is mobile-first. We design for phones first, then scale up to tablets and desktops. We test on real Android devices and target Lighthouse 85+ mobile scores — because 70% of your customers browse on phones.",
  },
  {
    q: "What if I don't like the design?",
    a: "We work with you until you're happy, within your revision rounds. Before building, we share the design direction so you can approve the look and feel. Our 50-point quality audit ensures every site meets professional standards.",
  },
  {
    q: "Do you handle domain and hosting?",
    a: "Yes. Custom domain setup, SSL certificate, and hosting are all included in every tier. Starter gets 6 months free hosting, Pro gets 1 year, and Premium gets lifetime hosting.",
  },
  {
    q: "How much does a website cost in Hyderabad?",
    a: "Most agencies in Hyderabad charge ₹50,000 to ₹2,00,000 for a professional website. PageStitches delivers the same quality starting at ₹5,999 — because our AI-powered process eliminates the overhead of large teams and long timelines.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-glass-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-cream font-medium text-[15px] pr-8 group-hover:text-gold transition-colors duration-200">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={spring.snappy}
          className="shrink-0 text-gold text-xl"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ...spring.gentle, opacity: { duration: 0.2 } }}
            className="overflow-hidden"
          >
            <p className="text-cream-dim text-sm leading-relaxed pb-5 pr-12">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="section-ps bg-ink"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container-ps">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left — heading */}
          <div>
            <SpringReveal>
              <p className="sec-label">FAQ</p>
            </SpringReveal>
            <SpringReveal>
              <h2 className="text-section font-extrabold text-cream mb-4">
                Questions?<br />
                <span className="text-gold font-accent italic font-light">We have answers.</span>
              </h2>
            </SpringReveal>
            <SpringReveal>
              <p className="text-sub text-cream-dim">
                Everything you need to know about getting your business online with PageStitches in Hyderabad.
              </p>
            </SpringReveal>
          </div>

          {/* Right — accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <span itemProp="name" className="sr-only">{faq.q}</span>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <span itemProp="text" className="sr-only">{faq.a}</span>
                </div>
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </section>
  );
}
