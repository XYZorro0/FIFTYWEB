import type { Metadata } from "next";
import { LuxuryRemodelsContent } from "./LuxuryRemodelsContent";

export const metadata: Metadata = {
  title: "Luxury Remodels",
  description:
    "Luxury renovation and remodel services by Fifty Seventh & 7th — kitchens, bathrooms, outdoor living, and whole-home transformations in Houston.",
};

export default function LuxuryRemodelsPage() {
  return <LuxuryRemodelsContent />;
}
