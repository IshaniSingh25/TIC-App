import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-(--spacing-gutter) text-center">
      <p className="text-eyebrow text-terracotta">404</p>
      <h1 className="text-display-lg mt-5 max-w-[18ch] font-display font-light text-balance">
        That one burned out.
      </h1>
      <p className="mt-5 max-w-sm leading-relaxed text-stone">
        The page you were after is not here. The candles, however, are.
      </p>
      <div className="mt-9">
        <ButtonLink href="/candles">Shop all candles</ButtonLink>
      </div>
    </div>
  );
}
