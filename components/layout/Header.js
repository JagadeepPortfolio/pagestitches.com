"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...spring.gentle, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-ink/95 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container-ps flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span className="text-gold font-bold text-lg tracking-tight">Page</span>
            <span className="text-cream font-bold text-lg tracking-tight">Stitches</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[0.8125rem] font-medium text-cream-dim hover:text-cream transition-colors duration-200 py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <MagneticButton
              href="https://wa.me/?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business"
              className="btn-gold text-sm py-2.5 px-5"
            >
              Get Your Website
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 relative z-50"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={spring.snappy}
              className="block w-6 h-[1.5px] bg-cream"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="block w-6 h-[1.5px] bg-cream"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={spring.snappy}
              className="block w-6 h-[1.5px] bg-cream"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-ink/98 backdrop-blur-xl flex flex-col items-center justify-center gap-3"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ ...spring.default, delay: i * 0.06 }}
                className="text-2xl font-semibold text-cream py-3 px-8"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring.default, delay: navLinks.length * 0.06 }}
              className="mt-6 btn-gold text-lg px-8 py-4"
            >
              Get Your Website
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
