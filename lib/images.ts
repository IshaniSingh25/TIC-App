/**
 * Every image is a pinned Unsplash CDN id, not a random/search endpoint, so the
 * same photo renders on every build. Each id was verified to return 200 before
 * being committed.
 */
const CDN = "https://images.unsplash.com/";

export function photo(id: string, width: number, height: number): string {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    crop: "entropy",
    q: "80",
    w: String(width),
    h: String(height),
  });
  return `${CDN}${id}?${params.toString()}`;
}

/** Warm-sand blur so images never flash white against the sand ground. */
export const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjEwIj48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2VmZTdkYiIvPjxlbGxpcHNlIGN4PSI0IiBjeT0iNiIgcng9IjMiIHJ5PSI0IiBmaWxsPSIjZGRjY2I2Ii8+PC9zdmc+";
