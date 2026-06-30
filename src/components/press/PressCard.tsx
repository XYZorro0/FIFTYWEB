"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { PressArticle } from "@/types/press";
import { fadeInUp } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface PressCardProps {
  article: PressArticle;
  className?: string;
}

export function PressCard({ article, className }: PressCardProps) {
  const Wrapper = article.url ? "a" : "div";
  const wrapperProps = article.url
    ? { href: article.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div variants={fadeInUp} className={cn("group", className)}>
      <Wrapper
        {...wrapperProps}
        className="block border border-gold/10 hover:border-gold/30 transition-[border-color] duration-400 p-8"
      >
        {/* Publication logo */}
        <div className="mb-6 h-8 flex items-center">
          <Image
            src={article.publicationLogoUrl}
            alt={article.publication}
            width={article.logoWidth}
            height={article.logoHeight}
            className="object-contain opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            style={{ maxWidth: 120, height: "auto", maxHeight: 32 }}
          />
        </div>

        <h3 className="font-display text-xl text-ink font-normal leading-snug mb-3">
          {article.headline}
        </h3>
        <p className="font-body text-sm text-light/55 leading-relaxed">
          {article.excerpt}
        </p>

        {article.url && (
          <p className="mt-5 font-body text-[0.65rem] tracking-[0.18em] uppercase text-gold">
            Read Article →
          </p>
        )}
      </Wrapper>
    </motion.div>
  );
}
