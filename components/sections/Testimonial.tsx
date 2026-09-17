import Reveal from "@/components/ui/Reveal";

/**
 * No card, no avatar, no star rating — the quote is set at display size and
 * given its own band of whitespace. Restraint is the point.
 */
export default function Testimonial() {
  return (
    <section className="mt-(--spacing-section) px-(--spacing-gutter)">
      <Reveal>
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote className="text-display-md font-display font-light text-balance">
            &ldquo;I bought Ember Hour for a friend and ended up keeping it.
            Three weeks later the room still smells like the good part of
            winter.&rdquo;
          </blockquote>
          <figcaption className="text-eyebrow mt-8 text-stone">
            Radhika M. · Pune
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
