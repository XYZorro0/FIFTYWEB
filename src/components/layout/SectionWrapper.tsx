"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeInUp } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  as?: React.ElementType;
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  fullWidth = false,
  as: Tag = "section",
}: SectionWrapperProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <Tag className={cn("py-20 md:py-28", className)}>
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={cn(
          !fullWidth && "max-w-[1200px] mx-auto px-6 md:px-10",
          containerClassName
        )}
      >
        {children}
      </motion.div>
    </Tag>
  );
}

export function FadeItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}
