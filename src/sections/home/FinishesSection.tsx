"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { staggerContainer, fadeInUp } from "@/animations/variants";

const FEATURES = [
  "Chef-inspired kitchens with high-end designer appliances",
  "Spa-style bathrooms with natural stone and modern fixtures",
  "Custom millwork, artisan-built staircases, and layered architectural details",
  "Secondary bedrooms with private en-suite bathrooms",
  "Multiple entertainment areas and cozy retreat spaces",
  "Flexible living and wellness rooms featuring private saunas",
  "Outdoor living areas designed for Houston's climate",
];

export function FinishesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-dark py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <SectionLabel>What Sets Us Apart</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            Finishes That Define Us
          </h2>
          <GoldDivider className="mb-7" />
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] max-w-2xl">
            We have made it our mission to be one of Houston's most trusted designer home
            builders, creating residences defined by style, function, and lasting quality. Each
            home is thoughtfully designed with features such as:
          </p>
        </motion.div>

        <motion.ul variants={staggerContainer} className="space-y-3 mb-10 max-w-2xl">
          {FEATURES.map((feature) => (
            <motion.li
              key={feature}
              variants={fadeInUp}
              className="flex items-start gap-4 font-body text-sm md:text-base text-light/65 leading-[1.9]"
            >
              <span className="text-gold mt-1.5 shrink-0 text-xs">◆</span>
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={fadeInUp}>
          <p className="font-body text-sm text-light/55 mb-7">
            Learn more about us and our CEO{" "}
            <Link href="/about" className="text-gold hover:text-gold-light transition-colors duration-200">
              Arpan Gupta
            </Link>
            .
          </p>
          <LuxuryButton href="/portfolio" variant="outline">
            View Portfolio
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
