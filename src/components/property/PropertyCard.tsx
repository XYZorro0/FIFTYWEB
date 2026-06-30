"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/types/property";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { imageReveal } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const heroImage = property.images.find((img) => img.role === "hero") ?? property.images[0];

  return (
    <motion.article
      variants={imageReveal}
      className={cn(
        "group relative overflow-hidden bg-dark-2 border border-gold/10",
        "hover:border-gold/30 transition-[border-color] duration-500",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={heroImage.url}
          alt={heroImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          aria-hidden="true"
        />
        {/* Neighborhood badge */}
        <span className="absolute bottom-4 left-4 font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {property.neighborhood}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8">
        <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold/70 mb-2">
          {property.neighborhood}
        </p>
        <h3 className="font-display text-xl md:text-2xl text-ink font-normal mb-3">
          {property.name}
        </h3>
        <p className="font-body text-sm text-light/60 leading-relaxed mb-6">
          {property.shortDescription}
        </p>
        <LuxuryButton href="/inquire" variant="outline">
          Inquire
        </LuxuryButton>
      </div>
    </motion.article>
  );
}
