"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          className="fixed inset-0 z-[999] flex flex-col bg-cream backdrop-blur-sm px-10 py-8 border-r border-gold/15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className={cn(
              "self-end font-body text-2xl text-light/60 hover:text-gold",
              "transition-colors duration-200 leading-none"
            )}
          >
            ×
          </button>

          {/* Nav links */}
          <nav className="mt-12 flex flex-col gap-6" aria-label="Mobile navigation">
            {NAV_ITEMS.map(({ label, href }, i) => {
              const active = pathname === href;
              return (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={href}
                    onClick={onClose}
                    className={cn(
                      "block font-display text-3xl tracking-[0.06em]",
                      "transition-colors duration-200",
                      active ? "text-gold" : "text-light hover:text-gold"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Contact info at bottom */}
          <motion.div
            className="mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <div className="h-px w-12 bg-gold mb-6" />
            <a
              href="tel:2817885700"
              className="block font-body text-sm text-light/60 hover:text-gold transition-colors duration-200 mb-1"
            >
              (281) 788-5700
            </a>
            <a
              href="mailto:info@fiftyseventhandseventh.com"
              className="block font-body text-sm text-light/60 hover:text-gold transition-colors duration-200"
            >
              info@fiftyseventhandseventh.com
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
