"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "@/animations/variants";

export function TestimonialSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-dark-3 py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <blockquote className="max-w-3xl mx-auto text-center">
          {/* Decorative mark */}
          <p
            className="font-editorial text-6xl text-gold/30 leading-none mb-2 select-none"
            aria-hidden="true"
          >
            "
          </p>
          <p className="font-editorial text-2xl md:text-3xl lg:text-4xl text-ink italic font-normal leading-[1.5] mb-8">
            Dream home turned reality! Truly so impressed by your attention to detail and every
            single thought that went into making this home so special. It is anyone's dream home
            and I'm blessed to call it mine!
          </p>
          <footer>
            <div className="w-8 h-px bg-gold mx-auto mb-4" />
            <cite className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-light/40 not-italic">
              River Oaks Area Homebuyer, 2026
            </cite>
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}
