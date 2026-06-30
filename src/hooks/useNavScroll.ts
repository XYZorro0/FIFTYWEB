"use client";

import { useState, useEffect, useRef } from "react";

export function useNavScroll(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const prevY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > threshold);
      // Hide on scroll-down past 200px, reveal on scroll-up
      if (currentY > 200) {
        setHidden(currentY > prevY.current);
      } else {
        setHidden(false);
      }
      prevY.current = currentY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { scrolled, hidden };
}
