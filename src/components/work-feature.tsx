import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Chip } from "@/components/ui/chip";
import { Tag, TagRow } from "@/components/ui/tag";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import { typeLabels, type WorkItem } from "@/content/work";

/**
 * One project at full width, given the room its evidence needs. A grid of
 * equal cards says every item weighs the same, which is never true; this is
 * the band that says which one to read first.
 */
export default function WorkFeature({
  item,
  eyebrow,
  className,
}: {
  item: WorkItem;
  eyebrow: string;
  className?: string;
}) {
  const figure = item.figures?.find((f) => !f.single);

  return (
    <div
      className={cn(
        "group relative grid grid-cols-1 border-b border-border lg:grid-cols-5",
        className,
      )}
    >
      <div className="surface relative flex items-center border-b border-border p-6 sm:p-10 lg:col-span-3 lg:border-b-0 lg:border-r">
        {item.image ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
          </div>
        ) : figure ? (
          <div className="surface relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`${figure.src}-light.svg`)}
              alt={figure.alt}
              className="absolute inset-0 h-full w-full object-contain p-2 dark:hidden sm:p-4"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`${figure.src}-dark.svg`)}
              alt={figure.alt}
              className="absolute inset-0 hidden h-full w-full object-contain p-2 dark:block sm:p-4"
            />
          </div>
        ) : null}
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-2">
        <p className="mono-label">{eyebrow}</p>

        <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          <Link href={`/work/${item.slug}`} className="focus-visible:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {item.name}
          </Link>
        </h3>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Chip category={item.type}>{typeLabels[item.type]}</Chip>
          <Chip strong>{item.status}</Chip>
          <Chip mono>{item.year}</Chip>
        </div>

        <p className="mt-5 text-[15px] leading-[1.75] text-foreground/85">
          {item.summary}
        </p>

        {item.stack.length > 0 ? (
          <TagRow className="mt-6">
            {item.stack.slice(0, 5).map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </TagRow>
        ) : null}

        <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium">
          Read the write-up
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  );
}
