---
name: LinkScape
description: A student AI research organization documented like instrumentation, not marketed like a club.
colors:
  ink: "#09090b"
  paper: "#fafafa"
  surface: "#ffffff"
  rule: "#e4e4e7"
  muted-surface: "#f4f4f5"
  muted-ink: "#71717a"
  hover-wash: "#f9fafb"
  signal-blue: "#0969da"
  signal-blue-hairline: "#80ccff"
  signal-blue-edge: "#218bff"
  signal-blue-wash: "#ddf4ff"
  ink-dark: "#fafafa"
  paper-dark: "#09090b"
  surface-dark: "#0b0b0d"
  rule-dark: "#27272a"
  muted-surface-dark: "#27272a"
  muted-ink-dark: "#a1a1aa"
  hover-wash-dark: "#18181b"
typography:
  display:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  prose:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  supporting:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  readout:
    fontFamily: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontFeature: "tabular-nums"
  label:
    fontFamily: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
  meta:
    fontFamily: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  none: "0px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  hairline: "1px"
  xs: "6px"
  sm: "12px"
  cell: "24px"
  band: "48px"
  gutter: "16px"
  gutter-wide: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "32px"
    typography: "{typography.supporting}"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-primary-lg:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "48px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.ink}"
  chip-default:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
    typography: "{typography.supporting}"
  chip-strong:
    backgroundColor: "{colors.muted-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
    typography: "{typography.supporting}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
    typography: "{typography.label}"
  lattice-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  lattice-cell-hover:
    backgroundColor: "{colors.hover-wash}"
  fact-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  fact-row-compact:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  stat-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "32px 24px"
    typography: "{typography.readout}"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.supporting}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
---

# Design System: LinkScape

## Overview

**Creative North Star: "The Instrument Panel"**

LinkScape reads as precision hardware rather than a student club. The visitor is a
sixteen-year-old deciding whether these people are serious, and the interface
answers before the copy does: everything is aligned to a rule, every number is
monospaced and right-weighted, contrast is high, and nothing is decorated for the
sake of looking designed. The feeling to aim for is a well-built measuring device.
It is legible at a glance, it tells you exactly one thing per readout, and its
restraint is what makes it credible.

The system is built from rules and cells, never from floating cards. Content sits
inside a bordered lattice that runs the full width of the page, and the hero opens
with vertical hairlines pitched to the exact column count of the band beneath it, so
the ruling the visitor meets at the top of the page is literally the ruling that
carries the content. Surfaces are flat without exception: depth is a
one-pixel rule and a one-step tonal lift, and there is no shadow anywhere in the
page body. Where a diagram, figure, or number can carry the point, it replaces the
paragraph.

Color is nearly absent by design. Ink on paper does the work, and a single
GitHub-derived blue marks the things a visitor can act on. Three treatments are
explicitly rejected: gradient-filled headings, any decorative background field that
is not structurally connected to the page grid, and any atmospheric glow laid behind
content. All three were present in an earlier build, all three are recognizable
signatures of machine-generated interfaces, and this organization is judged on the
appearance of being genuinely built.

**Key Characteristics:**

- Ruled cells, not cards. The border is the container.
- Flat everywhere. No shadow carries structure, state, or atmosphere.
- Monospace for every number, identifier, and label.
- One accent color, reserved for action.
- Both themes are authored, neither is derived.
- The page must be readable and navigable with JavaScript disabled.

## Colors

A two-value system of ink and paper, held together by a single hairline rule color,
with one blue reserved for anything the visitor can act on.

### Primary

- **Signal Blue** (`#0969da`): The only chromatic color in the interface. It sets
  link text inside published prose in light mode, becomes the link underline in dark
  mode, and fills the two-pixel reading-progress bar on a governance document. It
  never fills a surface, never tints a heading, and never appears in the site chrome.
- **Signal Blue Hairline** (`#80ccff`): The mirror value. It is the link underline at
  rest in light mode and the link text in dark mode, so the pair swaps roles between
  themes rather than introducing a fourth blue.
- **Signal Blue Edge** (`#218bff`): The two-pixel left edge on a blockquote inside a
  published document, in both themes.
- **Signal Blue Wash** (`#ddf4ff`): Blockquote fill in published governance documents
  only, at half alpha. It does not appear anywhere in the main site chrome.

### Neutral

- **Ink** (`#09090b` light, `#fafafa` dark): All primary text, the primary button
  fill, the active navigation marker, and the focus ring. Near-black rather than pure
  black so it sits correctly against off-white paper.
- **Paper** (`#fafafa` light, `#09090b` dark): The page floor. Slightly off-white,
  which lets pure-white surfaces read as raised without a shadow.
- **Surface** (`#ffffff` light, `#0b0b0d` dark): The band color for ruled content
  sections, figure frames, and the footer. The one-value separation from Paper is the
  entire elevation system.
- **Rule** (`#e4e4e7` light, `#27272a` dark): Every border, divider, cell edge, and
  hairline, including the hero's column rules. This single value does more structural
  work than any other token.
- **Muted Ink** (`#71717a` light, `#a1a1aa` dark): Supporting prose, captions, labels,
  inactive navigation, tags, and metadata.
- **Muted Surface** (`#f4f4f5` light, `#27272a` dark): Chip fills, table headers, code
  blocks, and the hover state on ghost controls.
- **Hover Wash** (`#f9fafb` light, `#18181b` dark): The tint an interactive cell takes
  on hover. Deliberately almost imperceptible; it confirms rather than announces.

### Non-palette utility

`--stencil` (`hsl(0 0% 0%)`) is not a color and is deliberately absent from the
palette above. It is an opaque value used only as the solid end of a `mask-image`
gradient, on the hero's column rules and on the partner marquee's edge fade. It is
never painted, never inherited as text or fill, and it has no dark-mode counterpart
because a mask reads alpha, not hue. Treat it as geometry that happens to be spelled
in color syntax.

### Named Rules

**The One Accent Rule.** Signal Blue is the system's only chromatic color, and it
means "you can act on this." A chip, a tag, a category, or a heading never earns
color. If something needs to be distinguished and it is not actionable, distinguish
it with a rule, a monospace label, or position.

**The Two Value Rule.** Light and dark are separately authored, not algorithmically
inverted. Every new color must be specified in both, and a design is not finished
until it has been read in both.

**The Rule Carries Structure.** Before reaching for a background, a shadow, or a
radius to separate two things, use a one-pixel border in Rule. That is the house
style and it is almost always sufficient.

**The Stencil Is Not A Color Rule.** A value that exists only to make a mask opaque
does not enter the palette, does not get a dark variant, and does not get reused as a
fill. If it ever paints a pixel the visitor can see, it has become a color and must
be justified as one.

## Typography

**Display Font:** Geist Sans (with `ui-sans-serif`, `system-ui`, `sans-serif`)
**Body Font:** Geist Sans
**Label / Numeric Font:** Geist Mono (with `ui-monospace`, `SFMono-Regular`, `Menlo`)

**Character:** One neutral, tightly drawn grotesque carries all prose, so the voice
never changes mid-page. Geist Mono is the instrument face: it appears wherever
something is measured, identified, or dated, and its presence is a signal that the
adjacent value is factual rather than editorial.

### Hierarchy

- **Display** (600, `clamp(2.25rem, 5vw, 3rem)`, 1.1, `-0.025em`): Page titles, one
  per route, in solid Ink. Never gradient-filled, never letterspaced open.
- **Headline** (600, `clamp(1.5rem, 3vw, 1.875rem)`, 1.2, `-0.025em`): Section titles
  inside the lattice, always paired with a bottom rule.
- **Title** (600, `1.125rem`, 1.4, `-0.025em`): Card and cell headings.
- **Body** (400, `1rem`, 1.625): Ledes and section copy in the site chrome.
  Constrained to roughly 65 to 75 characters, which in practice means `max-w-xl` for
  ledes and `max-w-2xl` for section copy.
- **Prose** (400, `15px`, 1.75, Ink at 85 percent): The long-form reading size, used
  for the body of published governance documents and work write-ups. One step below
  Body and one step looser, because it is read continuously rather than scanned.
  Blockquotes descend from it directly; tables and code blocks inside prose drop to
  Meta size.
- **Supporting** (400, `0.875rem`, 1.625, Muted Ink): Captions, cell descriptions,
  navigation, inline links, and secondary rows. The floor of the ramp in Geist Sans.
- **Readout** (Geist Mono, 600, `clamp(1.875rem, 4vw, 2.25rem)`, 1, tabular figures):
  Statistics and headline numbers. Tabular figures are mandatory so a column of
  numbers aligns and so an animated count does not reflow the layout.
- **Label** (Geist Mono, `11px`, uppercase, `0.14em`, Muted Ink): Eyebrows, section
  keys, dates, identifiers, and stack tags. This is the panel's engraving.
- **Meta** (Geist Mono, 500, `13px`, 1.5): The value that sits under an engraved Label
  in a metadata grid: a version, a document identifier, an effective date. It is a
  readout at reading size, which is why it is monospaced but not uppercased. Figure
  captions and document tables share this size.

The ramp has exactly these nine steps and no half-steps. `10.5px`, `12.5px`,
`13.5px`, `14.5px`, and `15.5px` do not exist anywhere in the build; introducing one
is how a ramp stops being a ramp.

### Named Rules

**The Engraved Label Rule.** Anything that names, dates, categorizes, or identifies
is set in Geist Mono, uppercase, at `11px` with `0.14em` tracking. Anything that
argues or explains is set in Geist Sans. A visitor can tell fact from framing by
typeface alone.

**The Measured Eyebrow Rule.** An eyebrow carries a count, a date, a status, or an
identifier: "12 projects", "Founded 2023", "4 published · 11 registered". It never
paraphrases the heading beneath it. If the only eyebrow you can write restates the
section title, delete it. The engraved label is instrumentation, and a decorative
caption set in that typeface turns the whole panel into a costume.

**The Solid Heading Rule.** Headings are one solid color. No gradient fill, no
`background-clip: text`, no per-word tinting. A heading that needs a gradient to be
interesting is a heading with nothing to say.

**The Tabular Number Rule.** Every figure a reader might compare or scan is
monospaced with tabular figures. Numbers in running prose are exempt.

## Layout

The page is a single ruled lattice. A `max-w-6xl` container with `16px` gutters that
open to `32px` at the small breakpoint holds a vertical stack of sections, and each
section draws left and right borders so a continuous pair of vertical rules runs the
whole height of the site. Sections separate with a top border rather than with
whitespace, which is why the page reads as one instrument face instead of a scroll of
panels.

Inside a section, content lives in a lattice grid: `LatticeGrid` sets the column
count, `LatticeCell` draws a bottom and right border and pads by `24px`, and the grid
pulls itself `-1px` right and down so trailing rules clip against the parent and the
block stays flush at any column count. Column counts step at the standard
breakpoints, from one column on mobile up to two, three, four, or five.

Section headers occupy their own ruled band of `48px` vertical padding, with an
optional measured eyebrow, a headline, a lede, and a right-aligned action. Heroes run
taller: `128px` of top padding in the default size, and `208px` opening to `288px` at
the small breakpoint in the tall variant. The hero carries the same solid vertical
container rules as every other band, plus its own matched column ruling behind
the content.

Vertical rhythm comes from the `24px` cell and the `48px` band. Where a section needs
air rather than content, it takes a `48px` diagonally hatched spacer inside the same
vertical rules, so the grid never breaks.

The header is fixed, `64px` tall, transparent at rest, and gains a bottom rule plus a
blurred translucent background once the page scrolls past `24px`. Navigation collapses
to a sheet below the medium breakpoint.

### Named Rules

**The Continuous Rule Rule.** The two vertical container borders never break between
sections. If a new section cannot draw them, it belongs inside an existing one.

**The Flush Grid Rule.** Grid cells clip their trailing borders against an
overflow-hidden parent. Never hand-remove borders from the last item in a row; the
column count changes at every breakpoint and the hand-removal will be wrong.

**The Matched Pitch Rule.** Any full-bleed ruling laid behind content is inset to the
container's own gutters and pitched so its lines fall on the lattice's cell
divisions. A field that does not land on the grid is decoration, and decoration
behind content is the thing this system exists to refuse.

## Elevation & Depth

The system is flat. There is no shadow vocabulary and no shadow token. Every
`box-shadow` has been removed from the button primitives and from the page calls to
action, and depth is communicated by exactly three devices: a one-pixel rule in Rule
color, a one-step tonal lift from Paper to Surface, and, for the fixed header only, a
backdrop blur that lets content pass beneath it.

There is no atmospheric layer. No glow, no bloom, no radial field closes a hero or
softens a section edge. The one light-like effect in the system is the pointer
spotlight on a work card, a radial wash of Ink at 5.5 percent alpha that tracks the
cursor and disappears when the pointer leaves. It is a hover state, not elevation,
and it is drawn in ink rather than in a light color for exactly that reason.

### Named Rules

**The Flat Rule.** Surfaces are flat at rest, flat on hover, and flat on press. There
are no permitted shadows in the page body: not on a button, not on a card, not on a
cell, not on a chip, not on a hero. A new `box-shadow` is a defect, and the correct
fix is a rule or a tonal step.

**The No Atmosphere Rule.** Depth is never suggested by light. No radial glow, no
bloom, no vignette, no gradient fading into the page floor. If a region needs to feel
separate, give it a border and a surface value.

## Shapes

The form language is rectilinear. Cells, sections, tables, figures, and fact rows are
true rectangles with no radius, because the lattice depends on edges meeting exactly.

Radius appears only on elements that detach from the grid: `8px` on media frames,
figures, and code blocks; `6px` on default-size controls; `4px` on inline stack tags;
and a full pill on chips, navigation links, header buttons, and the page's calls to
action. The rule of thumb is that anything embedded in the lattice is square and
anything that floats above it is rounded.

Borders are always exactly one pixel, always in the Rule color, and always solid.
There are no dashed borders anywhere in the system. The hero, the footer, and every
band between them draw the same solid hairline, which is what lets the hero read as
the top of one continuous instrument face rather than a separate lid. A `315°`
repeating hatch at a `10px` pitch fills structural spacers, which is the one texture
in the system.

## Components

### Buttons

- **Shape:** A full pill (`9999px`) everywhere a button appears in the shipped pages.
  The primitive's own default is a small radius (`6px`), which survives for any
  control that has not been given a pill.
- **Primary:** Ink fill with Paper text. `32px` tall with `16px` of horizontal padding
  in the header; `48px` tall with `24px` of padding for a page call to action. No
  shadow at any size.
- **Hover / Focus:** Fill drops to 90 percent opacity, and the header and hero buttons
  scale to `1.02` on hover and `0.98` on press. Focus shows a one-pixel ring in Ink,
  never an outline suppression without a replacement.
- **Outline:** Paper fill, Rule border, Ink text. The default for secondary actions
  inside content.
- **Ghost:** No fill at rest, Muted Surface fill and Ink text on hover. Used for
  tertiary actions, icon controls, and the mobile menu trigger.

### Chips

The chip has exactly two renderings, and the second is rationed.

- **Default:** Full pill, one-pixel Rule border, Muted Surface fill at 60 percent,
  Muted Ink text, `10px` of horizontal padding at Supporting size. This is what a
  category, a type, or a classification gets.
- **Strong:** Full pill, border in Ink at 15 percent, fill in Ink at 6 percent, full
  Ink text. Reserved for a document or work **status**, the one chip on a screen the
  reader must resolve first. Never used for a category.
- **Mono:** Either rendering may switch to Geist Mono at `11px` for an identifier or a
  version. That changes the typeface, not the tone.

There is no third tone and no colored chip. Category, type, and status are carried by
the word inside the chip in both themes.

### Tags

A square (`4px`) hairline-bordered box in Geist Mono at `11px`, Muted Ink, with `6px`
of horizontal padding, naming a stack element or a tool. `TagRow` wraps them at a
`6px` gap. Tags are square because they sit inside the lattice; chips are pills
because they float above it. That difference is the whole reason both exist.

### Fact Row

An engraved label above a single value, closed by a bottom rule. `24px` of horizontal
and `20px` of vertical padding at default density, dropping to `20px` and `14px` in
compact, which suits a dense metadata grid. The value takes Geist Mono at `13px` when
it is an identifier, a version, or a date, and Geist Sans at Supporting size when it
is a phrase. `FactList` stacks rows into a rail and takes an `as` prop so a genuine
definition list renders `dl`/`dt`/`dd` while a decorative rail stays `div`/`p`. Pair
`definition` on the row with `as="dl"` on the list; a `dt` outside a `dl` is invalid
markup.

### Text Link

An inline destination inside prose, at Supporting size and medium weight, with a
trailing `14px` arrow glyph. The underline is drawn in Rule at rest and takes full Ink
on hover, so the affordance is felt as a weight change rather than announced with
color. The `external` prop opens a new tab. Note the deliberate asymmetry with
document prose: links inside a published governance document are the one place Signal
Blue sets text, while a TextLink in the site chrome stays in ink.

### Cards / Containers

The system has no cards. The equivalent is a lattice cell.

- **Corner Style:** Square (`0px`). The cell is defined by its bottom and right rule.
- **Background:** Surface, shifting to Hover Wash when interactive.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** One pixel, Rule color, on the bottom and right edges only.
- **Internal Padding:** `24px`.

### Inputs / Fields

- **Style:** Rule border, Paper fill, `6px` radius.
- **Focus:** A one-pixel ring in Ink. No glow, no border-width change, because a width
  change would shift the lattice by a pixel.

### Navigation

Set at Supporting size, Muted Ink at rest, Ink when active. Hover fills a pill in
Muted Surface. The active route is marked by a two-pixel Ink underline that animates
between items with a spring, and which snaps instantly when reduced motion is set.
Below the medium breakpoint the entire navigation moves into a sheet where each
destination is a full-width row separated by a rule.

### Hero Rules

The signature component, and the thesis of the system in one element. `HeroRules`
paints vertical hairlines in Rule color behind every hero: a right-facing linear
gradient that is one pixel of border color and the rest transparent, tiled at
`background-size: calc(100% / var(--hero-columns)) 100%`. The element is inset to the
container's own gutters (`left-4 right-4`, opening to `left-8 right-8` at the small
breakpoint), and every route passes the column count of the band directly beneath its
hero: four on the home page and on both document layouts, three on Work, About,
Donate, Governance, and Team, two on Join. Each line therefore falls exactly where
that band draws a cell division. The hero is not decorated with a background field;
it is ruled by the same grid that carries the content, extended upward.

Passing the wrong `columns` value silently converts this component back into the
decorative field it replaced. See **The Matched Pitch Rule** under Layout.

It is masked with a downward-strengthening linear gradient, transparent at the top and
fully opaque by 92 percent of the height, so the rules resolve into the body they
belong to rather than stopping at an edge. On mount it animates `scaleX` from `1.06`
to `1` together with opacity over `1.2s` on the shared expo-out ease, which reads as
the page being ruled rather than a backdrop being revealed. Under reduced motion the
duration goes to zero and the final state renders immediately.

### Statistic Readout

A ruled cell holding one figure in Geist Mono with tabular figures, an optional prefix
or suffix at reduced size in Muted Ink, a title-weight label, and an optional note.
The number is initialized at its true value so it is correct without JavaScript, and
the count-up is strictly decoration. A statistic with no substantiated value renders
the words "Not yet reported" at body size rather than a zero, an em dash, or a
placeholder.

### Figure

Generated charts ship as two files, one per theme, because an SVG in an image tag
cannot inherit the page theme. The light file is hidden in dark mode and the dark file
in light mode; photographs ship as a single file. Figures are framed with an `8px`
radius, a Rule border, and a Surface fill, and they carry a caption at Meta size.

### Motion

One easing curve governs the system: expo-out, `cubic-bezier(0.16, 1, 0.3, 1)`.
Durations are `0.24s` for a filter change, `0.35s` for a table row, `0.4s` for an
entrance, `1s` for the section-header sweep, `1.2s` for the hero rules, and `1.5s` for
a counting statistic. The one exception is the theme toggle at `0.22s` ease-out.

`RevealLine` sweeps a hairline once across the bottom of a section header on entry,
drawn in ink (`from-foreground/30 via-foreground/10 to-transparent`). It is not blue:
a decorative sweep is not an affordance, and coloring it would spend the one accent on
something the visitor cannot act on.

Entrance animation is rationed by surface. A hero staggers its own contents; a figure
fades in when it scrolls into view. Work detail pages do **not** animate paragraphs:
per-paragraph entrance was removed there, and only figures animate, because a reader
moving through an argument should not be made to wait for each claim to arrive.

### Named Rules

**The Two File Figure Rule.** Any generated graphic ships as a light and a dark
variant. A single graphic that "works on both" is a graphic that is wrong on one.

**The No Placeholder Number Rule.** An unsubstantiated figure is stated as absent in
words. It is never zero, never an approximation, and never a dash.

**The One Ease Rule.** Every transition in the system uses expo-out
`cubic-bezier(0.16, 1, 0.3, 1)`. New motion changes duration, not curve.

**The Reading Is Not An Entrance Rule.** Continuous prose is never staggered. Animate
the frame, the figure, and the rule; never the sentence the reader is trying to get to.

## Do's and Don'ts

### Do:

- **Do** separate content with a one-pixel solid border in Rule before considering a
  background, radius, or shadow.
- **Do** set every number, identifier, date, label, and stack tag in Geist Mono, and
  use tabular figures wherever numbers can be compared.
- **Do** write eyebrows as measured keys: a count, a date, a status, an identifier.
- **Do** author both themes explicitly, and read every new surface in both before
  calling it done.
- **Do** keep the two vertical container rules unbroken from the header to the footer.
- **Do** inset any full-bleed ruling to the container gutters and pitch it onto the
  lattice's cell divisions.
- **Do** initialize animated values at their true state so the page is correct with
  JavaScript disabled, and let animation affect timing only, never the rendered tree.
- **Do** let a figure, a readout, or a table replace a paragraph when it can carry the
  same meaning.
- **Do** reserve Signal Blue for things the visitor can act on.

### Don't:

- **Don't** apply a gradient to text, ever. No `background-clip: text`, no tinted
  headings.
- **Don't** add a decorative background field that is unconnected to the page grid.
  Hero background structure must be an extension of the lattice, not a tiled pattern
  laid behind it.
- **Don't** introduce a `box-shadow`. The system has none and needs none.
- **Don't** add a glow, bloom, vignette, or radial atmosphere to suggest depth.
- **Don't** use a dashed border. Every rule in the system is solid.
- **Don't** give a chip a third tone or a hue. Default is neutral, strong is for
  status, and categories are named in words.
- **Don't** round anything embedded in the lattice. Squares meet; pills float.
- **Don't** add a type size between the nine ramp steps.
- **Don't** write an eyebrow that restates the heading below it. Delete it instead.
- **Don't** stagger paragraphs of continuous prose.
- **Don't** invent a metric, a placeholder number, or a rounded estimate. If the
  figure is not substantiated, the design must hold with it absent.
- **Don't** use an em dash in interface copy, and don't define anything by what it is
  not.
- **Don't** branch the rendered markup on reduced motion. Change the transition, not
  the tree, or server and client will disagree and content will strand invisible.
