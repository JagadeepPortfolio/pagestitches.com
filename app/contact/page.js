"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SpringReveal from "@/components/ui/SpringReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { spring, staggerContainer, fadeUp, viewport } from "@/lib/animations";

const contactMethods = [
  {
    label: "WhatsApp",
    desc: "We reply within 2 hours during business hours",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    href: "https://wa.me/?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business",
    cta: "Chat on WhatsApp",
    primary: true,
  },
  {
    label: "Email",
    desc: "For detailed project requirements",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    href: "mailto:hello@pagestitches.com",
    cta: "Send Email",
    primary: false,
  },
];

const businessTypes = [
  "Clinic / Hospital",
  "Restaurant / Cafe",
  "CA / Legal Firm",
  "Coaching / Tutor",
  "Interior Designer",
  "Real Estate",
  "Salon / Spa",
  "Retail / Shop",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}. I run a ${form.business} and I'm interested in a website.${form.message ? ` ${form.message}` : ""} My number: ${form.phone}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 50%)",
          }}
        />

        <div className="container-ps relative z-10">
          <SpringReveal>
            <p className="sec-label mb-6">Contact</p>
          </SpringReveal>
          <SpringReveal>
            <h1 className="text-section font-extrabold text-cream mb-4 max-w-2xl">
              Your competitors already have websites.
              <br />
              <span className="text-gold font-accent italic font-light">
                Let&apos;s fix that.
              </span>
            </h1>
          </SpringReveal>
          <SpringReveal>
            <p className="text-sub text-cream-dim max-w-lg">
              WhatsApp us — we reply within 2 hours during business hours. Or
              fill out the form and we&apos;ll reach out to you.
            </p>
          </SpringReveal>
        </div>
      </section>

      {/* Contact Methods + Form */}
      <section className="section-ps bg-navy relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-navy-radial pointer-events-none"
        />

        <div className="container-ps relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Direct contact */}
            <div>
              <SpringReveal>
                <h2 className="text-2xl font-bold text-cream mb-8">
                  Get in touch directly
                </h2>
              </SpringReveal>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="space-y-5 mb-12"
              >
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.label}
                    variants={fadeUp}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-start gap-5 p-6 rounded-2xl border transition-colors duration-300 group ${
                      method.primary
                        ? "glass-elevated border-gold/20 hover:border-gold/40"
                        : "glass border-glass-border hover:border-gold/15"
                    }`}
                  >
                    <span
                      className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        method.primary
                          ? "bg-whatsapp/10 text-whatsapp"
                          : "bg-gold/10 text-gold"
                      }`}
                    >
                      {method.icon}
                    </span>
                    <div className="flex-1">
                      <p className="text-cream font-semibold mb-1 group-hover:text-gold transition-colors duration-200">
                        {method.cta}
                      </p>
                      <p className="text-cream-faint text-sm">{method.desc}</p>
                    </div>
                    <span className="text-cream-faint group-hover:text-gold transition-colors duration-200 mt-1">
                      &rarr;
                    </span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Business hours */}
              <SpringReveal>
                <div className="glass p-6 rounded-2xl border border-glass-border">
                  <h3 className="text-cream font-semibold text-sm mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-cream-dim">Monday — Saturday</span>
                      <span className="text-cream">9:00 AM — 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cream-dim">Sunday</span>
                      <span className="text-cream-faint">Closed</span>
                    </div>
                  </div>
                  <p className="text-cream-faint text-xs mt-4">
                    WhatsApp messages received outside hours are answered first
                    thing next morning.
                  </p>
                </div>
              </SpringReveal>
            </div>

            {/* Right — Form */}
            <div>
              <SpringReveal>
                <h2 className="text-2xl font-bold text-cream mb-8">
                  Or tell us about your project
                </h2>
              </SpringReveal>

              <SpringReveal>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-cream text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-ink/60 border border-glass-border rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream-faint/50 focus:outline-none focus:border-gold/40 transition-colors duration-200"
                      placeholder="Jagadeep"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-cream text-sm font-medium mb-2"
                    >
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-ink/60 border border-glass-border rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream-faint/50 focus:outline-none focus:border-gold/40 transition-colors duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Business type */}
                  <div>
                    <label
                      htmlFor="business"
                      className="block text-cream text-sm font-medium mb-2"
                    >
                      Type of Business
                    </label>
                    <select
                      id="business"
                      required
                      value={form.business}
                      onChange={(e) =>
                        setForm({ ...form, business: e.target.value })
                      }
                      className="w-full bg-ink/60 border border-glass-border rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:border-gold/40 transition-colors duration-200 appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c9a84c' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="" disabled>
                        Select your business type
                      </option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-cream text-sm font-medium mb-2"
                    >
                      Anything else? <span className="text-cream-faint">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full bg-ink/60 border border-glass-border rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream-faint/50 focus:outline-none focus:border-gold/40 transition-colors duration-200 resize-none"
                      placeholder="Tell us about your business, what you need, or any questions..."
                    />
                  </div>

                  <MagneticButton
                    onClick={() => {}}
                    className="btn-gold w-full justify-center text-base py-4"
                  >
                    Send via WhatsApp
                  </MagneticButton>

                  <p className="text-cream-faint text-xs text-center">
                    This opens WhatsApp with your details pre-filled. No data is
                    stored on our servers.
                  </p>
                </form>
              </SpringReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-ps bg-ink">
        <div className="container-ps">
          <SpringReveal>
            <div className="glass-elevated p-6 md:p-8 text-center">
              <p className="text-eyebrow text-gold mb-3">Based In</p>
              <h3 className="text-2xl font-bold text-cream mb-2">
                Hyderabad, Telangana
              </h3>
              <p className="text-cream-dim text-sm mb-1">
                Serving businesses across India
              </p>
              <p className="text-cream-faint text-xs">
                Remote-first — we work with clients everywhere via WhatsApp
              </p>
            </div>
          </SpringReveal>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "ProfessionalService",
              name: "PageStitches",
              description:
                "AI-powered web design studio in Hyderabad delivering professional websites in 48 hours",
              areaServed: {
                "@type": "City",
                name: "Hyderabad",
              },
              availableLanguage: ["English", "Hindi", "Telugu"],
            },
          }),
        }}
      />
    </main>
  );
}
