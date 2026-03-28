"use client";
import { motion } from "framer-motion";
import SpringReveal from "@/components/ui/SpringReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const projects = [
  {
    name: "Designer Inn",
    niche: "Interior Design Studio",
    desc: "4-page premium dark site with portfolio gallery, service breakdown, and WhatsApp booking. 12 enquiries in the first week.",
    tier: "Pro",
    delivery: "52 hours",
    result: "12 enquiries in week 1",
    slug: "designer-inn",
  },
  {
    name: "Your Business",
    niche: "Could Be Next",
    desc: "We build custom websites for clinics, restaurants, CA firms, salons, coaching centers, and every local business in Hyderabad.",
    tier: "Starting ₹5,999",
    delivery: "48 hours",
    result: "Let's talk",
    slug: null,
  },
];

export default function WorkGrid() {
  return (
    <section className="section-ps bg-ink-2">
      <div className="container-ps">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              custom={i}
              className="glass-elevated p-6 md:p-8 group hover:border-gold/20 transition-colors duration-300"
            >
              {/* Placeholder for screenshot */}
              <div className="aspect-[16/10] rounded-xl bg-ink/80 border border-glass-border mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-cream-faint text-sm">
                  {project.slug ? "Screenshot coming soon" : "Your website here"}
                </span>
              </div>

              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-cream font-bold text-lg">
                    {project.name}
                  </h3>
                  <p className="text-gold text-sm">{project.niche}</p>
                </div>
                <span className="text-eyebrow text-cream-faint bg-ink/60 px-3 py-1 rounded-full">
                  {project.tier}
                </span>
              </div>

              <p className="text-cream-dim text-sm leading-relaxed mb-5">
                {project.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                <div className="flex items-center gap-3 text-xs text-cream-faint">
                  <span>Delivered in {project.delivery}</span>
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  <span className="text-gold font-medium">{project.result}</span>
                </div>
                {project.slug ? (
                  <MagneticButton
                    href={`/work/${project.slug}`}
                    className="text-gold text-sm font-medium hover:underline"
                  >
                    View &rarr;
                  </MagneticButton>
                ) : (
                  <MagneticButton
                    href="https://wa.me/?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business"
                    className="text-gold text-sm font-medium hover:underline"
                  >
                    Start &rarr;
                  </MagneticButton>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
