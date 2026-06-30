export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  highlights: string[];
}

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: "river-oaks",
    name: "River Oaks",
    description:
      "Houston's most prestigious enclave. Tree-lined streets, grand estates, and a timeless sense of place that defines luxury living in Texas.",
    highlights: [
      "Most coveted addresses in Houston",
      "Proximity to River Oaks Country Club",
      "Historic tree canopy",
      "Steps from the finest dining and retail",
    ],
  },
  {
    id: "memorial",
    name: "Memorial",
    description:
      "Bordering Buffalo Bayou and Memorial Park, Memorial offers a rare combination of natural beauty and urban access in a deeply residential community.",
    highlights: [
      "Memorial Park access",
      "Top-ranked schools",
      "Quiet, established neighborhoods",
      "Minutes from the Energy Corridor",
    ],
  },
  {
    id: "greater-houston",
    name: "Greater Houston",
    description:
      "Houston continues to grow outward — and with that growth come extraordinary opportunities to build on premium lots in emerging premier communities.",
    highlights: [
      "Premier suburban communities",
      "Larger lot sizes",
      "New master-planned neighborhoods",
      "Strong investment fundamentals",
    ],
  },
];
