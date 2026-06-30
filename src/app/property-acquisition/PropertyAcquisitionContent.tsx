"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { IMAGES } from "@/data/images";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { staggerContainer, fadeInUp } from "@/animations/variants";

function NeighborhoodsSection() {
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
          <SectionLabel>Where We Build</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            Premier Houston Neighborhoods
          </h2>
          <GoldDivider className="mb-6" />
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] max-w-2xl">
            Location is the foundation of lasting value. We concentrate our work in Houston's most
            coveted addresses — neighborhoods that offer not just prestige, but genuine quality of
            life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {NEIGHBORHOODS.map(({ id, name, description, highlights }) => (
            <motion.div key={id} variants={fadeInUp}>
              <GlassCard className="h-full p-8">
                <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-gold/60 mb-3">
                  Neighborhood
                </p>
                <h3 className="font-display text-2xl text-ink font-normal mb-4">{name}</h3>
                <GoldDivider className="mb-5" />
                <p className="font-body text-sm text-light/60 leading-[1.85] mb-6">
                  {description}
                </p>
                <ul className="space-y-2">
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 font-body text-xs text-light/50"
                    >
                      <span className="text-gold shrink-0 mt-0.5 text-[0.5rem]">◆</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ExpertiseSection() {
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
            <SectionLabel>Lot Sourcing &amp; Acquisition</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
              We Know Where to Build
            </h2>
            <GoldDivider className="mb-7" />
            <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
              Securing the right lot in Houston's premier neighborhoods is increasingly
              competitive. Our relationships with local agents, property owners, and developers
              give us early access to opportunities before they reach the open market.
            </p>
            <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
              We evaluate every potential site for orientation, setbacks, sightlines, and
              neighborhood trajectory — so the home we build will hold its value for generations.
            </p>
            <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-10">
              If you have a lot in mind — or want us to identify one for you — reach out. We build
              on client-provided lots as well as sites we source ourselves.
            </p>
            <LuxuryButton href="/inquire" variant="filled">
              Discuss Your Vision
            </LuxuryButton>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-5">
            {[
              {
                title: "Off-Market Access",
                body: "Our network surfaces lots before they're publicly listed — giving clients an advantage in the most sought-after streets.",
              },
              {
                title: "Site Feasibility Analysis",
                body: "We evaluate every lot for HOA restrictions, flood plain considerations, orientation, and construction access.",
              },
              {
                title: "Architect Coordination",
                body: "Our architecture partners review every potential site early — ensuring the home we design will sit perfectly on the land.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-t border-gold/15 pt-5">
                <h3 className="font-display text-lg text-ink font-normal mb-2">{title}</h3>
                <p className="font-body text-sm text-light/55 leading-[1.85]">{body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export function PropertyAcquisitionContent() {
  return (
    <>
      <PageHeader
        title="Property Acquisition"
        eyebrow="Houston Lot Sourcing"
        subtitle="The right address is the foundation of an extraordinary home."
        bgImage={IMAGES.AERIAL_DRONE}
      />
      <NeighborhoodsSection />
      <ExpertiseSection />
    </>
  );
}
