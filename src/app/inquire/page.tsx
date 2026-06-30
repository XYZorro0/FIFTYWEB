import type { Metadata } from "next";
import { InquireContent } from "./InquireContent";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Contact Fifty Seventh & 7th to schedule a viewing or discuss your next luxury home in Houston.",
};

export default function InquirePage() {
  return <InquireContent />;
}
