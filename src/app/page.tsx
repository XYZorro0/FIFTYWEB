import { HeroSection } from "@/sections/home/HeroSection";
import { RecognitionBand } from "@/sections/home/RecognitionBand";
import { AboutIntro } from "@/sections/home/AboutIntro";
import { TestimonialSection } from "@/sections/home/TestimonialSection";
import { ShortsReel } from "@/sections/home/ShortsReel";
import { ProcessSection } from "@/sections/home/ProcessSection";
import { PlanReviewSection } from "@/sections/home/PlanReviewSection";
import { FinishesSection } from "@/sections/home/FinishesSection";
import { PressMentionSection } from "@/sections/home/PressMentionSection";

export const metadata = {
  title: "Luxury Home Builder Houston | Fifty Seventh & 7th",
  description:
    "Award-winning luxury custom home builder in Houston. GHBA PRISM Grand Award winner. Homes in River Oaks, Memorial, and Greater Houston.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RecognitionBand />
      <AboutIntro />
      <TestimonialSection />
      <ShortsReel />
      <ProcessSection />
      <PlanReviewSection />
      <FinishesSection />
      <PressMentionSection />
    </>
  );
}
