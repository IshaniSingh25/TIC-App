import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";

type Variant = "solid" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-eyebrow transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-sand hover:bg-terracotta",
  outline:
    "border border-ink/25 text-ink hover:border-terracotta hover:text-terracotta",
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: Route;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "solid",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
}) {
  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
