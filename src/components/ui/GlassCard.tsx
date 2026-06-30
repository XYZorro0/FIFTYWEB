import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function GlassCard({ children, className, as: Tag = "div" }: GlassCardProps) {
  return (
    <Tag className={cn("glass-card rounded-none", className)}>
      {children}
    </Tag>
  );
}
