import type { Metadata } from "next";
import { PropertyAcquisitionContent } from "./PropertyAcquisitionContent";

export const metadata: Metadata = {
  title: "Property Acquisition",
  description:
    "Secure the perfect lot in Houston's premier neighborhoods. Fifty Seventh & 7th builds in River Oaks, Memorial, and Greater Houston.",
};

export default function PropertyAcquisitionPage() {
  return <PropertyAcquisitionContent />;
}
