# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary user is a high-school student, roughly 14 to 18, who already writes
some code and is trying to work out whether LinkScape is real and whether they
belong in it. They arrive from a GitHub repository, a Discord invite, a hackathon,
or a friend, usually on a phone, usually skeptical, and usually comparing this
against school clubs that promised more than they delivered. Their job on the site
is to see actual work, understand what they would be doing, judge whether the bar
is above them or within reach, and find the way in.

A secondary audience reads over that student's shoulder and cannot be ignored:
parents, teachers, school administrators, partner organizations, and prospective
sponsors. They arrive at the same pages and ask a different question, which is
whether this organization is accountable and safe for a minor to join. The site is
optimized for the student, but no page may be written in a way that fails the
adult reading it.

## Product Purpose

LinkScape is a student-led nonprofit that teaches AI through project work rather
than curriculum. Members are given compute, a real unsolved problem, and a mentor
who reviews their code, and what they produce ships publicly: papers, models,
datasets, and tools. The organization also runs offline programming, principally
the SH Hacks hackathon series, plus workshops and lectures.

Success for the website is a qualified student who understands the work, believes
it is genuine, and joins. Volume is explicitly not the goal.

## Positioning

An 80-GPU cluster, a real research problem, and someone to review the code. Very
few high-school programs can offer any of those three, and almost none offer all
of them with the output released open source by default. Peer organizations
typically offer curriculum, competition prep, or a Discord server.

## Operating Context

Founded December 19, 2022. Tagline "Hack, Build, Compete."

LinkScape operates as a fiscally sponsored project of The Hack Foundation dba Hack
Club, a 501(c)(3) nonprofit. Hack Club holds the charitable status and every dollar
moves through Hack Club Bank. LinkScape is not itself a 501(c)(3), and any wording
implying otherwise is factually wrong.

Governance runs on a written document pack. A subset is published on the site as
both web pages and PDFs, generated from source .docx files by a re-runnable
pipeline (`scripts/docx_to_md.py`, then `scripts/build_pdfs.py`). The private
source pack is deliberately excluded from the repository. Published documents are
labeled **Adopted**; no document is ever labeled a draft.

Three officers lead: CEO Thomas Wu, CFO Liqian (Eric) Yan, CTO Zigao Wang, reachable
at thomas@, eric@, and zigao@linkscape.app. The roster is three officers, five
members, and three fellows, and it is the single source in `src/content/team.ts`
that every count on the site derives from.

Work is organized under three pillars, and every program serves at least one:
Building Impact, Developing Talent, Fostering Community.

## Capabilities and Constraints

Next.js 15 App Router, React 19, TypeScript, Tailwind, shadcn/ui, Framer Motion,
next-themes, Geist Sans and Geist Mono. Light and dark themes are both first-class.

The site must build two ways from one codebase: a server build deployed to Vercel
at linkscape.app, and a fully static export (`DEMO_EXPORT=1`) that runs from any
file server and supports a base path for GitHub Pages. Anything that requires a
server at request time is therefore unavailable. Raw `<img>` and `<a>` tags must
route through `src/lib/asset.ts` so the base path applies.

Content is data, not markup. Everything an editor changes lives in `src/content/`,
and adding a project is an edit to `work.ts` with no JSX changes.

The site must render its content without JavaScript. Entrance animations start at
opacity zero, so the no-script path reveals them, and statistics are initialized at
their real values rather than counted up from zero.

Undecided: whether the site moves to `website-v4` on Vercel, and whether
shhacks.com is reconciled to match the corrected organizer list.

## Brand Commitments

The existing LinkScape visual identity is binding: the wordmark, Geist as the
typeface family, and a restrained, document-like, high-contrast aesthetic that
reads as engineering rather than marketing.

Prose is a hard constraint and was the subject of explicit correction. No em dashes.
No sentence fragments. No definition by negation, meaning no stacked sentences that
say what LinkScape is not. Writing is treated as literature, is explicit and
audience-facing, and gets to the point. Where an element can carry the meaning
instead of a paragraph, the element wins.

Nothing in the design may read as machine-generated. That was a stated goal of the
rebuild and it applies to visual signatures as much as to prose.

## Evidence on Hand

Real, and safe to show:

- Five bodies of work in `src/content/work.ts`, including CNMBERT, submitted to ACL
  Rolling Review 2027 with a decision pending, Resonaite, created primarily by
  co-founder and CFO Liqian Yan, LinkDown, and the SH Hacks hackathon series.
- Seven generated figures in `public/figures/`, each with a light and dark variant,
  built by `scripts/build_figures.py`. The Resonaite figure runs the project's real
  modulation math rather than illustrating it.
- Twenty-two published governance PDFs in `public/governance/`.
- Public GitHub organization at github.com/LinkScapeOfficial. Star counts may be
  fetched at build time and shown, since they are externally verifiable.

Absent, and never to be invented:

- Student reach, attendance, and headcount figures. Real numbers exist but have not
  been released, so the design must hold together with no metrics band at all.
- Outcomes, admissions results, awards, and testimonials.
- Any implication that a displayed logo constitutes sponsorship or endorsement.

## Product Principles

1. **Show the work, then explain it.** A student judges the artifact before the
   claim. Figures, repositories, and papers precede prose everywhere.
2. **Survive the adult in the room.** Governance, safety, and fiscal sponsorship
   are first-class and reachable, never buried to keep the student pages clean.
3. **Say the true thing plainly.** Pending means pending, sponsored means sponsored,
   and an unknown number is absent rather than estimated.
4. **The bar is visible and the door is open.** The work on display is genuinely
   demanding, and the path in never requires the visitor to already be an expert.
5. **Content outlives layout.** Anything an editor will change lives in data, so the
   site stays true without a developer.

## Accessibility & Inclusion

Some members are minors, which raises the floor on safety and on clarity of contact
and escalation paths. Membership is open worldwide and is designed for people who
have never trained a model, so no page may assume prior machine-learning knowledge
to be navigable. The site must remain readable and operable without JavaScript, with
a working skip link, and in both light and dark themes.
