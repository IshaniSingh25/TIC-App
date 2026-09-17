"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", subject: "General", message: "" };

const SUBJECTS = ["General", "An order", "Wholesale", "Press"];

/**
 * Client-side only. Validation runs on submit and then live per-field, which
 * avoids shouting at someone who has not finished typing their email yet.
 */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  function validate(values: Fields): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Tell us who you are.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "We need a working email to reply to.";
    if (values.message.trim().length < 10)
      next.message = "A little more detail, please — at least ten characters.";
    return next;
  }

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    const next = { ...fields, [key]: value };
    setFields(next);
    if (submitted) setErrors(validate(next));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-sand-deep p-10">
        <p className="text-eyebrow text-terracotta">Received</p>
        <h2 className="text-display-md mt-4 font-display font-light">
          Thank you, {fields.name.split(" ")[0]}.
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
          This site is a design study, so nothing was actually sent — but the
          form validated cleanly, which is the part worth demonstrating.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => {
            setFields(EMPTY);
            setErrors({});
            setSubmitted(false);
            setSent(false);
          }}
        >
          Write another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <Field
        id="name"
        label="Your name"
        value={fields.name}
        error={errors.name}
        onChange={(value) => update("name", value)}
      />

      <Field
        id="email"
        label="Email"
        type="email"
        value={fields.email}
        error={errors.email}
        onChange={(value) => update("email", value)}
      />

      <div>
        <label htmlFor="subject" className="text-eyebrow text-stone">
          Subject
        </label>
        <select
          id="subject"
          value={fields.subject}
          onChange={(event) => update("subject", event.target.value)}
          className="mt-3 w-full border-b border-ink/25 bg-transparent py-3 outline-none focus:border-terracotta"
        >
          {SUBJECTS.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-eyebrow text-stone">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-3 w-full resize-y border-b border-ink/25 bg-transparent py-3 outline-none focus:border-terracotta"
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-terracotta-deep">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit">Send message</Button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-eyebrow text-stone">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-3 w-full border-b border-ink/25 bg-transparent py-3 outline-none focus:border-terracotta"
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-terracotta-deep">
          {error}
        </p>
      )}
    </div>
  );
}
