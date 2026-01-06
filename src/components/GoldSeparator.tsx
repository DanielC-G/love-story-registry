import { cn } from "@/lib/utils";

interface GoldSeparatorProps {
  className?: string;
  variant?: "default" | "wide" | "ornament";
}

const GoldSeparator = ({ className, variant = "default" }: GoldSeparatorProps) => {
  if (variant === "ornament") {
    return (
      <div className={cn("flex items-center justify-center gap-4", className)}>
        <div className="w-16 h-px bg-primary/40" />
        <div className="w-1.5 h-1.5 rotate-45 bg-primary/60" />
        <div className="w-16 h-px bg-primary/40" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        variant === "default" ? "separator-gold" : "separator-gold-wide",
        className
      )}
    />
  );
};

export default GoldSeparator;
