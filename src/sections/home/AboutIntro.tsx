"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { IMAGES } from "@/data/images";
import { staggerContainer, fadeInUp, imageReveal } from "@/animations/variants";

export function AboutIntro() {
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
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Copy */}
          <div>
            <motion.div variants={fadeInUp}>
              <SectionLabel>Modern Luxury Homes</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
                Designed for Today
              </h2>
              <GoldDivider className="mb-7" />
              <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
                Our{" "}
                <Link href="/about" className="text-gold hover:text-gold-light transition-colors duration-200">
                  team
                </Link>{" "}
                specializes in modern home construction that balances aesthetics with performance.
                Expect thoughtful floor-plans, high-end finishes, smart home technology,
                energy-efficient systems, and luxury outdoor living spaces. These elements define
                our reputation as one of Houston's most innovative modern luxury home builders.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <LuxuryButton href="/available-homes" variant="outline">
                Available Homes
              </LuxuryButton>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div variants={imageReveal} className="overflow-hidden">
            <Image
              src={IMAGES.ABOUT_INTERIOR}
              alt="Luxury home interior by Fifty Seventh & 7th"
              width={1200}
              height={833}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-[440px] object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
