"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { IMAGES } from "@/data/images";
import { staggerContainer, fadeInUp, imageReveal } from "@/animations/variants";

function CeoSection() {
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
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Image */}
          <motion.div variants={imageReveal} className="overflow-hidden">
            <Image
              src={IMAGES.TEAM_01}
              alt="Arpan Gupta, CEO of Fifty Seventh & 7th"
              width={800}
              height={1286}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full object-cover"
              priority
            />
          </motion.div>

          {/* Copy */}
          <div>
            <motion.div variants={fadeInUp}>
              <SectionLabel>Our Founder</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
                Arpan Gupta
              </h2>
              <GoldDivider className="mb-7" />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-5">
              <p className="font-body text-sm md:text-base text-light/65 leading-[1.9]">
                Arpan Gupta is the founder and CEO of Fifty Seventh &amp; 7th. A physician by
                training, Arpan built his career on precision, accountability, and an unwavering
                attention to detail — qualities he brought directly into luxury home building when
                he founded the company.
              </p>
              <p className="font-body text-sm md:text-base text-light/65 leading-[1.9]">
                The name Fifty Seventh &amp; 7th is an homage to Carnegie Hall — the world-famous
                concert venue at 57th Street and 7th Avenue in Manhattan. It represents Arpan's
                conviction that a home should be built with the same commitment to craft and
                excellence as a Carnegie Hall performance.
              </p>
              <p className="font-body text-sm md:text-base text-light/65 leading-[1.9]">
                Since founding the company, Arpan has led the firm to become one of the most
                decorated builders in the United States — winning more NAHB Best in American
                Living Awards than any other builder nationwide in 2024, and earning the GHBA
                PRISM Grand Award — Custom Builder of the Year, twice.
              </p>
              <p className="font-body text-sm md:text-base text-light/65 leading-[1.9]">
                Arpan personally oversees every project, maintaining strict quality control at
                every phase from architectural review to final finishes.
              </p>
            </motion.div>

            <motion.blockquote
              variants={fadeInUp}
              className="border-l-2 border-gold/40 pl-6 mt-10"
            >
              <p className="font-editorial text-xl md:text-2xl text-ink italic leading-[1.6]">
                "I want every buyer to feel that their home was built for them — that every
                detail was considered with care, and nothing was treated as an afterthought."
              </p>
              <footer className="mt-4">
                <cite className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold/60 not-italic">
                  Arpan Gupta, Founder &amp; CEO
                </cite>
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PhilosophySection() {
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
        <motion.div variants={fadeInUp} className="max-w-3xl">
          <SectionLabel>Why We Build Differently</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            A Limited Number of Homes, Built Right
          </h2>
          <GoldDivider className="mb-7" />
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
            Fifty Seventh &amp; 7th deliberately limits the number of homes we build each year.
            This is not a constraint — it is a choice. By focusing our capacity on a small number
            of extraordinary residences, we ensure that each one receives the time, oversight, and
            creative energy it deserves.
          </p>
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-5">
            Our team of seasoned construction managers, architects, and designers collaborate at
            every stage. We apply the same precision to plan reviews that Arpan applied in
            medicine: every decision is deliberate, every material is chosen for a reason, and no
            shortcut is ever taken.
          </p>
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] mb-10">
            The result is homes that win national awards — and more importantly, homes that
            buyers are genuinely proud to live in.
          </p>
          <LuxuryButton href="/inquire" variant="outline">
            Start a Conversation
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RollsRoyceQuote() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-dark-3 py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10 text-center"
      >
        <blockquote className="max-w-2xl mx-auto">
          <p className="font-editorial text-5xl text-gold/20 leading-none mb-2 select-none" aria-hidden="true">"</p>
          <p className="font-editorial text-2xl md:text-3xl text-ink italic font-normal leading-[1.6] mb-8">
            Strive for perfection in everything you do. Take the best that exists and make it
            better. When it does not exist, design it.
          </p>
          <footer>
            <div className="w-8 h-px bg-gold mx-auto mb-4" />
            <cite className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-light/40 not-italic">
              Sir Henry Royce
            </cite>
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}

export function AboutContent() {
  return (
    <>
      <PageHeader
        title="About Us"
        eyebrow="Houston Luxury Home Builder"
        subtitle="Founded on precision, driven by craft."
        bgImage={IMAGES.PORTFOLIO_FULL_01}
      />
      <CeoSection />
      <PhilosophySection />
      <RollsRoyceQuote />
    </>
  );
}
