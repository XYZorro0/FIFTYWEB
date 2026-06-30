"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { IMAGES } from "@/data/images";
import { REMODEL_SERVICES } from "@/data/remodels";
import { staggerContainer, fadeInUp } from "@/animations/variants";

function ServicesGrid() {
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
        <motion.div variants={fadeInUp} className="mb-14">
          <SectionLabel>Remodel Services</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            Transform Your Home
          </h2>
          <GoldDivider className="mb-6" />
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] max-w-2xl">
            We bring the same award-winning craftsmanship that defines our new construction to
            luxury renovation. Whether it is a single room or a complete transformation, every
            project is guided by the same design sensibility and quality standards.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {REMODEL_SERVICES.map(({ id, title, description, features }) => (
            <motion.div
              key={id}
              variants={fadeInUp}
              className="border border-gold/10 p-8 hover:border-gold/30 transition-colors duration-500"
            >
              <h3 className="font-display text-xl text-ink font-normal mb-4">{title}</h3>
              <GoldDivider className="mb-5" />
              <p className="font-body text-sm text-light/60 leading-[1.85] mb-6">
                {description}
              </p>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-body text-xs text-light/50"
                  >
                    <span className="text-gold shrink-0 mt-0.5 text-[0.5rem]">◆</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-14 text-center">
          <LuxuryButton href="/inquire" variant="filled">
            Discuss Your Project
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RemodelingApproach() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-dark-2 py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10 max-w-3xl"
      >
        <motion.div variants={fadeInUp}>
          <SectionLabel>How We Approach Renovation</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            The Same Standards as New Construction
          </h2>
          <GoldDivider className="mb-7" />
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
            Many renovation firms treat existing homes as a series of problems to patch. We treat
            them as opportunities to elevate. Every remodel engagement begins with an honest
            assessment of the home's bones, followed by a design process informed by the same
            architects, designers, and trade partners who build our new homes.
          </p>
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
            We limit remodel engagements just as we limit new builds — so each project receives
            the attention and oversight it deserves. Timelines are realistic. Communication is
            direct. Results are extraordinary.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function LuxuryRemodelsContent() {
  return (
    <>
      <PageHeader
        title="Luxury Remodels"
        eyebrow="Renovation & Transformation"
        subtitle="Award-winning craftsmanship applied to the home you already love."
        bgImage={IMAGES.ABOUT_INTERIOR}
      />
      <ServicesGrid />
      <RemodelingApproach />
    </>
  );
}
