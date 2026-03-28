import SpringReveal from "@/components/ui/SpringReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "About — Stitch Website | One Founder. Nine AI Agents.",
  description:
    "Stitch Website is Hyderabad's AI-native web studio. One founder, nine AI agents, 48-hour delivery. Learn how we build agency-quality websites at a fraction of the cost.",
};

const agents = [
  { name: "MARKETING", role: "Discovers businesses that need websites", icon: "🎯" },
  { name: "CEO", role: "Reviews and approves every project", icon: "👔" },
  { name: "DEVELOPER", role: "Designs and builds the site from scratch", icon: "⚡" },
  { name: "AUDITOR", role: "Runs the 50-point quality check", icon: "🔍" },
  { name: "ACCOUNTS", role: "Handles invoicing and payments", icon: "📊" },
];

const stats = [
  { value: "48h", label: "Average delivery" },
  { value: "50", label: "Point quality audit" },
  { value: "85+", label: "Lighthouse mobile" },
  { value: "₹5,999", label: "Starting price" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 40% 50%, rgba(201,168,76,0.05) 0%, transparent 50%)",
          }}
        />
        <div className="container-ps relative z-10 max-w-3xl">
          <SpringReveal>
            <p className="sec-label mb-6">About</p>
          </SpringReveal>
          <SpringReveal>
            <h1 className="text-section font-extrabold text-cream mb-4">
              One founder. Nine AI agents.{" "}
              <span className="text-gold font-accent italic font-light">
                Unlimited ambition.
              </span>
            </h1>
          </SpringReveal>
          <SpringReveal>
            <p className="text-sub text-cream-dim">
              While agencies need 5 people and 4 weeks, we need 1 human and 48
              hours. Every website passes a 50-point quality audit. No shortcuts.
              No templates.
            </p>
          </SpringReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-ps bg-navy relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-navy-radial pointer-events-none"
        />
        <div className="container-ps relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SpringReveal>
                <h2 className="text-3xl font-extrabold text-cream mb-6">
                  The story
                </h2>
              </SpringReveal>
              <SpringReveal>
                <div className="space-y-4 text-cream-dim text-[15px] leading-relaxed">
                  <p>
                    Stitch Website is an AI-powered web studio based in Hyderabad.
                    Founded by Jagadeep, it uses a team of nine specialized AI
                    agents — orchestrated by a single human — to deliver
                    professional websites in 48 hours.
                  </p>
                  <p>
                    Most agencies in Hyderabad charge ₹50,000+ and take 4 weeks.
                    We saw the gap: small businesses need professional websites
                    but can&apos;t justify agency prices or timelines.
                  </p>
                  <p>
                    Our AI agents handle the heavy lifting — design, development,
                    SEO, quality assurance. The result: agency-quality websites
                    at a fraction of the cost and time.
                  </p>
                </div>
              </SpringReveal>
            </div>

            {/* Stats */}
            <div>
              <SpringReveal>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="glass-elevated p-6 text-center"
                    >
                      <p className="text-3xl font-extrabold text-gold mb-1">
                        {stat.value}
                      </p>
                      <p className="text-cream-faint text-xs uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </SpringReveal>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="section-ps bg-ink">
        <div className="container-ps">
          <SpringReveal>
            <p className="sec-label justify-center flex items-center gap-3 mb-6">
              <span className="w-7 h-[1px] bg-gold" />
              <span>The Team</span>
            </p>
          </SpringReveal>
          <SpringReveal>
            <h2 className="text-3xl font-extrabold text-cream mb-4 text-center">
              How our AI agents work
            </h2>
          </SpringReveal>
          <SpringReveal>
            <p className="text-cream-dim text-center max-w-lg mx-auto mb-12">
              Each agent is a specialist. Together, they deliver what takes
              agencies weeks — in hours.
            </p>
          </SpringReveal>

          <SpringReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {agents.map((agent, i) => (
                <div
                  key={agent.name}
                  className="glass p-5 rounded-2xl border border-glass-border hover:border-gold/15 transition-colors duration-300 text-center"
                >
                  <span className="text-3xl mb-3 block">{agent.icon}</span>
                  <p className="text-cream font-semibold text-sm mb-1">
                    {agent.name}
                  </p>
                  <p className="text-cream-faint text-xs leading-relaxed">
                    {agent.role}
                  </p>
                </div>
              ))}
            </div>
          </SpringReveal>
        </div>
      </section>

      <FinalCTA />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "ProfessionalService",
              name: "Stitch Website",
              founder: {
                "@type": "Person",
                name: "Jagadeep",
              },
              description:
                "AI-native web studio delivering professional websites in 48 hours for businesses in Hyderabad",
              areaServed: { "@type": "City", name: "Hyderabad" },
              knowsAbout: [
                "Web Design",
                "Web Development",
                "SEO",
                "AI-powered Design",
              ],
            },
          }),
        }}
      />
    </main>
  );
}
