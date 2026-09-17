import type { MoodId } from "./moods";

export type Product = {
  slug: string;
  name: string;
  /** One-line hook used on cards. */
  blurb: string;
  /** Two or three sentences for the product page. */
  story: string;
  /**
   * Moods this candle belongs to, most defining first. Several candles sit
   * honestly in two moods — Hearthsmoke *and* Understory — which is what makes
   * the shop filter a real design decision rather than a lookup.
   */
  moods: [MoodId, ...MoodId[]];
  notes: { top: string[]; heart: string[]; base: string[] };
  /** Rupees. */
  price: number;
  weightGrams: number;
  burnHours: number;
  wax: string;
  image: string;
  /** Marks the four shown in the Bestsellers block. */
  bestseller?: boolean;
  /** Marks the three shown in New Arrivals. */
  newArrival?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "ember-hour",
    name: "Ember Hour",
    blurb: "Woodsmoke and burnt sugar, the last hour before bed",
    story:
      "Built around birch tar softened with tonka until the smoke stops being a campfire and starts being a living room. The candle we light when the day is over and nobody is coming round.",
    moods: ["hearthsmoke", "lowlight"],
    notes: {
      top: ["Burnt sugar", "Clove"],
      heart: ["Birch tar", "Tobacco leaf"],
      base: ["Tonka", "Cedarwood"],
    },
    price: 3450,
    weightGrams: 220,
    burnHours: 52,
    wax: "Coconut & apricot",
    image: "photo-1561212856-44e9bae482aa",
    bestseller: true,
  },
  {
    slug: "monsoon-stone",
    name: "Monsoon Stone",
    blurb: "Petrichor, cut grass, the sky going dark at four",
    story:
      "Our perfumer spent two seasons trying to make wet stone smell like relief rather than damp. The answer was green fig over vetiver, with just enough bergamot to keep it from turning heavy.",
    moods: ["first-rain", "understory"],
    notes: {
      top: ["Bergamot", "Green fig"],
      heart: ["Wet stone", "Crushed leaf"],
      base: ["Vetiver", "Grey musk"],
    },
    price: 3450,
    weightGrams: 220,
    burnHours: 52,
    wax: "Coconut & apricot",
    image: "photo-1601922046210-41e129a3e64a",
    bestseller: true,
  },
  {
    slug: "tuberose-nine",
    name: "Tuberose No. 9",
    blurb: "A whole flowering courtyard, lit at once",
    story:
      "Nine percent tuberose absolute — an absurd quantity, and the reason this one sells out. Jasmine sambac keeps it lifted; a thread of honey stops it going soapy.",
    moods: ["nightbloom"],
    notes: {
      top: ["Orange blossom", "Green stem"],
      heart: ["Tuberose absolute", "Jasmine sambac"],
      base: ["Honey", "Sandalwood"],
    },
    price: 5400,
    weightGrams: 320,
    burnHours: 78,
    wax: "Coconut & apricot",
    image: "photo-1528351655744-27cc30462816",
    bestseller: true,
  },
  {
    slug: "soft-curtain",
    name: "Soft Curtain",
    blurb: "Cold linen, an open window, nothing urgent",
    story:
      "The quietest thing we make. White musk and iris over a mineral salt accord — designed to be noticed only when you leave the room and come back.",
    moods: ["stillwater"],
    notes: {
      top: ["Sea salt", "Pear skin"],
      heart: ["Iris", "Cotton"],
      base: ["White musk", "Blond woods"],
    },
    price: 2890,
    weightGrams: 180,
    burnHours: 44,
    wax: "Soy & beeswax",
    image: "photo-1640095889747-2090ee12fa7d",
    bestseller: true,
  },
  {
    slug: "suede-and-amber",
    name: "Suede & Amber",
    blurb: "Worn leather, warm skin, low conversation",
    story:
      "Leather without the tannery — a suede accord rubbed down with amber and a little black tea. Reads as skin more than as furniture.",
    moods: ["lowlight", "hearthsmoke"],
    notes: {
      top: ["Black tea", "Pink pepper"],
      heart: ["Suede", "Labdanum"],
      base: ["Amber", "Benzoin"],
    },
    price: 4200,
    weightGrams: 260,
    burnHours: 62,
    wax: "Coconut & apricot",
    image: "photo-1612293905607-b003de9e54fb",
  },
  {
    slug: "oakmoss-dusk",
    name: "Oakmoss Dusk",
    blurb: "Forest floor, an hour after the light goes",
    story:
      "Oakmoss and patchouli over a damp-earth accord. Green and cold at the top, genuinely soily underneath — not everyone's candle, and deliberately so.",
    moods: ["understory"],
    notes: {
      top: ["Pine needle", "Juniper"],
      heart: ["Oakmoss", "Damp earth"],
      base: ["Patchouli", "Vetiver"],
    },
    price: 3890,
    weightGrams: 220,
    burnHours: 52,
    wax: "Soy & beeswax",
    image: "photo-1537948756265-406a522f1a45",
  },
  {
    slug: "fig-milk",
    name: "Fig Milk",
    blurb: "Green fig, warm almond, late afternoon",
    story:
      "Fig leaf is sharp and green; fig fruit is sweet and milky. This one sits between the two and refuses to pick a side.",
    moods: ["first-rain", "stillwater"],
    notes: {
      top: ["Fig leaf", "Mandarin"],
      heart: ["Fig fruit", "Almond milk"],
      base: ["Coconut wood", "Soft musk"],
    },
    price: 2890,
    weightGrams: 180,
    burnHours: 44,
    wax: "Soy & beeswax",
    image: "photo-1559091156-b9610fb12eda",
  },
  {
    slug: "night-jasmine",
    name: "Night Jasmine",
    blurb: "Raat ki rani, over the compound wall",
    story:
      "Built from a single memory: night-blooming jasmine carrying three houses down a Bombay lane. Indolic, unapologetic, and a little too much on purpose.",
    moods: ["nightbloom", "lowlight"],
    notes: {
      top: ["Neroli", "Green mango"],
      heart: ["Night jasmine", "Ylang ylang"],
      base: ["Sandalwood", "White amber"],
    },
    price: 4600,
    weightGrams: 260,
    burnHours: 62,
    wax: "Coconut & apricot",
    image: "photo-1476900164809-ff19b8ae5968",
  },
  {
    slug: "cold-iris",
    name: "Cold Iris",
    blurb: "Powdered root, wet earth, held very still",
    story:
      "Iris butter is the most expensive material in our studio and the least showy. Here it is kept cold with a carrot-seed edge and grounded on raw earth.",
    moods: ["stillwater", "understory"],
    notes: {
      top: ["Carrot seed", "Violet leaf"],
      heart: ["Iris butter", "Orris root"],
      base: ["Damp earth", "Cashmere musk"],
    },
    price: 5200,
    weightGrams: 320,
    burnHours: 78,
    wax: "Soy & beeswax",
    image: "photo-1570823635306-250abb06d4b3",
    newArrival: true,
  },
  {
    slug: "chai-smoke",
    name: "Chai Smoke",
    blurb: "Cardamom, milk skin, a coal stove going out",
    story:
      "Spiced tea is easy to make sickly. We kept the milk and the cardamom, dropped the sugar, and let a smoked-wood base do the sweetening instead.",
    moods: ["hearthsmoke"],
    notes: {
      top: ["Green cardamom", "Ginger"],
      heart: ["Assam tea", "Milk accord"],
      base: ["Smoked guaiac", "Vanilla husk"],
    },
    price: 3450,
    weightGrams: 220,
    burnHours: 52,
    wax: "Coconut & apricot",
    image: "photo-1613068431228-8cb6a1e92573",
    newArrival: true,
  },
  {
    slug: "salt-window",
    name: "Salt Window",
    blurb: "Sea air two streets inland",
    story:
      "Not a beach candle. Salt and cold air over grey driftwood — the smell of a coastal town out of season.",
    moods: ["first-rain", "stillwater"],
    notes: {
      top: ["Sea salt", "Grapefruit peel"],
      heart: ["Cold air accord", "Seaweed"],
      base: ["Driftwood", "Ambergris"],
    },
    price: 2890,
    weightGrams: 180,
    burnHours: 44,
    wax: "Soy & beeswax",
    image: "photo-1605651202774-7d573fd3f12d",
    newArrival: true,
  },
  {
    slug: "the-small-one",
    name: "The Small One",
    blurb: "Our house scent, in a ninety-gram tin",
    story:
      "Sandalwood, cedar and a little smoke — what the studio itself smells like. Sized for a desk, a bathroom shelf, or finding out whether you like us.",
    moods: ["hearthsmoke", "understory"],
    notes: {
      top: ["Cedar shaving"],
      heart: ["Mysore sandalwood"],
      base: ["Soft smoke", "Musk"],
    },
    price: 1290,
    weightGrams: 90,
    burnHours: 22,
    wax: "Soy & beeswax",
    image: "photo-1572203176799-40836603681d",
  },
];

export const PRODUCT_BY_SLUG = new Map(PRODUCTS.map((p) => [p.slug, p]));

export const BESTSELLERS = PRODUCTS.filter((p) => p.bestseller);
export const NEW_ARRIVALS = PRODUCTS.filter((p) => p.newArrival);

export function formatPrice(rupees: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(rupees);
}
