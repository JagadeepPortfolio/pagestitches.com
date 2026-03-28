import SpringReveal from "@/components/ui/SpringReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata = {
  title: "Lab — Stitch Website | AI Web Design Experiments",
  description:
    "Welcome to the Stitch Website lab. Experiments, demos, and things we built to push the boundaries of AI-powered web design.",
};

const experiments = [
  {
    title: "Live AI Build Demo",
    desc: "Watch an AI agent design and build a website in real-time. From brief to deployed site — no edits, no cuts.",
    status: "Coming Soon",
    icon: "🤖",
  },
  {
    title: "Design Playground",
    desc: "Interactive glassmorphism, spring physics, and micro-interaction experiments. The building blocks behind every Stitch Website site.",
    status: "Coming Soon",
    icon: "🎨",
  },
  {
    title: "Performance Race",
    desc: "Our sites vs template builders vs agency sites. Head-to-head Lighthouse scores, load times, and Core Web Vitals.",
    status: "Coming Soon",
    icon: "⚡",
  },
  {
    title: "Stitch Machine",
    desc: "Enter your business type and watch AI generate a website concept — color palette, layout, and hero section — in 30 seconds.",
    status: "Phase 2",
    icon: "🧵",
  },
];

export default function LabPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-[clamp(5rem,14vw,12rem)] text-white/[0.015] whitespace-nowrap pointer-events-none select-none"
        >
          LABORATORY
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 50%)",
          }}
        />
        <div className="container-ps relative z-10">
          <SpringReveal>
            <p className="sec-label mb-6">Experiments</p>
          </SpringReveal>
          <SpringReveal>
            <h1 className="text-section font-extrabold text-cream mb-4 max-w-2xl">
              This is what happens when AI{" "}
              <span className="text-gold font-accent italic font-light">
                builds websites.
              </span>
            </h1>
          </SpringReveal>
          <SpringReveal>
            <p className="text-sub text-cream-dim max-w-lg">
              Welcome to the lab. Experiments, demos, and things we built for
              fun — and to show you what&apos;s possible.
            </p>
          </SpringReveal>
        </div>
      </section>

      {/* Experiments Grid */}
      <section className="section-ps bg-navy relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-navy-radial pointer-events-none"
        />
        <div className="container-ps relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiments.map((exp) => (
              <SpringReveal key={exp.title}>
                <div className="glass-elevated p-7 h-full group hover:border-gold/20 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{exp.icon}</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 font-medium bg-gold/5 px-3 py-1 rounded-full">
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="text-cream font-bold text-lg mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-cream-dim text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </SpringReveal>
            ))}
          </div>

          <SpringReveal>
            <div className="mt-16 text-center">
              <p className="text-cream-dim mb-6">
                Want to see something specific? Tell us what to build next.
              </p>
              <MagneticButton
                href="https://wa.me/?text=Hi%2C%20I%20have%20an%20idea%20for%20the%20Stitch%20Website%20lab"
                className="btn-ghost text-base px-8 py-4"
              >
                Suggest an Experiment &rarr;
              </MagneticButton>
            </div>
          </SpringReveal>
        </div>
      </section>
    </main>
  );
}
