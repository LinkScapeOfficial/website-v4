# linkscape.app

The LinkScape website. Next.js 15, TypeScript, Tailwind.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm lint
```

Node 22 and pnpm 11. `pnpm-workspace.yaml` approves the two dependencies that
build native binaries.

## Layout

```
src/app/           Routes
src/components/    layout/ is the ruled-grid system; animations/ the entrance effects
src/content/       All editable content
src/lib/           Governance document loader
scripts/           Content pipelines
public/            Static assets, generated figures, governance PDFs
```

## Editing content

Everything a non-developer needs to change lives in `src/content/`:

| File | What it holds |
| --- | --- |
| `site.ts` | Positioning, navigation, pillars, values, contact addresses |
| `work.ts` | Projects, research, and events, with their figures and facts |
| `team.ts` | Roster and role remits |
| `doc-register.ts` | The deliverable register |
| `governance/*.md` | Published policy documents (generated) |

Adding a project is an edit to `work.ts`. No JSX changes required.

## Pipelines

Both are re-runnable and idempotent. Commit their output.

```bash
python3 scripts/docx_to_md.py    # policy .docx -> src/content/governance/*.md
python3 scripts/build_pdfs.py    # those .md -> public/governance/*.pdf
python3 scripts/build_figures.py # project charts -> public/figures/*.svg
```

`docx_to_md.py` reads the organizational document pack, which is held privately
and is not part of this repository. It publishes the subset listed in its
`PUBLIC` constant and aborts if a document loses text during conversion.

`build_pdfs.py` needs `pandoc` and Chrome. Set `CHROME_PATH` if Chrome is not in
the default location.


## Offline demo

`pnpm demo` writes a self-contained site to `out/`. Serve it with any static
file server; there is no Node process to run.

```bash
pnpm demo
cd out && python3 -m http.server 4173
```

Redirects and image optimisation need a server, so the export substitutes
meta-refresh stubs for `/projects` and `/legal` and turns optimisation off.

## Deployment

Vercel, on push to `main`. `postbuild` regenerates the sitemap.
