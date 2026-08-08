import type { Metadata } from "next";
import PageHero from "@/components/layout/page-hero";
import { Section, SectionHeader } from "@/components/layout/section";
import WorkFilter from "@/components/work-filter";
import WorkFeature from "@/components/work-feature";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Research, software, and events from LinkScape, a youth-led open-source and AI nonprofit.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        columns={{ base: 1, md: 1, lg: 5 }}
        eyebrow={`${work.length} projects`}
        title="Work"
        lede="Two research projects, two tools, one hackathon."
      />
      <Section>
        <h2 className="sr-only">Lead project</h2>
        <WorkFeature item={work[0]} eyebrow="Read this one first" />
      </Section>
      <Section topBorder={false}>
        <SectionHeader
          eyebrow={`${work.length} in total`}
          title="The full index"
          lede="Everything we have shipped, including the one above."
        />
        <WorkFilter />
      </Section>
    </>
  );
}
