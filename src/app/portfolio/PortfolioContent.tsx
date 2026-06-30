"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "@/components/layout/PageHeader";
import { PropertyGallery } from "@/components/media/PropertyGallery";
import { MasonryGrid } from "@/components/media/MasonryGrid";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { IMAGES } from "@/data/images";
import { PROPERTIES, PORTFOLIO_IMAGES } from "@/data/properties";
import { staggerContainer, fadeInUp } from "@/animations/variants";

const ashford = PROPERTIES.find((p) => p.id === "the-ashford")!;

function AshfordSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-dark py-16 md:py-20">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <motion.div variants={fadeInUp} className="mb-10">
          <SectionLabel>{ashford.neighborhood}</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-2">
            {ashford.name}
          </h2>
          <GoldDivider className="mb-5" />
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] max-w-2xl mb-7">
            {ashford.description}
          </p>
          {ashford.awards && ashford.awards.length > 0 && (
            <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold/70 mb-8">
              {ashford.awards[0]}
            </p>
          )}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <PropertyGallery images={ashford.images} />
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-8">
          <LuxuryButton href="/inquire" variant="filled">
            Inquire About This Home
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MoreResidencesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-dark-2 py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <motion.div variants={fadeInUp} className="mb-12 text-center">
          <SectionLabel center>Previous Work</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            More Residences
          </h2>
          <GoldDivider center />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <MasonryGrid images={PORTFOLIO_IMAGES} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export function PortfolioContent() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        eyebrow="Award-Winning Residences"
        subtitle="Every home is a signature work — crafted for the neighborhood it calls home."
        bgImage={IMAGES.PORTFOLIO_FULL_02}
      />
      <AshfordSection />
      <MoreResidencesSection />
    </>
  );
}
