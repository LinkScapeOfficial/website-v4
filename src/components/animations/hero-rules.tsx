"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * The hero's column rules. Inset to the container's own edges, and pitched to the
 * column count of the band below so they land on real cell divisions. They settle
 * inward on arrival, which reads as the page being ruled rather than a background
 * being revealed.
 */
export default function HeroRules({
  columns,
  className,
}: {
  columns: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`hero-rules pointer-events-none absolute inset-y-0 left-4 right-4 sm:left-8 sm:right-8 ${className ?? ""}`}
      style={{ "--hero-columns": columns } as React.CSSProperties}
      initial={{ opacity: 0, scaleX: 1.06 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={
        reduce ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
      }
    />
  );
}
