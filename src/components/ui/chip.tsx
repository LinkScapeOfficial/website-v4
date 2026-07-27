import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * One tone, deliberately. Category and status are carried by the word inside
 * the chip, so a reader who cannot separate hues loses nothing and colour stays
 * reserved for the things a visitor can act on.
 */
export function Chip({
  children,
  mono = false,
  strong = false,
  className,
}: {
  children: ReactNode;
  /** Identifiers and versions. */
  mono?: boolean;
  /** Raises a status to full ink, for the one chip that must be read first. */
  strong?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium leading-5",
        mono && "font-mono text-[11px] tracking-tight",
        strong
          ? "border-foreground/15 bg-foreground/[0.06] text-foreground"
          : "border-border bg-muted/60 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
