/**
 * The letters an engraved plate carries when a person has no photograph.
 *
 * Parenthesised names are how the roster writes a preferred name next to a
 * legal one ("Liqian (Eric) Yan"), and the plate should show the two names a
 * reader actually says, so the parenthetical is dropped before the split.
 */
export function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
