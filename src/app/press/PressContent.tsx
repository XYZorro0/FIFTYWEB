"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "@/components/layout/PageHeader";
import { PressLogoBar } from "@/components/press/PressLogoBar";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { GlassCard } from "@/components/ui/GlassCard";
import { IMAGES } from "@/data/images";
import { PRESS_ARTICLES } from "@/data/press";
import { staggerContainer, fadeInUp } from "@/animations/variants";

function PressLogoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-dark py-16 md:py-20">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <SectionLabel center>As Featured In</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            Media Coverage
          </h2>
          <GoldDivider center />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <PressLogoBar />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ArticlesSection() {
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
        <motion.div variants={fadeInUp} className="mb-12">
          <SectionLabel>Featured Articles</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            In the News
          </h2>
          <GoldDivider />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRESS_ARTICLES.map(({ id, publication, publicationLogoUrl, logoWidth, logoHeight, headline, excerpt, coverImageUrl, coverWidth, coverHeight }) => (
            <motion.article key={id} variants={fadeInUp}>
              <GlassCard className="h-full flex flex-col p-8">
                {/* Publication logo */}
                <div className="mb-6 h-8 flex items-center">
                  <Image
                    src={publicationLogoUrl}
                    alt={publication}
                    width={logoWidth}
                    height={logoHeight}
                    className="h-6 w-auto object-contain opacity-70"
                  />
                </div>

                {/* Cover image if available */}
                {coverImageUrl && coverWidth && coverHeight && (
                  <div className="overflow-hidden mb-6 -mx-8">
                    <Image
                      src={coverImageUrl}
                      alt={headline}
                      width={coverWidth}
                      height={coverHeight}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full object-cover h-48"
                    />
                  </div>
                )}

                <h3 className="font-display text-lg text-ink font-normal mb-3 leading-snug">
                  {headline}
                </h3>
                <p className="font-body text-sm text-light/55 leading-[1.85] flex-1">
                  {excerpt}
                </p>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function PressContent() {
  return (
    <>
      <PageHeader
        title="Press"
        eyebrow="Media Coverage"
        subtitle="Houston's most decorated builder — recognized by leading publications nationwide."
        bgImage={IMAGES.AERIAL_DRONE}
      />
      <PressLogoSection />
      <ArticlesSection />
    </>
  );
}
