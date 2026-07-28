import { describe, expect, it } from "vitest";
import { byTier, people, plural, rosterLine, tiers } from "./team";

describe("byTier", () => {
  it("partitions the roster with nobody lost and nobody counted twice", () => {
    const counted = tiers.flatMap((t) => byTier(t.key));
    expect(counted).toHaveLength(people.length);
    expect(new Set(counted.map((p) => p.name)).size).toBe(people.length);
  });

  it("returns people who really carry that tier", () => {
    for (const tier of tiers) {
      for (const person of byTier(tier.key)) {
        expect(person.tier).toBe(tier.key);
      }
    }
  });
});

describe("plural", () => {
  it("drops the s at exactly one", () => {
    expect(plural(1, "officer")).toBe("1 officer");
    expect(plural(1, "fellow")).toBe("1 fellow");
  });

  it("adds the s everywhere else, zero included", () => {
    expect(plural(0, "member")).toBe("0 members");
    expect(plural(2, "member")).toBe("2 members");
    expect(plural(11, "member")).toBe("11 members");
  });
});

describe("rosterLine", () => {
  it("names all three tiers in order", () => {
    expect(rosterLine()).toMatch(
      /^\d+ officers?, \d+ members?, \d+ fellows?$/,
    );
  });

  it("agrees with the roster it derives from", () => {
    const line = rosterLine();
    expect(line).toContain(`${byTier("leadership").length} officer`);
    expect(line).toContain(`${byTier("members").length} member`);
    expect(line).toContain(`${byTier("fellows").length} fellow`);
  });

  it("sums to the headcount the home page prints beside it", () => {
    const total = rosterLine()
      .split(", ")
      .reduce((n, part) => n + Number(part.split(" ")[0]), 0);
    expect(total).toBe(people.length);
  });
});

describe("roster data", () => {
  it("gives every person a name, a role, and a known tier", () => {
    const keys = new Set(tiers.map((t) => t.key));
    for (const person of people) {
      expect(person.name.trim(), JSON.stringify(person)).not.toBe("");
      expect(person.role.trim(), person.name).not.toBe("");
      expect(keys.has(person.tier), `${person.name}: ${person.tier}`).toBe(true);
    }
  });

  it("uses absolute URLs or rooted paths for every portrait", () => {
    for (const person of people) {
      if (person.imageUrl === undefined) continue;
      expect(
        /^(https?:\/\/|\/)/.test(person.imageUrl),
        `${person.name}: ${person.imageUrl}`,
      ).toBe(true);
    }
  });

  it("has no duplicate names, since the name is the React key", () => {
    expect(new Set(people.map((p) => p.name)).size).toBe(people.length);
  });
});
