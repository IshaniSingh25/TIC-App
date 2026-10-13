import Link from "next/link";
import { countForMood } from "@/lib/filter";
import { MOODS, type MoodId } from "@/lib/moods";
import { PRODUCTS } from "@/lib/products";

/**
 * Filter state lives in the URL, not in React state, so a filtered shop view is
 * shareable and survives a refresh. Each chip is a link that toggles its own
 * mood in the query; CandleCatalogue reads it back in the browser.
 */
export default function MoodFilters({ selected }: { selected: MoodId[] }) {
  const toggle = (mood: MoodId) =>
    selected.includes(mood)
      ? selected.filter((id) => id !== mood)
      : [...selected, mood];

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
      <Chip href={{ pathname: "/candles" }} active={selected.length === 0}>
        All · {PRODUCTS.length}
      </Chip>

      {MOODS.map((mood) => {
        const next = toggle(mood.id);
        return (
          <Chip
            key={mood.id}
            href={{
              pathname: "/candles",
              query: next.length ? { mood: next } : undefined,
            }}
            active={selected.includes(mood.id)}
          >
            {mood.name} · {countForMood(PRODUCTS, mood.id)}
          </Chip>
        );
      })}
    </div>
  );
}

function Chip({
  href,
  active,
  children,
}: {
  href: React.ComponentProps<typeof Link>["href"];
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-pressed={active}
      className={`text-eyebrow border px-4 py-2.5 transition-colors duration-300 ${
        active
          ? "border-ink bg-ink text-sand"
          : "border-line text-ink hover:border-terracotta hover:text-terracotta"
      }`}
    >
      {children}
    </Link>
  );
}
