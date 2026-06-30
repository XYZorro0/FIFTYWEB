"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { staggerContainer, fadeInUp } from "@/animations/variants";

const AWARDS = [
  {
    org: "2024 National Association of Home Builders (NAHB) Awards",
    detail: "Winner of 6 awards — more than any other builder across the nation.",
  },
  {
    org: "2024 & 2025 Greater Houston Builders Association (GHBA) PRISM Awards",
    detail:
      "Grand Award — Custom Builder of the Year, plus awards across kitchen, bath, specialty room, and exterior categories.",
  },
  {
    org: "2025 Texas Association of Builders (TAB) Awards",
    detail: "Received 4 awards in heavily contested categories.",
  },
  {
    org: "2025 & 2026 LUXE Interiors + Design RED Awards",
    detail:
      "Winner for excellence in interior architecture and innovation. Winner for primary bathroom interiors.",
  },
  {
    org: "2025 National Association of Home Builders (NAHB) Awards",
    detail: "Recipient of silver award for best detached home.",
  },
];

export function RecognitionBand() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-dark-2 py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <SectionLabel center>Recognized Nationally &amp; Locally</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-5">
            Award-Winning Excellence
          </h2>
          <GoldDivider center />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="max-w-2xl mx-auto space-y-6 text-center"
        >
          {AWARDS.map(({ org, detail }) => (
            <p key={org} className="font-body text-sm md:text-base leading-[1.9] text-light/70">
              <strong className="text-gold font-normal">{org}</strong>
              <br />
              {detail}
            </p>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <LuxuryButton href="/recognition" variant="outline">
            View All Recognition
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
