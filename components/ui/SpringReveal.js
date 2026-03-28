"use client";
import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

export default function SpringReveal({
  children,
  className = "",
  variants = fadeUp,
  custom = 0,
  tag = "div",
  ...props
}) {
  const Tag = motion[tag] || motion.div;

  return (
    <Tag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={custom}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
