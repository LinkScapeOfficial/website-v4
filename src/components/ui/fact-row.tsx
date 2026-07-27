import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FactRowProps {
  label: ReactNode;
  value: ReactNode;
  /** Renders a dt/dd pair, for a row that lives inside a dl. */
  definition?: boolean;
  /** Identifiers, versions, and dates are set in Geist Mono. */
  mono?: boolean;
  /** Compact suits a dense metadata grid; default suits a side rail. */
  density?: "default" | "compact";
  /** Row puts the key and the value on one line, for a wide rail. */
  layout?: "stacked" | "row";
  className?: string;
}

const PADDING = {
  default: "px-6 py-5",
  compact: "px-5 py-3.5",
} as const;

/** One engraved label above one value, inside a ruled cell. */
export function FactRow({
  label,
  value,
  definition = false,
  mono = false,
  density = "default",
  layout = "stacked",
  className,
}: FactRowProps) {
  const Label = definition ? "dt" : "p";
  const Value = definition ? "dd" : "p";
  const row = layout === "row";

  return (
    <div
      className={cn(
        "border-b border-border",
        !definition && "last:border-b-0",
        PADDING[density],
        row && "flex items-baseline justify-between gap-6",
        className,
      )}
    >
      <Label className="mono-label shrink-0">{label}</Label>
      <Value
        className={cn(
          "text-sm leading-relaxed",
          row ? "text-right" : "mt-1.5",
          mono ? "font-mono text-[13px] font-medium" : "font-medium tracking-tight",
        )}
      >
        {value}
      </Value>
    </div>
  );
}

/** A vertical rail of facts, flush against the cell it sits beside. */
export function FactList({
  children,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  as?: "div" | "aside" | "dl";
  className?: string;
}) {
  return <Tag className={cn("flex flex-col", className)}>{children}</Tag>;
}
