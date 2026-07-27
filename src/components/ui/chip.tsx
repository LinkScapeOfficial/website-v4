import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type Category = "research" | "software" | "event";

const MARK: Record<Category, string> = {
  research: "var(--cat-research)",
  software: "var(--cat-software)",
  event: "var(--cat-event)",
};

/**
 * Category rides on a mark, never on the text. The word beside the mark is what
 * a reader who cannot separate the hues goes by, which is also what lets the
 * green and orange pair sit as close as it does.
 */
export function Chip({
  children,
  category,
  mono = false,
  strong = false,
  className,
}: {
  children: ReactNode;
  category?: Category;
  /** Identifiers and versions. */
  mono?: boolean;
  /** Raises a status to full ink, for the one chip that must be read first. */
  strong?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium leading-5",
        mono && "font-mono text-[11px] tracking-tight",
        category || strong
          ? "border-foreground/15 bg-foreground/[0.06] text-foreground"
          : "border-border bg-muted/60 text-muted-foreground",
        className,
      )}
    >
      {category ? (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: MARK[category] }}
        />
      ) : null}
      {children}
    </span>
  );
}
