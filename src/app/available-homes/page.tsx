import type { Metadata } from "next";
import { AvailableHomesContent } from "./AvailableHomesContent";

export const metadata: Metadata = {
  title: "Available Homes",
  description:
    "Browse available luxury homes by Fifty Seventh & 7th — move-in ready residences in River Oaks and Memorial.",
};

export default function AvailableHomesPage() {
  return <AvailableHomesContent />;
}
