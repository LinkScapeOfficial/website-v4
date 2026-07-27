import Image from "next/image";
import { cn } from "@/lib/utils";

/** Initials, so a person without a photograph still has an identity on the page. */
function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * A person's plate. Where no photograph exists the cell is hatched and engraved
 * with initials, which reads as a panel with no plate fitted rather than as a
 * missing image.
 */
export function Portrait({
  name,
  src,
  size,
  className,
}: {
  name: string;
  src?: string;
  /** Rendered pixel size at the largest breakpoint, used for the intrinsic size. */
  size: number;
  className?: string;
}) {
  const frame = cn(
    "relative shrink-0 overflow-hidden rounded-lg border border-border bg-muted",
    className,
  );

  if (src) {
    return (
      <div className={frame}>
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={frame} aria-hidden="true">
      <div className="diagonal-hatch absolute inset-0 opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-sm font-medium tracking-[0.08em] text-muted-foreground">
          {initials(name)}
        </span>
      </div>
    </div>
  );
}
