"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { staggerContainer, fadeInUp } from "@/animations/variants";

const SHORTS = [
  {
    id: "Uo_PkZo0ZA0",
    label: "The Ashford",
  },
  {
    id: "MiueEWz2YCo",
    label: "Interior Detail",
  },
  {
    id: "gAXb6svf7MM",
    label: "Craftsmanship",
  },
];

export function ShortsReel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-dark-3 py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <SectionLabel center>See It in Motion</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-5">
            Behind the Build
          </h2>
          <GoldDivider center className="mb-6" />
          <p className="font-body text-sm md:text-base text-light/60 max-w-xl mx-auto">
            A closer look at the craftsmanship, spaces, and details that define every
            Fifty Seventh &amp; 7th residence.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {SHORTS.map(({ id, label }) => (
            <motion.div key={id} variants={fadeInUp} className="flex flex-col gap-3">
              {/* 9:16 aspect ratio container */}
              <div
                className="relative w-full overflow-hidden"
                style={{ paddingBottom: "177.78%" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?loop=1&playlist=${id}&modestbranding=1&rel=0&playsinline=1`}
                  title={`Fifty Seventh & 7th — ${label}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-light/45 text-center">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <LuxuryButton
            href="https://www.youtube.com/@FiftySeventhHomesHTX/shorts"
            variant="outline"
            external
          >
            View All on YouTube
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
