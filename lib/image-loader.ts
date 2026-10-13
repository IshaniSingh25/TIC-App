/**
 * next/image loader for the static export. `photo()` bakes a crop size into
 * each Unsplash URL; here that size is scaled to the width the browser asked
 * for, keeping the aspect ratio so the crop stays the same.
 */
export default function unsplashLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (!src.startsWith("https://images.unsplash.com/")) return src;

  const url = new URL(src);
  const baseWidth = Number(url.searchParams.get("w"));
  const baseHeight = Number(url.searchParams.get("h"));

  url.searchParams.set("w", String(width));
  if (baseWidth > 0 && baseHeight > 0) {
    url.searchParams.set("h", String(Math.round((baseHeight * width) / baseWidth)));
  }
  url.searchParams.set("q", String(quality ?? 80));
  return url.toString();
}
