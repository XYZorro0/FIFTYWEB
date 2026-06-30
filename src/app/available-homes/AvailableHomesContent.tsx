"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "@/components/layout/PageHeader";
import { PropertyCard } from "@/components/property/PropertyCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { IMAGES } from "@/data/images";
import { PROPERTIES } from "@/data/properties";
import { staggerContainer, fadeInUp } from "@/animations/variants";

function HomesGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-dark py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>Currently Available</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            Homes Ready to Move In
          </h2>
          <GoldDivider />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CustomQualitySection() {
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
          <motion.div variants={fadeInUp}>
            <SectionLabel>The Fifty Seventh &amp; 7th Difference</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
              Custom Quality.
              <br />
              No Wait.
            </h2>
            <GoldDivider className="mb-7" />
            <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
              Building a custom home from scratch typically takes 18–24 months and requires
              hundreds of decisions about finishes, fixtures, and floor plans. Our homes
              eliminate that burden entirely.
            </p>
            <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
              Each residence is designed in advance by our team — with the same care and
              intention that a custom client would receive — so you can walk through a
              move-in-ready home that feels entirely personal, without the wait.
            </p>
            <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-10">
              All the reward of a bespoke home. None of the construction timeline.
            </p>
            <LuxuryButton href="/inquire" variant="filled">
              Schedule a Private Viewing
            </LuxuryButton>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {[
              { label: "6+", detail: "NAHB Awards in a single year" },
              { label: "2×", detail: "GHBA Grand Award — Custom Builder of the Year" },
              { label: "18+", detail: "National and local awards since founding" },
            ].map(({ label, detail }) => (
              <div key={label} className="border-t border-gold/20 pt-6">
                <p className="font-display text-4xl text-gold font-normal mb-1">{label}</p>
                <p className="font-body text-sm text-light/60">{detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export function AvailableHomesContent() {
  return (
    <>
      <PageHeader
        title="Available Homes"
        eyebrow="Move-In Ready"
        subtitle="Award-winning residences — thoughtfully designed, ready today."
        bgImage={IMAGES.ASHFORD_01}
      />
      <HomesGrid />
      <CustomQualitySection />
    </>
  );
}
