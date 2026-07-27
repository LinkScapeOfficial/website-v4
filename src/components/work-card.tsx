import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Spotlight from "@/components/animations/spotlight";
import { Chip } from "@/components/ui/chip";
import { Tag, TagRow } from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";
import type { WorkItem, WorkType } from "@/content/work";

const TYPE_LABEL: Record<WorkType, string> = {
  research: "Research",
  software: "Software",
  event: "Event",
};

export default function WorkCard({
  item,
  className,
}: {
  item: WorkItem;
  className?: string;
}) {
  const diagram = item.image
    ? undefined
    : item.figures?.find((f) => !f.single);

  return (
    <Spotlight
      className={cn("border-b border-r border-border", className)}
    >
      <Link
        href={`/work/${item.slug}`}
        className="row-hover flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
      >
        <div className="mb-4 flex items-center gap-2">
          <Chip>{TYPE_LABEL[item.type]}</Chip>
          <span className="mono-label">{item.year}</span>
          <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        {item.image ? (
          <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : diagram ? (
          <div className="surface relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`${diagram.src}-light.svg`)}
              alt=""
              className="absolute inset-0 h-full w-full object-contain p-3 dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`${diagram.src}-dark.svg`)}
              alt=""
              className="absolute inset-0 hidden h-full w-full object-contain p-3 dark:block"
            />
          </div>
        ) : null}

        <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {item.tagline}
        </p>

        {/* Tags sit directly under the text rather than pinned to the bottom.
            Grid rows stretch to the tallest card, and a bottom-pinned row left
            a void in the middle of every card without an image. */}
        {item.stack.length > 0 ? (
          <TagRow className="mt-5">
            {item.stack.slice(0, 4).map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </TagRow>
        ) : null}
      </Link>
    </Spotlight>
  );
}
