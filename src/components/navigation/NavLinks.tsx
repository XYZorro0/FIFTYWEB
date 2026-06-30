"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  onClick?: () => void;
  className?: string;
}

export function NavLinks({ onClick, className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex items-center gap-7", className)}>
      {NAV_ITEMS.map(({ label, href }) => {
        const active = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onClick}
              className={cn(
                "relative font-body text-[0.7rem] tracking-[0.14em] uppercase",
                "luxury-underline transition-colors duration-250",
                active ? "text-gold" : "text-light/80 hover:text-light"
              )}
              aria-current={active ? "page" : undefined}
            >
              {label}
              {/* Persistent active indicator */}
              {active && (
                <span
                  className="absolute bottom-[-2px] left-0 w-full h-px bg-gold"
                  aria-hidden="true"
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
