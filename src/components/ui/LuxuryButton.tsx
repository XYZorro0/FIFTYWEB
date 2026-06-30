"use client";

import Link from "next/link";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { cn } from "@/lib/utils";

type ButtonVariant = "outline" | "filled" | "ghost";

interface LuxuryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  "aria-label"?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  outline:
    "border border-gold text-gold hover:bg-gold hover:text-dark",
  filled:
    "bg-gold text-dark border border-gold hover:bg-gold-light",
  ghost:
    "text-gold border-b border-transparent hover:border-gold pb-0.5",
};

export function LuxuryButton({
  children,
  href,
  onClick,
  variant = "outline",
  className,
  type = "button",
  disabled,
  external,
  "aria-label": ariaLabel,
}: LuxuryButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } =
    useMagneticButton<HTMLButtonElement | HTMLAnchorElement>();

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2",
    "font-body text-[0.72rem] tracking-[0.18em] uppercase",
    "px-8 py-3.5 rounded-none",
    "transition-colors duration-300",
    "select-none outline-none",
    "focus-visible:ring-1 focus-visible:ring-gold",
    variantClasses[variant],
    disabled && "opacity-40 pointer-events-none",
    className
  );

  if (href) {
    const isExternal = external || href.startsWith("http");
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={baseClasses}
        aria-label={ariaLabel}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onMouseMove={handleMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={baseClasses}
      onMouseMove={handleMouseMove as unknown as React.MouseEventHandler<HTMLButtonElement>}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
