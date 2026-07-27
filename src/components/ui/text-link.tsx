import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  /** Opens in a new tab, and takes the outbound arrow. */
  external?: boolean;
  className?: string;
}

/**
 * An inline destination inside prose. The underline is a hairline at rest and
 * takes ink weight on hover, so the affordance is felt before it is seen.
 */
export function TextLink({
  href,
  children,
  external = false,
  className,
}: TextLinkProps) {
  const externalProps = external
    ? { target: "_blank" as const, rel: "noreferrer noopener" }
    : {};

  return (
    <Link
      href={href}
      {...externalProps}
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground",
        className,
      )}
    >
      {children}
      {external ? (
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      )}
    </Link>
  );
}
