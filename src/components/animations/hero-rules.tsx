"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * The column count of the band beneath a hero, at each breakpoint the lattice
 * actually steps at. A band that collapses to one column has no interior
 * divisions, so the hero draws none either; inventing rules there is precisely
 * the decorative field this component replaced.
 */
export interface HeroColumns {
  base: number;
  md?: number;
  lg?: number;
}

/**
 * The hero's column rules. Inset to the container's own edges, and pitched to the
 * column count of the band below so they land on real cell divisions. They settle
 * inward on arrival, which reads as the page being ruled rather than a background
 * being revealed.
 *
 * The pitch is per breakpoint because the lattice is: a grid that is four columns
 * on a desktop is two on a phone, and a hero that keeps the desktop count on a
 * phone is ruling against nothing. See The Matched Pitch Rule in DESIGN.md.
 */
export default function HeroRules({
  columns,
  className,
}: {
  columns: HeroColumns;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const { base, md = base, lg = md } = columns;

  return (
    <motion.div
      aria-hidden
      className={`hero-rules pointer-events-none absolute inset-y-0 left-4 right-4 sm:left-8 sm:right-8 ${className ?? ""}`}
      style={
        {
          "--hero-cols": base,
          "--hero-cols-md": md,
          "--hero-cols-lg": lg,
        } as React.CSSProperties
      }
      initial={{ opacity: 0, scaleX: 1.06 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={
        reduce ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
      }
    />
  );
}
