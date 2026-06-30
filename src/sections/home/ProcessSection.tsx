"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { staggerContainer, fadeInUp } from "@/animations/variants";

const STEPS = [
  {
    number: "01",
    title: "Architectural Design & Planning",
    body: "We collaborate with top architects and meticulously review every square foot with precision. From aesthetics and sightlines to space optimization, lifestyle flow, and natural light, no detail is overlooked.",
  },
  {
    number: "02",
    title: "Luxury Materials & Designer Finishes",
    body: "Our goal is to create luxury homes where every space feels distinct and elevated, reflecting the latest trends in modern luxury design. From stone and marble to carefully selected high-end fixtures, every element is chosen for enduring style.",
  },
  {
    number: "03",
    title: "Expert Construction & Craftsmanship",
    body: "Our seasoned construction managers oversee every detail, supported by a trusted, highly vetted trade base. Organization, accountability, and quality craftsmanship guide every project — we never cut corners.",
  },
  {
    number: "04",
    title: "Move-In Ready Luxury",
    body: "Our approach allows buyers to enjoy the experience of a custom-built luxury home without enduring the lengthy custom process. Each residence is thoughtfully designed in advance so you step in ready to move.",
  },
];

export function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

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
          <SectionLabel>How We Build</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
            Our Process
          </h2>
          <GoldDivider className="mb-6" />
          <p className="font-body text-sm md:text-base text-light/65 leading-[1.9] max-w-2xl">
            Building luxury homes requires exceptional attention to detail, comprehensive
            preparation, and extraordinary dedication. For this reason, we take on a{" "}
            <Link href="/available-homes" className="text-gold hover:text-gold-light transition-colors duration-200">
              limited number of projects
            </Link>{" "}
            in order to ensure we can devote substantial time to every client.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map(({ number, title, body }) => (
            <motion.div
              key={number}
              variants={fadeInUp}
              className="border-t border-gold/30 pt-6"
            >
              <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-gold/60 mb-3">
                {number}
              </p>
              <h3 className="font-display text-lg text-ink font-normal mb-3 leading-snug">
                {title}
              </h3>
              <p className="font-body text-sm text-light/55 leading-[1.85]">{body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
