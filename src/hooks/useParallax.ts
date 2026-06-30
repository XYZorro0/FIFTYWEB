"use client";

import { useEffect, useRef } from "react";

export function useParallax<T extends HTMLElement>(yPercent = 25) {
  const ref = useRef<T>(null);

  useEffect(() => {
    // Skip on reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;

    async function init() {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap");
      if (!ref.current) return;
      const ctx = gsap.context(() => {
        gsap.to(ref.current!, {
          yPercent,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current!.parentElement || ref.current!,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
      cleanup = () => ctx.revert();
    }

    init();
    return () => cleanup?.();
  }, [yPercent]);

  return ref;
}
