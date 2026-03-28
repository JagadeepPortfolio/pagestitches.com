/* ===========================================
   Animation Presets — PageStitches
   Spring physics via Framer Motion
   =========================================== */

// Core spring config (from design direction)
export const spring = {
  default: { type: "spring", mass: 1, stiffness: 100, damping: 15 },
  gentle: { type: "spring", mass: 1, stiffness: 80, damping: 20 },
  snappy: { type: "spring", mass: 0.8, stiffness: 150, damping: 12 },
  slow: { type: "spring", mass: 1.2, stiffness: 60, damping: 18 },
};

// Stagger delays (80ms between elements)
export const stagger = {
  fast: 0.06,
  default: 0.08,
  slow: 0.12,
};

// Entrance variants for scroll reveals
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring.default, delay: i * stagger.default },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { ...spring.gentle, delay: i * stagger.default },
  }),
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...spring.default, delay: i * stagger.default },
  }),
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...spring.default, delay: i * stagger.default },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { ...spring.default, delay: i * stagger.default },
  }),
};

// Hero-specific: staggered word reveal
export const heroWord = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring.default, delay: 0.3 + i * 0.07 },
  }),
};

// Viewport detection settings
export const viewport = {
  once: true,
  margin: "-60px",
  amount: 0.15,
};

// Container variant for staggered children
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.default,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.slow,
      delayChildren: 0.2,
    },
  },
};
