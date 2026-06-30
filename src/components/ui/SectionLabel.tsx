import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

export function SectionLabel({ children, className, center = false }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-body text-[0.65rem] tracking-[0.22em] uppercase text-gold mb-4",
        center && "text-center",
        className
      )}
    >
      {children}
    </p>
  );
}
