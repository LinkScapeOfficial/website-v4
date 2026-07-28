import { afterEach, describe, expect, it, vi } from "vitest";

/**
 * asset() captures the base path once at module load, so every case has to
 * re-import the module under a fresh environment rather than call a setter.
 */
async function load(basePath?: string) {
  vi.resetModules();
  if (basePath === undefined) {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "");
  } else {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", basePath);
  }
  return (await import("./asset")).asset;
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("asset on the server build, where no base path is set", () => {
  it("treats an unset variable as an empty base path", async () => {
    vi.resetModules();
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", undefined);
    const { asset } = await import("./asset");
    expect(asset("/shhacks.jpeg")).toBe("/shhacks.jpeg");
  });

  it("returns a local path untouched", async () => {
    const asset = await load();
    expect(asset("/figures/cnm-bert-arch-light.svg")).toBe(
      "/figures/cnm-bert-arch-light.svg",
    );
    expect(asset("/team/ricky-ren.jpg")).toBe("/team/ricky-ren.jpg");
  });
});

describe("asset under the exported base path", () => {
  it("prefixes a local path", async () => {
    const asset = await load("/website-v4");
    expect(asset("/shhacks.jpeg")).toBe("/website-v4/shhacks.jpeg");
    expect(asset("/team/ricky-ren.jpg")).toBe("/website-v4/team/ricky-ren.jpg");
  });

  it("is idempotent, so wrapping an already-prefixed path is safe", async () => {
    const asset = await load("/website-v4");
    expect(asset(asset("/shhacks.jpeg"))).toBe("/website-v4/shhacks.jpeg");
  });

  it("does not prefix a path that merely starts with the same letters", async () => {
    const asset = await load("/website-v4");
    expect(asset("/website-v42/x.png")).toBe("/website-v4/website-v42/x.png");
  });

  it("leaves absolute URLs on other hosts alone", async () => {
    const asset = await load("/website-v4");
    for (const url of [
      "https://avatars.githubusercontent.com/u/100058339",
      "http://example.com/a.png",
      "//cdn.linkscape.app/logo.png",
      "data:image/svg+xml,%3Csvg%3E%3C/svg%3E",
      "mailto:eric@linkscape.app",
    ]) {
      expect(asset(url), url).toBe(url);
    }
  });

  it("returns an empty string unchanged rather than emitting a bare base path", async () => {
    const asset = await load("/website-v4");
    expect(asset("")).toBe("");
  });
});
