import Link from "next/link";
import type { Route } from "next";
import { MOODS } from "@/lib/moods";
import NewsletterBar from "./NewsletterBar";

const SHOP: { href: Route; label: string }[] = [
  { href: "/candles", label: "All candles" },
  { href: "/collections", label: "Collections" },
];

const HOUSE: { href: Route; label: string }[] = [
  { href: "/story", label: "Our story" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-(--spacing-section)">
      <NewsletterBar />

      <div className="grid gap-12 px-(--spacing-gutter) py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl tracking-[0.35em]">AURVI</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone">
            Hand-poured in small batches. Coconut and apricot wax, cotton wicks,
            no dyes. Made slowly, on purpose.
          </p>
        </div>

        <FooterColumn title="Shop" links={SHOP} />

        <div>
          <p className="text-eyebrow text-stone">Moods</p>
          <ul className="mt-5 space-y-3">
            {MOODS.slice(0, 4).map((mood) => (
              <li key={mood.id}>
                <Link
                  href={{ pathname: "/candles", query: { mood: mood.id } }}
                  className="link-rule text-sm"
                >
                  {mood.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="House" links={HOUSE} />
      </div>

      <div className="flex flex-col gap-3 border-t border-line px-(--spacing-gutter) py-7 text-sm text-stone md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} AURVI. A fictional brand, built as a design study.</p>
        <p>Photography via Unsplash.</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: Route; label: string }[];
}) {
  return (
    <div>
      <p className="text-eyebrow text-stone">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="link-rule text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
