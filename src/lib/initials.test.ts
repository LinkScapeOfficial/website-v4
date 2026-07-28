import { describe, expect, it } from "vitest";
import { initials } from "./initials";
import { people } from "@/content/team";

describe("initials", () => {
  it("takes the first letter of the first two names", () => {
    expect(initials("Sean Li")).toBe("SL");
    expect(initials("Thomas Wu")).toBe("TW");
  });

  it("drops a parenthesised preferred name", () => {
    expect(initials("Liqian (Eric) Yan")).toBe("LY");
  });

  it("stops at two letters however many names follow", () => {
    expect(initials("Ada Augusta Byron King")).toBe("AA");
  });

  it("handles a single name", () => {
    expect(initials("Prince")).toBe("P");
  });

  it("uppercases whatever it is given", () => {
    expect(initials("ada lovelace")).toBe("AL");
  });

  it("survives padding and repeated spaces", () => {
    expect(initials("  Grace   Hopper  ")).toBe("GH");
  });

  it("returns an empty string rather than throwing on empty input", () => {
    expect(initials("")).toBe("");
    expect(initials("   ")).toBe("");
    expect(initials("()")).toBe("");
  });

  it("keeps the whole hyphenated name as one word", () => {
    expect(initials("Jean-Luc Picard")).toBe("JP");
  });

  it("works on names outside the Latin alphabet", () => {
    expect(initials("张 伟")).toBe("张伟");
  });

  it("produces a non-empty plate for every person on the roster", () => {
    for (const person of people) {
      expect(initials(person.name), person.name).not.toBe("");
    }
  });
});
