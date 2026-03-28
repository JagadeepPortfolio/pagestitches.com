import SpringReveal from "@/components/ui/SpringReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Services & Pricing — PageStitches | Websites from ₹5,999",
  description:
    "Professional websites starting ₹5,999. Three tiers: Starter (48hrs), Pro (72hrs), Premium (10 days). Mobile-first, SEO-optimized, WhatsApp-integrated. Care Plans from ₹2,999/year.",
};

const included = [
  "Mobile-responsive design",
  "WhatsApp integration",
  "Google SEO optimization",
  "Custom domain + SSL",
  "Performance optimization (Lighthouse 85+)",
  "50-point quality audit",
  "Google Maps integration",
  "Social media links",
];

const carePlans = [
  {
    name: "Care Basic",
    price: "2,999",
    period: "/year",
    features: ["1 change per month", "Hosting included", "SSL renewal", "Uptime monitoring"],
  },
  {
    name: "Care Pro",
    price: "4,999",
    period: "/year",
    features: ["3 changes per month", "Hosting included", "Priority support", "Monthly performance report"],
  },
  {
    name: "Care Max",
    price: "6,999",
    period: "/year",
    features: ["Unlimited small changes", "Hosting included", "Same-day support", "SEO monitoring"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 50%)",
          }}
        />
        <div className="container-ps relative z-10">
          <SpringReveal>
            <p className="sec-label mb-6">Services</p>
          </SpringReveal>
          <SpringReveal>
            <h1 className="text-section font-extrabold text-cream mb-4 max-w-2xl">
              48 hours. One price.{" "}
              <span className="text-gold font-accent italic font-light">
                Zero stress.
              </span>
            </h1>
          </SpringReveal>
          <SpringReveal>
            <p className="text-sub text-cream-dim max-w-lg">
              Pick a tier. Share your details. Your website goes live before most
              agencies finish their first meeting.
            </p>
          </SpringReveal>
        </div>
      </section>

      {/* Pricing tiers (reused component) */}
      <Services />

      {/* What's Included */}
      <section className="section-ps bg-ink">
        <div className="container-ps">
          <SpringReveal>
            <h2 className="text-3xl font-extrabold text-cream mb-10 text-center">
              Included in every tier
            </h2>
          </SpringReveal>
          <SpringReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {included.map((item) => (
                <div
                  key={item}
                  className="glass p-4 rounded-xl border border-glass-border flex items-start gap-3"
                >
                  <span className="text-gold shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-cream-dim text-sm">{item}</span>
                </div>
              ))}
            </div>
          </SpringReveal>
        </div>
      </section>

      {/* Care Plans */}
      <section className="section-ps bg-ink-2">
        <div className="container-ps">
          <SpringReveal>
            <p className="sec-label justify-center flex items-center gap-3 mb-6">
              <span className="w-7 h-[1px] bg-gold" />
              <span>After Launch</span>
            </p>
          </SpringReveal>
          <SpringReveal>
            <h2 className="text-3xl font-extrabold text-cream mb-4 text-center">
              Care Plans
            </h2>
          </SpringReveal>
          <SpringReveal>
            <p className="text-cream-dim text-center max-w-lg mx-auto mb-12">
              Keep your website updated, hosted, and performing. No technical
              knowledge needed — just WhatsApp us.
            </p>
          </SpringReveal>

          <SpringReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {carePlans.map((plan) => (
                <div
                  key={plan.name}
                  className="glass p-6 rounded-2xl border border-glass-border hover:border-gold/15 transition-colors duration-300"
                >
                  <p className="text-eyebrow text-gold mb-3">{plan.name}</p>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="text-cream text-xs">&#8377;</span>
                    <span className="text-3xl font-extrabold text-cream">
                      {plan.price}
                    </span>
                    <span className="text-cream-faint text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-cream-dim"
                      >
                        <span className="text-gold mt-0.5 shrink-0">
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SpringReveal>
        </div>
      </section>

      {/* FAQ + CTA */}
      <FAQ />
      <FinalCTA />
    </main>
  );
}
