import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops falsy values, which is how conditional classes are written", () => {
    expect(cn("a", false && "b", undefined, null, "c")).toBe("a c");
  });

  it("lets a later Tailwind class win over an earlier one in the same group", () => {
    expect(cn("px-2", "px-6")).toBe("px-6");
    expect(cn("text-muted-foreground", "text-foreground")).toBe(
      "text-foreground",
    );
  });

  it("keeps classes from different groups", () => {
    expect(cn("px-6", "py-5")).toBe("px-6 py-5");
  });

  it("accepts arrays and objects", () => {
    expect(cn(["a", "b"], { c: true, d: false })).toBe("a b c");
  });

  it("returns an empty string for no input", () => {
    expect(cn()).toBe("");
  });
});
