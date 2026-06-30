"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "FIFTY SEVENTH & 7TH".split("");

export function LoadingScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("intro-seen")) return;
    setShow(true);
    sessionStorage.setItem("intro-seen", "1");
    const t = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[10000] bg-dark flex flex-col items-center justify-center gap-6"
          aria-hidden="true"
          role="presentation"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Letter-by-letter wordmark */}
          <motion.p
            className="font-display text-sm tracking-[0.4em] text-light/80 uppercase flex gap-0"
            aria-hidden="true"
          >
            {LETTERS.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + i * 0.04,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={char === " " ? "w-3" : undefined}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.p>

          {/* Gold divider — scaleX instead of width */}
          <motion.div
            className="h-px bg-gold origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "3rem" }}
          />

          <motion.p
            className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-light/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.4 }}
          >
            Luxury Homes
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
