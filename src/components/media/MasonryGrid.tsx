"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Lightbox } from "./Lightbox";
import { imageReveal, staggerContainer } from "@/animations/variants";
import { cn } from "@/lib/utils";
import type { PropertyImage } from "@/types/property";

interface MasonryGridProps {
  images: Array<{ url: string; alt: string; width: number; height: number }>;
  className?: string;
}

export function MasonryGrid({ images, className }: MasonryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const lightboxImages: PropertyImage[] = images.map((img) => ({
    ...img,
    role: "gallery" as const,
  }));

  return (
    <>
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={cn(
          "columns-1 sm:columns-2 lg:columns-3 gap-1 [column-fill:_balance]",
          className
        )}
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            variants={imageReveal}
            className="break-inside-avoid mb-1 block overflow-hidden group cursor-pointer"
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </motion.div>
        ))}
      </motion.div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((i) => Math.min(i! + 1, images.length - 1))}
          onPrev={() => setLightboxIndex((i) => Math.max(i! - 1, 0))}
        />
      )}
    </>
  );
}
