import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CircleArrowRight } from "lucide-react";
import { MarkGithubIcon } from "@primer/octicons-react";

import PageHero from "@/components/layout/page-hero";
import { Section, SectionHeader, LatticeSpacer } from "@/components/layout/section";
import { LatticeGrid, LatticeCell } from "@/components/layout/lattice";
import StatCell, { type Stat } from "@/components/stat-cell";
import WorkCard from "@/components/work-card";
import WorkFeature from "@/components/work-feature";
import PartnerMarquee from "@/components/partner-marquee";
import Spotlight from "@/components/animations/spotlight";
import BlurFade from "@/components/animations/blur-fade";
import { Button } from "@/components/ui/button";
import { FactList, FactRow } from "@/components/ui/fact-row";
import { Portrait } from "@/components/ui/portrait";
import { site, pillars } from "@/content/site";
import { featured, work } from "@/content/work";
import { byTier, people, rosterLine } from "@/content/team";

const stats: Stat[] = [
  {
    value: 80,
    suffix: "×",
    label: "NVIDIA H100 GPUs",
    note: "Members train on the same class of hardware as a corporate lab.",
  },
  {
    value: 14,
    label: "Public repositories",
    note: "Everything we have shipped, free to read and reuse.",
  },
  {
    value: people.length,
    label: "People on the team",
    note: `${rosterLine()}.`,
  },
  {
    label: "Students reached",
    note: "We publish this once our program records are verified.",
  },
];

export default function Home() {
  const leadership = byTier("leadership");
  const proof = work.find((w) => w.results)!;

  return (
    <>
      <PageHero
        size="tall"
        columns={4}
        eyebrow={`Founded ${site.founded}`}
        title={site.tagline}
        lede="We give high-school and university students an 80-GPU cluster, a real research problem, and someone to review their code. Everything they build ships open source."
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            asChild
            className="h-12 rounded-full px-6 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link href="/work">
              Explore our work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-border bg-background px-6 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link href="/join">Join us</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-12 rounded-full px-5 text-muted-foreground hover:text-foreground"
          >
            <Link href={site.social.github}>
              <MarkGithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </PageHero>
      <Section>
        <div className="-mb-px -mr-px grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCell key={s.label} stat={s} />
          ))}
        </div>
      </Section>
      <Section topBorder={false}>
        <SectionHeader
          title="Three pillars"
          lede="Every program serves at least one. The best ones serve all three."
        />
        <LatticeGrid cols={3}>
          {pillars.map((p, i) => (
            <Spotlight key={p.key} className="border-b border-r border-border">
              <div className="flex h-full flex-col p-7">
                <span className="mono-label">{p.key}</span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-2 text-[15px] font-medium leading-relaxed">
                  {p.line}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Spotlight>
          ))}
        </LatticeGrid>
      </Section>
      <Section topBorder={false}>
        <SectionHeader
          eyebrow={`${featured.length} of ${work.length} shown`}
          title="What we have built"
          lede="Two research projects, two tools people use daily, and the hackathon where most of us met."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/work">
                See everything
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          }
        />
        <WorkFeature item={featured[0]} eyebrow="Latest research" />
        <div className="-mb-px -mr-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {featured.slice(1, 5).map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      <Section topBorder={false}>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="border-b border-border p-8 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
            <p className="mono-label">The result, in full</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {proof.results!.caption}
            </h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-muted-foreground">
              A gap that widens as the data gets harder means the model learned
              something structural about writing, which is what scaling alone
              cannot buy.
            </p>
            <Button asChild variant="outline" className="mt-7 rounded-full">
              <Link href={`/work/${proof.slug}`}>
                How it works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="scroll-x p-6 sm:p-10 lg:col-span-3">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr>
                  {proof.results!.columns.map((c) => (
                    <th
                      key={c}
                      className="border-b border-border pb-3 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {proof.results!.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={
                      ri === proof.results!.rows.length - 1
                        ? "font-semibold"
                        : ""
                    }
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`border-b border-border py-3 pr-4 ${
                          ci > 0 ? "font-mono tabular-nums" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {proof.results!.footnote ? (
              <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                {proof.results!.footnote}
              </p>
            ) : null}
          </div>
        </div>
      </Section>

      <LatticeSpacer />
      <Section topBorder={false}>
        <div className="relative grid grid-cols-1 items-stretch lg:grid-cols-5">
          <div className="border-b border-border p-8 sm:p-12 lg:col-span-3 lg:border-b-0 lg:border-r">
            <BlurFade inView>
              <p className="mono-label">What makes it credible</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                80 H100s, pointed at students
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  A training run that would take three weeks on a laptop
                  finishes here overnight. That single fact decides which ideas
                  a student can actually test, and it is why our members
                  co-author papers instead of reading them.
                </p>
                <p>
                  Access is tiered and every job is logged. The CTO signs off on
                  allocations under our compute policy, so a first-year member
                  and a research lead get different quotas and both know why.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/join">
                    Get access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="rounded-full">
                  <Link href="/work/cnm-bert">See what came out of it</Link>
                </Button>
              </div>
            </BlurFade>
          </div>

          <FactList className="surface justify-center lg:col-span-2">
            {[
              { k: "Cluster", v: "80× NVIDIA H100", mono: true },
              { k: "Access", v: "Tiered, logged, CTO-approved", mono: false },
              { k: "Cost to members", v: "Nothing", mono: false },
              { k: "Output licence", v: "Open source", mono: false },
            ].map((row) => (
              <FactRow
                key={row.k}
                label={row.k}
                value={row.v}
                mono={row.mono}
                layout="row"
                className="row-hover px-8 sm:px-12"
              />
            ))}
          </FactList>
        </div>
      </Section>
      <Section topBorder>
        <SectionHeader
          eyebrow={`${leadership.length} officers`}
          title="Meet the team"
          lede="Three officers run LinkScape. Each publishes their own address and answers it."
        />
        <LatticeGrid cols={3}>
          {leadership.map((person) => (
            <Spotlight key={person.name} className="border-b border-r border-border">
              <div className="flex h-full flex-col items-start gap-4 p-7">
                <Portrait
                  name={person.name}
                  src={person.imageUrl}
                  size={80}
                  className="h-16 w-16"
                />
                <div>
                  <p className="font-semibold tracking-tight">{person.name}</p>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {person.remit}
                </p>
              </div>
            </Spotlight>
          ))}
        </LatticeGrid>
        <Link
          href="/team"
          className="row-hover group flex items-center justify-center gap-2 py-8"
        >
          <span className="text-base tracking-tight text-muted-foreground">
            Meet the members and fellows
          </span>
          <CircleArrowRight
            className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </Link>
      </Section>
      <Section topBorder={false}>
        <SectionHeader
          title="Partners"
          lede="Organizations we have worked with. Hack Club is our fiscal sponsor and holds the charitable status."
        />
        <div className="border-b border-border">
          <PartnerMarquee />
        </div>
      </Section>
      <Section topBorder={false}>
        <div className="flex flex-col gap-6 border-b border-border p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="flex items-center gap-5">
            <Image
              src="https://assets.hackclub.com/flag-orpheus-left.svg"
              alt="Hack Club"
              width={140}
              height={42}
              className="h-9 w-auto"
            />
            <div>
              <p className="text-sm font-semibold tracking-tight">
                Backed by Hack Club
              </p>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Your donation is tax-deductible and Hack Club issues the
                receipt. {site.fiscalSponsor.statement}
              </p>
            </div>
          </div>
          <Button asChild className="shrink-0 rounded-full">
            <Link href="/donate">
              Support the work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
