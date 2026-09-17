import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the AURVI studio — orders, wholesale, or just a question.",
};

const DETAILS = [
  { label: "Studio", value: "14 Wood Street, Cooke Town, Bengaluru 560005" },
  { label: "Hours", value: "Tuesday to Saturday, 11am – 6pm" },
  { label: "Email", value: "hello@aurvi.example" },
  { label: "Phone", value: "+91 80 4000 0000" },
];

export default function ContactPage() {
  return (
    <div className="px-(--spacing-gutter) pb-(--spacing-section) pt-16 md:pt-24">
      <Reveal>
        <p className="text-eyebrow text-stone">Contact</p>
        <h1 className="text-display-lg mt-5 max-w-[16ch] font-display font-light text-balance">
          Come by, or write to us.
        </h1>
      </Reveal>

      <div className="mt-16 grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
        <Reveal>
          <dl className="space-y-8">
            {DETAILS.map((detail) => (
              <div key={detail.label} className="border-t border-line pt-5">
                <dt className="text-eyebrow text-stone">{detail.label}</dt>
                <dd className="mt-3 max-w-xs leading-relaxed">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 max-w-xs text-sm leading-relaxed text-stone">
            The studio is small and usually smells of whatever is curing. If you
            want to smell the full range, come on a Saturday.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
