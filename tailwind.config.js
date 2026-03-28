/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          2: "#111111",
          3: "#1a1a1a",
        },
        navy: {
          DEFAULT: "#0f1729",
          light: "#162038",
        },
        gold: {
          DEFAULT: "#c9a84c",
          dim: "#8b7330",
          glow: "rgba(201,168,76,0.25)",
          soft: "rgba(201,168,76,0.08)",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dim: "rgba(244,239,230,0.7)",
          faint: "rgba(244,239,230,0.45)",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.06)",
          border: "rgba(255,255,255,0.08)",
          hover: "rgba(255,255,255,0.10)",
          elevated: "rgba(255,255,255,0.08)",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ['"Inter"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        accent: ['"Cormorant Garamond"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.75rem, 6.5vw, 5.5rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "section": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "sub": ["clamp(1.125rem, 2vw, 1.375rem)", { lineHeight: "1.6" }],
        "eyebrow": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.35em", textTransform: "uppercase" }],
      },
      borderRadius: {
        glass: "16px",
        "glass-lg": "24px",
      },
      animation: {
        "float-1": "float1 20s ease-in-out infinite",
        "float-2": "float2 28s ease-in-out infinite",
        "float-3": "float3 24s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "grid-drift": "gridDrift 25s linear infinite",
        "scrl-drop": "scrlDrop 1.8s ease-in-out infinite",
        "bar-fill": "barFill 1.4s cubic-bezier(.23,1,.32,1) forwards",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-25px) translateX(15px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(-12px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gridDrift: {
          to: { backgroundPosition: "60px 60px" },
        },
        scrlDrop: {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "scaleY(1)", opacity: "0" },
        },
        barFill: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c9a84c, #d4b95e)",
        "navy-radial": "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
