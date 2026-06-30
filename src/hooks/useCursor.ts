"use client";

import { useState, useEffect, useCallback } from "react";

export type CursorState = "default" | "hover" | "click";

export function useCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => setVisible(false), []);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    const handleDown = () => setState("click");
    const handleUp = () => setState("default");
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    const els = document.querySelectorAll("a, button, [role=button], [data-cursor-hover]");
    const enter = () => setState("hover");
    const leave = () => setState("default");
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [onMouseMove, onMouseLeave]);

  return { state, position, visible };
}
