"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { IMAGES } from "@/data/images";
import { AWARD_BODIES, FOOTER_BADGES } from "@/data/awards";
import { staggerContainer, fadeInUp } from "@/animations/variants";

function AwardSection({ body }: { body: (typeof AWARD_BODIES)[number] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="py-16 md:py-20 border-b border-gold/10 last:border-b-0">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          {/* Left: org + badges */}
          <motion.div variants={fadeInUp}>
            <SectionLabel>{body.shortName}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl text-ink font-normal mb-3">
              {body.organization}
            </h2>
            <GoldDivider className="mb-5" />
            <p className="font-body text-sm text-light/60 leading-[1.85] mb-8">
              {body.description}
            </p>
            {body.badgeUrls && body.badgeUrls.length > 0 && (
              <div className="flex flex-wrap gap-4 items-end">
                {body.badgeUrls.map((url, i) => {
                  const badge = FOOTER_BADGES.find((b) => b.url === url);
                  return badge ? (
                    <Image
                      key={i}
                      src={url}
                      alt={badge.alt}
                      width={badge.width}
                      height={badge.height}
                      className="object-contain opacity-80"
                    />
                  ) : null;
                })}
              </div>
            )}
          </motion.div>

          {/* Right: award items */}
          <motion.div variants={staggerContainer} className="space-y-4">
            {body.items.map(({ title, year, level }) => (
              <motion.div
                key={`${title}-${year}`}
                variants={fadeInUp}
                className="border-t border-gold/15 pt-4 flex items-start justify-between gap-6"
              >
                <div>
                  <p className="font-body text-sm md:text-base text-light/80 leading-snug">
                    {title}
                  </p>
                  <p className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-gold/50 mt-1">
                    {level === "grand" && "Grand Award · "}
                    {level === "gold" && "Gold · "}
                    {level === "silver" && "Silver · "}
                    {level === "winner" && "Winner · "}
                    {year}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function PaperCitySection() {
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
            <SectionLabel>PaperCity</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl text-ink font-normal mb-4">
              PaperCity Magazine
            </h2>
            <GoldDivider className="mb-6" />
            <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-8">
              Houston's leading luxury lifestyle publication has featured Fifty Seventh &amp; 7th
              for their extraordinary design and recognition in the Houston luxury home market.
            </p>
            <LuxuryButton href="/press" variant="outline">
              See All Press Coverage
            </LuxuryButton>
          </motion.div>

          <motion.div variants={fadeInUp} className="overflow-hidden">
            <Image
              src={IMAGES.AWARD_PAPERCITY_FEATURE}
              alt="PaperCity feature coverage of Fifty Seventh & 7th"
              width={233}
              height={172}
              className="w-full object-contain opacity-85"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export function RecognitionContent() {
  return (
    <>
      <PageHeader
        title="Recognition"
        eyebrow="National & Local Awards"
        subtitle="More than any other builder nationwide — earned through extraordinary craft."
        bgImage={IMAGES.PORTFOLIO_FULL_03}
      />
      <div className="bg-dark">
        {AWARD_BODIES.map((body) => (
          <AwardSection key={body.id} body={body} />
        ))}
      </div>
      <PaperCitySection />
    </>
  );
}
