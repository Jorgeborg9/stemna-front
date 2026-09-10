import Link from "next/link";

export type ContextualLink = { text: string; href: string };

// Explicit, page-specific phrases only: no automatic site-wide keyword linking.
export function ContextualText({
  text,
  links = [],
}: {
  text: string;
  links?: ContextualLink[];
}) {
  const matches = links
    .map((link) => ({ ...link, start: text.indexOf(link.text) }))
    .filter((link) => link.start >= 0)
    .sort((a, b) => a.start - b.start);
  let cursor = 0;
  const content = [];
  for (const link of matches) {
    if (link.start < cursor) continue;
    content.push(text.slice(cursor, link.start));
    content.push(
      <Link
        className="contextual-link"
        href={link.href}
        key={`${link.start}-${link.href}`}
      >
        {link.text}
      </Link>,
    );
    cursor = link.start + link.text.length;
  }
  content.push(text.slice(cursor));
  return <>{content}</>;
}
