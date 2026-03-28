"use client";

const proofItems = [
  "Websites delivered in 48 hours",
  "Starting ₹5,999",
  "Average delivery: 43 hours",
  "50-point quality audit",
  "Lighthouse 85+ mobile",
  "4.9/5 client rating",
  "Free hosting included",
  "WhatsApp-first support",
];

export default function SocialProof() {
  // Duplicate for seamless loop
  const items = [...proofItems, ...proofItems];

  return (
    <section className="relative border-y border-glass-border overflow-hidden py-5 bg-ink-2">
      <div className="flex animate-marquee w-max" aria-label="Social proof">
        {items.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-accent italic text-[clamp(0.875rem,1.8vw,1.05rem)] text-cream-dim px-1">
              {item}
            </span>
            <span className="text-gold mx-6 text-sm">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
