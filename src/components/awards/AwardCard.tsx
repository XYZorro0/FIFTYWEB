"use client";

import { motion } from "framer-motion";
import type { AwardBody } from "@/types/award";
import { fadeInUp } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface AwardCardProps {
  award: AwardBody;
  className?: string;
}

export function AwardCard({ award, className }: AwardCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "border-t border-gold/40 pt-6 pb-8",
        className
      )}
    >
      <p className="font-body text-[0.6rem] tracking-[0.22em] uppercase text-gold mb-3">
        {award.shortName}
      </p>
      <h3 className="font-display text-lg text-ink font-normal mb-2">
        {award.organization}
      </h3>
      <p className="font-body text-sm text-light/60 leading-relaxed mb-4">
        {award.description}
      </p>
      <ul className="space-y-1.5">
        {award.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-gold text-xs mt-0.5 shrink-0">·</span>
            <span className="font-body text-sm text-light/70">
              {item.title}
              {item.year && (
                <span className="text-light/40 ml-1.5">— {item.year}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
