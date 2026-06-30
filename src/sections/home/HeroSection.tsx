"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { IMAGES } from "@/data/images";

const ShaderGradientCanvas = dynamic(
  () => import("@shadergradient/react").then((m) => m.ShaderGradientCanvas),
  { ssr: false }
);
const ShaderGradient = dynamic(
  () => import("@shadergradient/react").then((m) => m.ShaderGradient),
  { ssr: false }
);

const EASE = [0.16, 1, 0.3, 1] as const;

function EntranceText({ children, delay, className, as: Tag = "div" }: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.85, ease: EASE, delay }}
        className={className}
      >
        <Tag>{children}</Tag>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setPrefersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
  }, []);

  const showGradient = !prefersReduced && isDesktop;

  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {showGradient ? (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <ShaderGradientCanvas style={{ position: "absolute", inset: 0 }}>
            <ShaderGradient
              type="waterPlane"
              animate="on"
              uSpeed={0.08}
              uStrength={1.6}
              uDensity={0.9}
              color1="#F5F0E8"
              color2="#EDE8DF"
              color3="#D4C9B0"
              brightness={1.1}
              grain="off"
            />
          </ShaderGradientCanvas>
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.HERO_BG}')` }}
          aria-hidden="true"
        />
      )}

      {/* Warm limestone veil — more opaque when using photo */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: showGradient
            ? "rgba(245, 240, 232, 0.15)"
            : "rgba(245, 240, 232, 0.74)",
        }}
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="font-body text-[0.55rem] tracking-[0.3em] uppercase text-light/50">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gold/50 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SectionLabel center>
            GHBA Prism Grand Award · Custom Builder of the Year
          </SectionLabel>
        </motion.div>

        <EntranceText
          delay={0.55}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink font-normal leading-[1.05] tracking-[0.02em] mb-5"
          as="h1"
        >
          Fifty Seventh<br />&amp; 7th
        </EntranceText>

        <EntranceText
          delay={0.85}
          className="font-editorial text-xl md:text-2xl text-light/75 italic mb-3 tracking-wide"
          as="h2"
        >
          Houston's Award-Winning Luxury Home Builder
        </EntranceText>

        <motion.p
          className="font-body text-sm md:text-base text-light/60 leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
        >
          Extraordinary homes in River Oaks, Memorial, and Greater Houston —
          crafted with precision, designed without compromise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <LuxuryButton href="/available-homes" variant="filled">
            Discover Homes
          </LuxuryButton>
          <LuxuryButton href="/inquire" variant="outline">
            Schedule a Viewing
          </LuxuryButton>
        </motion.div>
      </div>
    </section>
  );
}
