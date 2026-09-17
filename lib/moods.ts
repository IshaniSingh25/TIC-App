export type MoodId =
  | "hearthsmoke"
  | "first-rain"
  | "nightbloom"
  | "lowlight"
  | "stillwater"
  | "understory";

export type Mood = {
  id: MoodId;
  name: string;
  /** The feeling, in one line — used on collection tiles. */
  tagline: string;
  /** Longer copy for the collections page. */
  description: string;
  /** Representative raw notes, shown on tile hover. */
  notes: string[];
  image: string;
};

export const MOODS: Mood[] = [
  {
    id: "hearthsmoke",
    name: "Hearthsmoke",
    tagline: "Warm, resinous, lived-in",
    description:
      "For rooms that have been loved a long time. Woodsmoke, warm resin and something sweet left on the stove.",
    notes: ["Birch tar", "Tonka", "Burnt sugar", "Cedar"],
    image: "photo-1603905179139-db12ab535ca9",
  },
  {
    id: "first-rain",
    name: "First Rain",
    tagline: "Cool, green, newly washed",
    description:
      "Petrichor on hot stone. The ten minutes after a June shower, bottled before the heat returns.",
    notes: ["Wet stone", "Vetiver", "Green fig", "Bergamot"],
    image: "photo-1636714528228-f469eefb3eef",
  },
  {
    id: "nightbloom",
    name: "Nightbloom",
    tagline: "Floral, heady, after dark",
    description:
      "Flowers that only open once the sun is gone. Generous, slightly indecent, never powdery.",
    notes: ["Tuberose", "Jasmine sambac", "Orange blossom", "Honey"],
    image: "photo-1617351165725-ec1c8ca2bf67",
  },
  {
    id: "lowlight",
    name: "Lowlight",
    tagline: "Intimate, smoky, close",
    description:
      "Skin-warm and deliberately dim. Leather softened by wear, amber, a trace of incense in the curtains.",
    notes: ["Suede", "Amber", "Incense", "Black tea"],
    image: "photo-1618313389750-d0b216d6e9ee",
  },
  {
    id: "stillwater",
    name: "Stillwater",
    tagline: "Quiet, clean, unhurried",
    description:
      "The scent of a made bed and an open window. Soft musk, cold linen, nothing asking anything of you.",
    notes: ["White musk", "Linen", "Iris", "Sea salt"],
    image: "photo-1596568840418-5f4db2029de0",
  },
  {
    id: "understory",
    name: "Understory",
    tagline: "Earthy, damp, rooted",
    description:
      "Forest floor at dusk — moss, dark soil and the cool green shade under old trees.",
    notes: ["Oakmoss", "Patchouli", "Damp earth", "Pine"],
    image: "photo-1603005674855-b9f6334b7f92",
  },
];

export const MOOD_BY_ID = new Map(MOODS.map((mood) => [mood.id, mood]));

export function moodName(id: MoodId): string {
  return MOOD_BY_ID.get(id)?.name ?? id;
}
