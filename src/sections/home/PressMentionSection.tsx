"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { PressLogoBar } from "@/components/press/PressLogoBar";
import { staggerContainer, fadeInUp } from "@/animations/variants";

export function PressMentionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="bg-dark-2 py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel center>Media Coverage</SectionLabel>
          <h2 className="font-display text-2xl md:text-4xl text-ink font-normal max-w-3xl mx-auto mb-5 leading-snug">
            As Houston's Premier Luxury and Custom Home Builders, Fifty Seventh &amp; 7th often
            catches the media's attention.
          </h2>
          <GoldDivider center />
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-12">
          <PressLogoBar />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <LuxuryButton href="/press" variant="outline">
            Read More
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
