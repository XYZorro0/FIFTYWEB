"use client";

import { motion } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { cn } from "@/lib/utils";

interface CounterStatProps {
  target: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function CounterStat({ target, suffix = "", label, className }: CounterStatProps) {
  const { value, ref } = useAnimatedCounter(target);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <motion.p
        className="font-display text-5xl md:text-6xl text-ink font-normal tabular-nums"
        aria-label={`${target}${suffix} ${label}`}
      >
        {value}
        <span className="text-gold">{suffix}</span>
      </motion.p>
      <p className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-light/60 mt-2">
        {label}
      </p>
    </div>
  );
}
