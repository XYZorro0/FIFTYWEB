"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageSkeleton } from "./ImageSkeleton";
import { cn } from "@/lib/utils";

interface LuxuryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  objectFit?: "cover" | "contain";
  sizes?: string;
}

export function LuxuryImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  containerClassName,
  objectFit = "cover",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: LuxuryImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!loaded && (
        <ImageSkeleton className="absolute inset-0 w-full h-full" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          objectFit === "cover" ? "object-cover" : "object-contain",
          className
        )}
        onLoad={() => setLoaded(true)}
        decoding="async"
      />
    </div>
  );
}
