"use client";

import { useState } from "react";
import Image from "next/image";
import type { PropertyImage } from "@/types/property";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

interface PropertyGalleryProps {
  images: PropertyImage[];
  className?: string;
}

export function PropertyGallery({ images, className }: PropertyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hero = images[0];
  const thumbs = images.slice(1);

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-1", className)}>
        {/* Main / hero image */}
        <button
          type="button"
          className="relative overflow-hidden aspect-[4/3] group block"
          onClick={() => setLightboxIndex(0)}
          aria-label={`View ${hero.alt}`}
        >
          <Image
            src={hero.url}
            alt={hero.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </button>

        {/* Thumbnail column */}
        {thumbs.length > 0 && (
          <div className="grid gap-1">
            {thumbs.slice(0, 4).map((img, i) => (
              <button
                key={img.url}
                type="button"
                className="relative overflow-hidden group block"
                style={{ aspectRatio: "4/3" }}
                onClick={() => setLightboxIndex(i + 1)}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* View all overlay on last thumb */}
                {i === 3 && thumbs.length > 4 && (
                  <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                    <span className="font-body text-xs tracking-[0.18em] uppercase text-ink">
                      +{thumbs.length - 4} more
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((i) => Math.min(i! + 1, images.length - 1))}
          onPrev={() => setLightboxIndex((i) => Math.max(i! - 1, 0))}
        />
      )}
    </>
  );
}
