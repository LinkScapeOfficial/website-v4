import { afterEach, describe, expect, it, vi } from "vitest";
import { ORG, parseRepoCount } from "./github";

describe("parseRepoCount", () => {
  it("reads the count from a real org payload", () => {
    expect(parseRepoCount({ public_repos: 15, login: ORG })).toBe(15);
  });

  it("accepts zero, which is a true count and not a missing one", () => {
    expect(parseRepoCount({ public_repos: 0 })).toBe(0);
  });

  it("rejects a payload that is not an object", () => {
    for (const bad of [null, undefined, 15, "15", true, []]) {
      expect(parseRepoCount(bad), String(bad)).toBeUndefined();
    }
  });

  it("rejects a missing or non-numeric field", () => {
    expect(parseRepoCount({})).toBeUndefined();
    expect(parseRepoCount({ public_repos: "15" })).toBeUndefined();
    expect(parseRepoCount({ public_repos: null })).toBeUndefined();
  });

  it("rejects a rate-limit body, which has no count at all", () => {
    expect(
      parseRepoCount({ message: "API rate limit exceeded", status: "403" }),
    ).toBeUndefined();
  });

  it("rejects counts that cannot be real", () => {
    for (const bad of [-1, 1.5, NaN, Infinity]) {
      expect(parseRepoCount({ public_repos: bad }), String(bad)).toBeUndefined();
    }
  });
});

describe("publicRepoCount", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  async function load() {
    vi.resetModules();
    return (await import("./github")).publicRepoCount;
  }

  it("returns the live figure", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ public_repos: 15 }))),
    );
    expect(await (await load())()).toBe(15);
  });

  it("returns undefined rather than throwing when the request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        throw new Error("getaddrinfo ENOTFOUND api.github.com");
      }),
    );
    expect(await (await load())()).toBeUndefined();
  });

  it("returns undefined on a rate limit rather than parsing the error body", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () =>
          new Response(JSON.stringify({ message: "API rate limit exceeded" }), {
            status: 403,
          }),
      ),
    );
    expect(await (await load())()).toBeUndefined();
  });

  it("returns undefined when the body is not JSON", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response("<html>502</html>")),
    );
    expect(await (await load())()).toBeUndefined();
  });

  it("requests the count once however many callers ask", async () => {
    const spy = vi.fn(
      async () => new Response(JSON.stringify({ public_repos: 15 })),
    );
    vi.stubGlobal("fetch", spy);
    const publicRepoCount = await load();
    const [a, b, c] = await Promise.all([
      publicRepoCount(),
      publicRepoCount(),
      publicRepoCount(),
    ]);
    expect([a, b, c]).toEqual([15, 15, 15]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
