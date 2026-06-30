import type { Metadata } from "next";
import { PressContent } from "./PressContent";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Fifty Seventh & 7th in the media — coverage from PaperCity, Houston Chronicle, Builder Magazine, and more.",
};

export default function PressPage() {
  return <PressContent />;
}
