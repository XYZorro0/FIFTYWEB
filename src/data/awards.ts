import type { AwardBody } from "@/types/award";
import { IMAGES } from "./images";

export const AWARD_BODIES: AwardBody[] = [
  {
    id: "nahb-2024",
    organization: "National Association of Home Builders",
    shortName: "NAHB",
    description:
      "Winner of 6 awards — more than any other builder across the nation.",
    badgeUrls: [IMAGES.BADGE_NAHB_BALA],
    items: [
      { title: "Best in American Living Award — Custom Home", year: 2024, level: "gold" },
      { title: "Best in American Living Award — Kitchen", year: 2024, level: "gold" },
      { title: "Best in American Living Award — Bathroom", year: 2024, level: "gold" },
      { title: "Best in American Living Award — Specialty Room", year: 2024, level: "gold" },
      { title: "Best in American Living Award — Outdoor Living", year: 2024, level: "gold" },
      { title: "Best in American Living Award — Architectural Detail", year: 2024, level: "gold" },
    ],
  },
  {
    id: "ghba-prism",
    organization: "Greater Houston Builders Association",
    shortName: "GHBA PRISM",
    description:
      "Grand Award — Custom Builder of the Year, plus awards across kitchen, bath, specialty room, and exterior categories.",
    badgeUrls: [IMAGES.BADGE_GHBA_01, IMAGES.BADGE_GHBA_02, IMAGES.BADGE_GHBA_03, IMAGES.BADGE_GHBA_04],
    items: [
      { title: "Grand Award — Custom Builder of the Year", year: 2024, level: "grand" },
      { title: "Grand Award — Custom Builder of the Year", year: 2025, level: "grand" },
      { title: "Best Kitchen", year: 2024, level: "winner" },
      { title: "Best Bathroom", year: 2024, level: "winner" },
      { title: "Best Specialty Room", year: 2024, level: "winner" },
      { title: "Best Exterior", year: 2024, level: "winner" },
    ],
  },
  {
    id: "tab",
    organization: "Texas Association of Builders",
    shortName: "TAB",
    description: "Received 4 awards in heavily contested categories.",
    badgeUrls: [IMAGES.BADGE_TAB, IMAGES.BADGE_TAB_2],
    items: [
      { title: "TAB Star Award", year: 2025, level: "winner" },
      { title: "TAB Star Award — Kitchen", year: 2025, level: "winner" },
      { title: "TAB Star Award — Bathroom", year: 2025, level: "winner" },
      { title: "TAB Star Award — Specialty Room", year: 2025, level: "winner" },
    ],
  },
  {
    id: "luxe",
    organization: "LUXE Interiors + Design",
    shortName: "LUXE RED",
    description:
      "Winner for excellence in interior architecture and innovation. Winner for primary bathroom interiors.",
    badgeUrls: [IMAGES.BADGE_LUXE_01, IMAGES.BADGE_LUXE_02],
    items: [
      { title: "RED Award — Interior Architecture & Innovation", year: 2025, level: "winner" },
      { title: "RED Award — Primary Bathroom Interiors", year: 2025, level: "winner" },
      { title: "RED Award — Interior Architecture & Innovation", year: 2026, level: "winner" },
    ],
  },
  {
    id: "nahb-2025",
    organization: "National Association of Home Builders",
    shortName: "NAHB",
    description: "Recipient of silver award for best detached home.",
    items: [
      { title: "Best in American Living Award — Best Detached Home", year: 2025, level: "silver" },
    ],
  },
];

export const FOOTER_BADGES = [
  { url: IMAGES.BADGE_GHBA_01, alt: "GHBA Prism Grand Award 2024", width: 77, height: 118 },
  { url: IMAGES.BADGE_GHBA_02, alt: "GHBA Prism Award", width: 82, height: 118 },
  { url: IMAGES.BADGE_GHBA_03, alt: "GHBA Prism Award", width: 71, height: 126 },
  { url: IMAGES.BADGE_GHBA_04, alt: "GHBA Prism Award 2025", width: 98, height: 150 },
  { url: IMAGES.BADGE_TAB, alt: "TAB Award", width: 146, height: 62 },
  { url: IMAGES.BADGE_NAHB_BALA, alt: "NAHB BALA Award", width: 98, height: 73 },
  { url: IMAGES.BADGE_TAB_2, alt: "TAB Star Award", width: 88, height: 86 },
  { url: IMAGES.BADGE_LUXE_01, alt: "LUXE RED Award", width: 88, height: 97 },
  { url: IMAGES.BADGE_LUXE_02, alt: "LUXE RED Award", width: 82, height: 86 },
];
