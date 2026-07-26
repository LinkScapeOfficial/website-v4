const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a path in `public/`.
 *
 * next/image and next/link apply basePath themselves; raw <img> and <a> do
 * not, so anything referencing an asset directly goes through this.
 */
export function asset(path: string) {
  return `${BASE}${path}`;
}
