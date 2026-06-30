import type { Metadata } from "next";
import { RecognitionContent } from "./RecognitionContent";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Awards and recognition for Fifty Seventh & 7th — GHBA PRISM, NAHB BALA, TAB, LUXE, and PaperCity honors.",
};

export default function RecognitionPage() {
  return <RecognitionContent />;
}
