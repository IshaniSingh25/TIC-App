import Link from "next/link";
import type { Route } from "next";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** The "01", "02" numeral that rules the top of each section. */
  index?: string;
  eyebrow: string;
  title: string;
  link?: { href: Route; label: string };
};

/**
 * The repeated section header: a hairline rule carrying a numeral and an
 * eyebrow, with the display title below it. Using the same component
 * everywhere is what gives the page its vertical rhythm.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  link,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-4 border-t border-line pt-4">
        {index && (
          <span className="text-eyebrow font-medium text-terracotta">
            {index}
          </span>
        )}
        <span className="text-eyebrow text-stone">{eyebrow}</span>
        {link && (
          <Link
            href={link.href}
            className="link-rule ml-auto text-eyebrow text-ink"
          >
            {link.label}
          </Link>
        )}
      </div>
      <h2 className="text-display-lg mt-5 max-w-[16ch] font-display font-light text-balance">
        {title}
      </h2>
    </Reveal>
  );
}
