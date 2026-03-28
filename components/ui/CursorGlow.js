"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Desktop only — pointer: fine
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let x = 0, y = 0, currentX = 0, currentY = 0;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      currentX += (x - currentX) * 0.12;
      currentY += (y - currentY) * 0.12;
      glow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);
    glow.style.opacity = "1";

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] w-[400px] h-[400px] rounded-full opacity-0 transition-opacity duration-700"
      style={{
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
      }}
    />
  );
}
