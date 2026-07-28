const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Anything with a scheme or a protocol-relative prefix is somebody else's host. */
const ABSOLUTE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

/**
 * Prefix a path in `public/`.
 *
 * next/link applies the base path itself. next/image does so only through the
 * optimizer endpoint, and this project sets `images.unoptimized`, which returns
 * the `src` verbatim; a local `src` on an Image is therefore just as bare as one
 * on a hand-written image tag. Everything pointing at `public/` goes through
 * here, Image included, or it 404s under the exported base path while working
 * on Vercel.
 *
 * Absolute URLs pass through untouched, and the call is idempotent, so wrapping
 * a value twice is safe.
 */
export function asset(path: string) {
  if (!path || ABSOLUTE.test(path)) return path;
  if (BASE && (path === BASE || path.startsWith(`${BASE}/`))) return path;
  return `${BASE}${path}`;
}
