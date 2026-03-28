import { motion } from "framer-motion";
import SpringReveal from "@/components/ui/SpringReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import WorkGrid from "@/components/sections/WorkGrid";

export const metadata = {
  title: "Our Work — Stitch Website | Websites Built in 48 Hours",
  description:
    "See the websites we've built for businesses in Hyderabad. Every project delivered in 48 hours with a 50-point quality audit. Real results, real businesses.",
};

export default function WorkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.05) 0%, transparent 50%)",
          }}
        />

        <div className="container-ps relative z-10">
          <SpringReveal>
            <p className="sec-label mb-6">Portfolio</p>
          </SpringReveal>
          <SpringReveal>
            <h1 className="text-section font-extrabold text-cream mb-4 max-w-2xl">
              Every site we build is a{" "}
              <span className="text-gold font-accent italic font-light">
                revenue machine.
              </span>
            </h1>
          </SpringReveal>
          <SpringReveal>
            <p className="text-sub text-cream-dim max-w-lg">
              Real businesses. Real results. Every project passes our 50-point
              quality audit before going live.
            </p>
          </SpringReveal>
        </div>
      </section>

      {/* Work Grid */}
      <WorkGrid />

      {/* CTA */}
      <section className="section-ps bg-navy relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-navy-radial pointer-events-none"
        />
        <div className="container-ps relative z-10 text-center">
          <SpringReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-cream mb-4">
              Want your business here?
            </h2>
          </SpringReveal>
          <SpringReveal>
            <p className="text-cream-dim max-w-md mx-auto mb-8">
              Your website could be live by this weekend. WhatsApp us to get
              started.
            </p>
          </SpringReveal>
          <SpringReveal>
            <MagneticButton
              href="https://wa.me/?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business"
              className="btn-gold text-base px-10 py-4"
            >
              Get Your Website Now
            </MagneticButton>
          </SpringReveal>
        </div>
      </section>
    </main>
  );
}
