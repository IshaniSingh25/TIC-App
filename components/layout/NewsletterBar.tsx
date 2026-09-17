"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "error" | "done";

/**
 * No backend: this validates and acknowledges locally. Kept deliberately
 * honest — the success copy does not claim a mail was sent.
 */
export default function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setStatus(valid ? "done" : "error");
  }

  return (
    <section className="border-t border-line bg-sand-deep">
      <div className="grid gap-10 px-(--spacing-gutter) py-20 md:grid-cols-2 md:items-end">
        <div>
          <p className="text-eyebrow text-stone">The slow letter</p>
          <h2 className="text-display-md mt-4 max-w-[18ch] font-display font-light text-balance">
            One letter a month. New pours, and nothing else.
          </h2>
        </div>

        <form onSubmit={onSubmit} noValidate className="md:justify-self-end md:w-full md:max-w-md">
          <div className="flex items-end gap-4 border-b border-ink/30 pb-2 focus-within:border-terracotta">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="you@example.com"
              className="w-full bg-transparent py-2 text-base outline-none placeholder:text-stone/60"
            />
            <Button type="submit" variant="outline" className="shrink-0 border-0 px-0 hover:text-terracotta">
              Subscribe
            </Button>
          </div>

          <p
            aria-live="polite"
            className={`mt-3 text-sm ${
              status === "error" ? "text-terracotta-deep" : "text-stone"
            }`}
          >
            {status === "error" && "That address does not look right."}
            {status === "done" && "Noted — this demo stores nothing."}
          </p>
        </form>
      </div>
    </section>
  );
}
