import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** A stack or tooling identifier. Square, because it sits inside the lattice. */
export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-sm border border-border px-1.5 py-0.5 font-mono text-[11px] leading-5 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>{children}</div>
  );
}
