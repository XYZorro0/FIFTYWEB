"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavScroll } from "@/hooks/useNavScroll";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";
import { navVariants } from "@/animations/variants";

export function Navbar() {
  const { scrolled, hidden } = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        variants={navVariants}
        animate={hidden && !menuOpen ? "hidden" : "visible"}
        className={cn(
          "fixed top-0 left-0 right-0 z-[500]",
          "flex items-center justify-between",
          "px-6 md:px-10 h-[72px]",
          "transition-[background,border] duration-500",
          scrolled
            ? "glass-dark border-b border-gold/10"
            : "border-b border-transparent"
        )}
      >
        <NavLogo scrolled={scrolled} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex" aria-label="Main navigation">
          <NavLinks />
        </nav>

        {/* Hamburger — mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="lg:hidden flex flex-col gap-[5px] p-2"
        >
          <span className="block w-6 h-[1.5px] bg-light" />
          <span className="block w-6 h-[1.5px] bg-light" />
          <span className="block w-4 h-[1.5px] bg-light" />
        </button>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
