"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { IMAGES } from "@/data/images";
import { staggerContainer, fadeInUp, imageReveal } from "@/animations/variants";

export function PlanReviewSection() {
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
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Image */}
          <motion.div variants={imageReveal} className="overflow-hidden">
            <Image
              src={IMAGES.PLAN_REVIEW}
              alt="Innovative plan review process at Fifty Seventh & 7th"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-[320px] md:h-[400px] object-cover"
            />
          </motion.div>

          {/* Copy */}
          <motion.div variants={fadeInUp}>
            <SectionLabel>Before Ground Breaks</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
              Innovative Plan Reviews
            </h2>
            <GoldDivider className="mb-7" />
            <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
              We take plan review beyond the drawing board. By projecting the plans at full scale
              onto the walls and floors, our team walks through the home before construction
              begins.
            </p>
            <p className="font-body text-sm md:text-base text-light/65 leading-[1.9]">
              Architects, designers, and our team review every space together, refining
              proportions, sightlines, and details in real scale. This collaborative process
              allows thoughtful adjustments to be made early, ensuring the home is fully resolved
              before we ever break ground.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
