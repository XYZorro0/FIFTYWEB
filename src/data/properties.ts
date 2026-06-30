import type { Property } from "@/types/property";
import { IMAGES } from "./images";

export const PROPERTIES: Property[] = [
  {
    id: "the-ashford",
    name: "The Ashford",
    neighborhood: "River Oaks",
    status: "available",
    featured: true,
    shortDescription:
      "Award-winning residence featuring bespoke finishes, chef kitchen, and resort-style outdoor living.",
    description:
      "The Ashford stands as the pinnacle of Fifty Seventh & 7th craftsmanship. Every detail has been considered — from the sight lines to the artisan millwork, the spa-quality bathrooms to the chef-inspired kitchen. A GHBA Prism award-winning home, ready to move into today.",
    images: [
      { url: IMAGES.ASHFORD_01, alt: "The Ashford — exterior", role: "hero", width: 1200, height: 1200 },
      { url: IMAGES.ASHFORD_02, alt: "The Ashford — living room", role: "gallery", width: 1200, height: 1200 },
      { url: IMAGES.ASHFORD_03, alt: "The Ashford — kitchen", role: "gallery", width: 1200, height: 1200 },
      { url: IMAGES.ASHFORD_04, alt: "The Ashford — primary suite", role: "gallery", width: 1200, height: 1200 },
      { url: IMAGES.ASHFORD_05, alt: "The Ashford — detail", role: "gallery", width: 1200, height: 1200 },
    ],
    features: [
      "Chef-inspired kitchen with high-end designer appliances",
      "Spa-style primary bathroom with natural stone",
      "Resort-style outdoor living and entertaining",
      "Custom millwork and artisan-built staircase",
      "Private sauna and wellness room",
      "Smart home technology throughout",
    ],
    awards: ["GHBA Prism Grand Award — Custom Builder of the Year"],
  },
  {
    id: "river-oaks-estate",
    name: "River Oaks Estate",
    neighborhood: "River Oaks",
    status: "available",
    shortDescription:
      "Grand architecture with spa bathroom, private sauna, and smart home technology throughout.",
    description:
      "A premier River Oaks address defined by grand proportions and intimate luxury. Spa bathrooms with sculptural stone, a private sauna, and every system integrated through smart home technology.",
    images: [
      { url: IMAGES.RIVER_OAKS_01, alt: "River Oaks Estate — façade", role: "hero", width: 900, height: 1200 },
      { url: IMAGES.RIVER_OAKS_02, alt: "River Oaks Estate — interior", role: "gallery", width: 900, height: 1200 },
    ],
    features: [
      "Grand architectural façade",
      "Spa bathroom with natural stone and modern fixtures",
      "Private sauna",
      "Smart home technology throughout",
      "Expansive outdoor entertaining area",
    ],
  },
  {
    id: "memorial-residence",
    name: "Memorial Residence",
    neighborhood: "Memorial",
    status: "available",
    shortDescription:
      "Modern luxury with artisan millwork, en-suite secondary bedrooms, and expansive outdoor entertaining.",
    description:
      "Set in the Memorial corridor, this home balances modern architecture with warm, handcrafted detail. Artisan millwork throughout, secondary bedrooms each with their own en-suite, and outdoor spaces designed for Houston living.",
    images: [
      { url: IMAGES.MEMORIAL_01, alt: "Memorial Residence — exterior", role: "hero", width: 900, height: 1200 },
      { url: IMAGES.MEMORIAL_02, alt: "Memorial Residence — interior", role: "gallery", width: 900, height: 1200 },
    ],
    features: [
      "Artisan millwork throughout",
      "En-suite bathrooms in all secondary bedrooms",
      "Multiple entertainment areas",
      "Outdoor living designed for Houston's climate",
      "Flexible wellness room",
    ],
  },
];

export const PORTFOLIO_IMAGES = [
  { url: IMAGES.PORTFOLIO_01, alt: "Portfolio residence — exterior detail", width: 960, height: 960 },
  { url: IMAGES.PORTFOLIO_02, alt: "Portfolio residence — interior", width: 960, height: 960 },
  { url: IMAGES.PORTFOLIO_03, alt: "Portfolio residence — kitchen", width: 960, height: 960 },
  { url: IMAGES.PORTFOLIO_04, alt: "Portfolio residence — primary suite", width: 900, height: 1080 },
];
