import type { PressPublication, PressArticle } from "@/types/press";
import { IMAGES } from "./images";

export const PRESS_PUBLICATIONS: PressPublication[] = [
  { id: "modern-lux", name: "Modern Lux", logoUrl: IMAGES.PRESS_MODERN_LUX, logoWidth: 293, logoHeight: 95 },
  { id: "papercity", name: "PaperCity", logoUrl: IMAGES.PRESS_PAPERCITY, logoWidth: 314, logoHeight: 65 },
  { id: "houston-chronicle", name: "Houston Chronicle", logoUrl: IMAGES.PRESS_HOUSTON_CHRONICLE, logoWidth: 251, logoHeight: 74 },
  { id: "hbj", name: "Houston Business Journal", logoUrl: IMAGES.PRESS_HBJ, logoWidth: 412, logoHeight: 52 },
  { id: "probuilder", name: "Pro Builder", logoUrl: IMAGES.PRESS_PROBUILDER, logoWidth: 351, logoHeight: 74 },
  { id: "metro-builder", name: "Metropolitan Builder", logoUrl: IMAGES.PRESS_METRO_BUILDER, logoWidth: 412, logoHeight: 69 },
];

export const PRESS_ARTICLES: PressArticle[] = [
  {
    id: "builder-magazine",
    publication: "Builder Magazine",
    publicationLogoUrl: IMAGES.PRESS_PROBUILDER,
    logoWidth: 351,
    logoHeight: 74,
    headline: "Building Excellence: Fifty Seventh & 7th Redefines Houston Luxury",
    excerpt:
      "A former physician turned luxury homebuilder, Arpan Gupta has quietly assembled a collection of awards that outpaces builders many times his firm's size.",
    coverImageUrl: IMAGES.PRESS_BUILDER_MAG_COVER,
    coverWidth: 588,
    coverHeight: 748,
  },
  {
    id: "papercity-design",
    publication: "PaperCity",
    publicationLogoUrl: IMAGES.PRESS_PAPERCITY,
    logoWidth: 314,
    logoHeight: 65,
    headline: "The Most Award-Winning Custom Home Builder You Haven't Heard Of",
    excerpt:
      "In a city known for its size and scale, Fifty Seventh & 7th takes a more deliberate approach — fewer projects, more perfection.",
    coverImageUrl: IMAGES.PRESS_PAPERCITY_ARTICLE,
    coverWidth: 486,
    coverHeight: 118,
  },
  {
    id: "houston-chronicle-feature",
    publication: "Houston Chronicle",
    publicationLogoUrl: IMAGES.PRESS_HOUSTON_CHRONICLE,
    logoWidth: 251,
    logoHeight: 74,
    headline: "Houston's Boutique Builder Sets National Records for Award Wins",
    excerpt:
      "At the 2024 NAHB Best in American Living Awards, one small Houston builder walked away with more wins than any other firm in the country.",
  },
];
