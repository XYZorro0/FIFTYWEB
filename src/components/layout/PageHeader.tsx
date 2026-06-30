"use client";

import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { fadeInUp } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  bgImage: string;
  className?: string;
}

export function PageHeader({ title, eyebrow, subtitle, bgImage, className }: PageHeaderProps) {
  const bgRef = useParallax<HTMLDivElement>(20);

  return (
    <header
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        "h-[360px] md:h-[480px] mt-[72px]",
        className
      )}
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-[-20%] bg-center bg-cover will-change-transform"
        style={{ backgroundImage: `url('${bgImage}')` }}
        aria-hidden="true"
      />
      {/* Warm limestone veil — enough opacity for dark text on property photos */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(245, 240, 232, 0.76)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {eyebrow && <SectionLabel center>{eyebrow}</SectionLabel>}

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-display text-4xl md:text-6xl text-ink font-normal mb-4"
        >
          {title}
        </motion.h1>

        <GoldDivider center className="mb-4" />

        {subtitle && (
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="font-body text-light/70 text-sm md:text-base leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
}
