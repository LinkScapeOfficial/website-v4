import { describe, expect, it } from "vitest";
import {
  DOMAIN_ORDER,
  allDocs,
  docsByDomain,
  getDoc,
  slugifyHeading,
} from "./governance";

describe("slugifyHeading", () => {
  it("turns a dotted section number into a stable anchor", () => {
    expect(slugifyHeading("1", "Purpose")).toBe("s-1");
    expect(slugifyHeading("2.3", "Scope")).toBe("s-2-3");
    expect(slugifyHeading("10.1.4", "Review")).toBe("s-10-1-4");
  });

  it("ignores the label, so rewording a heading does not break inbound links", () => {
    expect(slugifyHeading("4", "Roles")).toBe(slugifyHeading("4", "Duties"));
  });

  it("handles the roman numerals the converter also emits", () => {
    expect(slugifyHeading("IV", "Annexes")).toBe("s-IV");
  });
});

describe("allDocs", () => {
  const docs = allDocs();

  it("reads the published pack", () => {
    expect(docs.length).toBeGreaterThan(0);
  });

  it("sorts by id numerically, so G-2 precedes G-10", () => {
    const ids = docs.map((d) => d.id);
    const sorted = [...ids].sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true }),
    );
    expect(ids).toEqual(sorted);
  });

  it("caches, returning the same array on a second call", () => {
    expect(allDocs()).toBe(docs);
  });

  it("gives every document the metadata the page renders", () => {
    for (const d of docs) {
      for (const field of ["id", "title", "domain", "summary"] as const) {
        expect(String(d[field] ?? "").trim(), `${d.id}.${field}`).not.toBe("");
      }
    }
  });

  it("never labels a document a draft", () => {
    for (const d of docs) {
      expect(String(d.status).toLowerCase(), d.id).not.toContain("draft");
    }
  });

  it("gives each document unique section anchors", () => {
    for (const d of docs) {
      const ids = d.sections.map((s) => s.id);
      expect(new Set(ids).size, `${d.id} has duplicate anchors`).toBe(
        ids.length,
      );
    }
  });

  it("does not leak regex lastIndex between documents", () => {
    // A shared /g regex would starve every document after the first.
    const withSections = allDocs().filter((d) => d.sections.length > 0);
    expect(withSections.length).toBeGreaterThan(1);
  });
});

describe("getDoc", () => {
  it("finds a document by id regardless of case", () => {
    const first = allDocs()[0];
    expect(getDoc(first.id)?.id).toBe(first.id);
    expect(getDoc(first.id.toLowerCase())?.id).toBe(first.id);
    expect(getDoc(first.id.toUpperCase())?.id).toBe(first.id);
  });

  it("returns undefined for an id that does not exist", () => {
    expect(getDoc("not-a-real-document")).toBeUndefined();
  });
});

describe("docsByDomain", () => {
  const groups = docsByDomain();

  it("loses no document to grouping", () => {
    const grouped = groups.flatMap((g) => g.docs);
    expect(grouped).toHaveLength(allDocs().length);
  });

  it("emits no empty group", () => {
    for (const g of groups) expect(g.docs.length).toBeGreaterThan(0);
  });

  it("keeps the known domains in their declared order", () => {
    const seen = groups
      .map((g) => g.domain)
      .filter((d) => DOMAIN_ORDER.includes(d));
    const expected = DOMAIN_ORDER.filter((d) => seen.includes(d));
    expect(seen).toEqual(expected);
  });

  it("appends any domain missing from DOMAIN_ORDER rather than dropping it", () => {
    const known = groups.filter((g) => DOMAIN_ORDER.includes(g.domain)).length;
    const unknown = groups.length - known;
    expect(known + unknown).toBe(groups.length);
    const domains = new Set(allDocs().map((d) => d.domain));
    expect(new Set(groups.map((g) => g.domain))).toEqual(domains);
  });
});
