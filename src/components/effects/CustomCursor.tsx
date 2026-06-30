"use client";

import { useEffect, useRef } from "react";
import { useCursor } from "@/hooks/useCursor";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const { state, position, visible } = useCursor();
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Smooth outer ring with slight lag
  useEffect(() => {
    let x = position.x;
    let y = position.y;
    let rafId: number;

    function lerp(a: number, b: number, n: number) {
      return a + (b - a) * n;
    }

    function animate() {
      x = lerp(x, position.x, 0.12);
      y = lerp(y, position.y, 0.12);
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [position]);

  return (
    <>
      {/* Outer ring — lags behind for luxury feel */}
      <div
        ref={outerRef}
        aria-hidden="true"
        className={cn(
          "fixed top-0 left-0 pointer-events-none z-[9999]",
          "rounded-full border border-gold",
          "transition-[width,height,opacity] duration-300",
          visible ? "opacity-100" : "opacity-0",
          state === "hover" ? "w-14 h-14 bg-gold/10" : "w-9 h-9",
          state === "click" && "scale-75"
        )}
      />
      {/* Inner dot — snaps precisely */}
      <div
        ref={innerRef}
        aria-hidden="true"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
        className={cn(
          "fixed top-0 left-0 pointer-events-none z-[9999]",
          "w-1.5 h-1.5 rounded-full bg-gold",
          "transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0"
        )}
      />
    </>
  );
}
