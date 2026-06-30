import { cn } from "@/lib/utils";

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: string;
}

export function ImageSkeleton({ className, aspectRatio }: ImageSkeletonProps) {
  return (
    <div
      className={cn("shimmer bg-dark-3", className)}
      style={aspectRatio ? { aspectRatio } : undefined}
      aria-hidden="true"
    />
  );
}
