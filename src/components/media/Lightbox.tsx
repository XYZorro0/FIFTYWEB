"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { PropertyImage } from "@/types/property";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: PropertyImage[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ images, index, onClose, onNext, onPrev }: LightboxProps) {
  const image = images[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-dark/95 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Image ${index + 1} of ${images.length}: ${image.alt}`}
      >
        {/* Image */}
        <motion.div
          key={index}
          className="relative max-w-[90vw] max-h-[85vh]"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-contain max-h-[85vh] w-auto"
            priority
          />
        </motion.div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-6 right-6 font-body text-2xl text-light/60 hover:text-gold transition-colors duration-200"
        >
          ×
        </button>

        {/* Prev */}
        {index > 0 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous image"
            className="absolute left-6 top-1/2 -translate-y-1/2 font-body text-2xl text-light/50 hover:text-gold transition-colors duration-200 p-2"
          >
            ←
          </button>
        )}

        {/* Next */}
        {index < images.length - 1 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next image"
            className="absolute right-6 top-1/2 -translate-y-1/2 font-body text-2xl text-light/50 hover:text-gold transition-colors duration-200 p-2"
          >
            →
          </button>
        )}

        {/* Fraction counter */}
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs tracking-[0.2em] text-light/40">
          {index + 1} / {images.length}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
