import type { Variants } from "framer-motion";

const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_LUXURY },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_LUXURY },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// Clip-path text curtain reveal (single word or line)
export const textReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_LUXURY },
  },
};

// Gold divider grow from left — uses transform not width (no layout thrash)
export const goldLineGrow: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: EASE_LUXURY, delay: 0.25 },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: EASE_LUXURY },
  },
};

export const slideInFromBottom: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: EASE_LUXURY },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_LUXURY },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export const navVariants: Variants = {
  visible: { y: 0, transition: { duration: 0.3, ease: [0, 0, 0.2, 1] } },
  hidden: { y: "-100%", transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
};

export const mobileMenuOverlay: Variants = {
  closed: { opacity: 0, pointerEvents: "none" as const },
  open: {
    opacity: 1,
    pointerEvents: "auto" as const,
    transition: { duration: 0.4, ease: EASE_LUXURY },
  },
};

export const mobileMenuLink: Variants = {
  closed: { opacity: 0, y: 24 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_LUXURY },
  },
};
