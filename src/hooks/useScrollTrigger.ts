"use client";

import { useEffect, useRef } from "react";

type Callback<T extends HTMLElement> = (element: T) => gsap.core.Timeline | void;

export function useScrollTrigger<T extends HTMLElement>(callback: Callback<T>) {
  const ref = useRef<T>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    async function init() {
      const { gsap, ScrollTrigger } = await import("@/lib/gsap");
      if (!ref.current) return;
      const ctx = gsap.context(() => {
        callback(ref.current!);
      }, ref);
      cleanup = () => ctx.revert();
      ScrollTrigger.refresh();
    }

    init();
    return () => cleanup?.();
  }, [callback]);

  return ref;
}
