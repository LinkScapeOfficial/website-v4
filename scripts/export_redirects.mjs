// Static hosting has no redirect layer, so the two legacy paths get a stub
// page that forwards immediately and still works with JavaScript disabled.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const BASE = process.env.BASE_PATH ?? "";
const routes = [
  ["projects", "/work/"],
  ["legal-index", "/governance/"],
];

for (const [from, to] of routes) {
  const dir = join(OUT, from === "legal-index" ? "legal" : from);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "index.html"),
    `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=${BASE}${to}">
<link rel="canonical" href="${BASE}${to}">
<title>Moved</title></head>
<body><p>This page moved to <a href="${BASE}${to}">${to}</a>.</p></body></html>\n`,
  );
  console.log(`  /${from === "legal-index" ? "legal" : from}/ -> ${to}`);
}
