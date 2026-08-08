import { cn } from "@/lib/utils";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import HeroRules, {
  type HeroColumns,
} from "@/components/animations/hero-rules";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  size?: "default" | "tall";
  /** Column count of the band directly below, so the hero rules land on it. */
  /** The band beneath, per breakpoint. See The Matched Pitch Rule. */
  columns?: HeroColumns;
  className?: string;
}

/** The ruled hero shared by every page. Its columns continue into the body. */
export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
  size = "default",
  columns = { base: 1 },
  className,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="linkscape-wrapper relative">
        <HeroRules columns={columns} />
        <div
          className={cn(
            "lattice flex flex-col gap-4 px-4",
            size === "tall" ? "pb-20 pt-40 sm:pt-52" : "pb-16 pt-32",
            className,
          )}
        >
          <BlurFadeStagger initialDelay={0.08}>
            {eyebrow ? <p className="mono-label">{eyebrow}</p> : null}
            <h1 className="text-balance w-full text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            {lede ? (
              <p className="text-pretty max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {lede}
              </p>
            ) : null}
            {children}
          </BlurFadeStagger>
        </div>
      </div>
    </section>
  );
}
