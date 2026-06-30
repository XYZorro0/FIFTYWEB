"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { PRESS_PUBLICATIONS } from "@/data/press";
import { staggerContainer } from "@/animations/variants";

export function PressLogoBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
    >
      {PRESS_PUBLICATIONS.map(({ id, name, logoUrl, logoWidth, logoHeight }) => (
        <motion.div
          key={id}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0.55, transition: { duration: 0.6 } },
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="flex items-center"
        >
          <Image
            src={logoUrl}
            alt={name}
            width={logoWidth}
            height={logoHeight}
            className="object-contain"
            style={{ maxWidth: 140, height: "auto", maxHeight: 40 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
