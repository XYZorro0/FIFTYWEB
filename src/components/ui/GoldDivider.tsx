"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { goldLineGrow } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  center?: boolean;
}

export function GoldDivider({ className, center = false }: GoldDividerProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      variants={goldLineGrow}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn(
        "h-px w-12 bg-gold origin-left",
        center && "mx-auto",
        className
      )}
    />
  );
}
