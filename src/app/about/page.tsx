import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Fifty Seventh & 7th — CEO Arpan Gupta's vision, the team behind Houston's most award-winning luxury home builder.",
};

export default function AboutPage() {
  return <AboutContent />;
}
