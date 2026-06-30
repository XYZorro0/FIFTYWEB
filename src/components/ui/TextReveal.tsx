"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.07,
}: TextRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const words = children.split(" ");

  return (
    <Tag ref={ref} className={cn("overflow-visible", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.75,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
