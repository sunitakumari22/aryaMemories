
import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
  variant?: "default" | "light";
}

export function BrandLogo({ className, variant = "default" }: BrandProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <span 
        className={cn(
          "font-serif text-2xl font-semibold tracking-tight",
          variant === "default" ? "text-memoir-800" : "text-white"
        )}
      >
        Arya Memories
      </span>
    </div>
  );
}

export function BrandText({ className, variant = "default" }: BrandProps) {
  return (
    <p 
      className={cn(
        "text-sm italic",
        variant === "default" ? "text-memoir-600" : "text-memoir-100",
        className
      )}
    >
      Preserving life's precious moments
    </p>
  );
}
