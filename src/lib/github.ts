export const ORG = "LinkScapeOfficial";

/**
 * Pull the repository count out of an org payload, rejecting anything that is
 * not a real count. Split from the request so the validation is testable
 * without a network, which is the part that decides what reaches the page.
 */
export function parseRepoCount(payload: unknown): number | undefined {
  if (typeof payload !== "object" || payload === null) return undefined;
  const value = (payload as { public_repos?: unknown }).public_repos;
  if (typeof value !== "number") return undefined;
  if (!Number.isInteger(value) || value < 0) return undefined;
  return value;
}

let cached: Promise<number | undefined> | undefined;

/**
 * The organization's public repository count, read at build time.
 *
 * PRODUCT.md allows this figure precisely because a reader can check it
 * themselves. It is fetched rather than committed because a number typed into
 * the source drifts silently, which is how the page came to claim fourteen
 * repositories against an actual fifteen.
 *
 * A failed request returns undefined and the cell renders "Not yet reported",
 * per the No Placeholder Number rule. That is deliberate: a transient failure
 * should leave the figure absent rather than restate a number nobody checked.
 */
export function publicRepoCount(): Promise<number | undefined> {
  cached ??= (async () => {
    const token = process.env.GITHUB_TOKEN;
    try {
      const res = await fetch(`https://api.github.com/orgs/${ORG}`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": `${ORG}-website`,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) return undefined;
      return parseRepoCount(await res.json());
    } catch {
      // Offline builds and rate limits are both expected; neither may fail one.
      return undefined;
    }
  })();
  return cached;
}
