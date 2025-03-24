import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  iconClassName?: string;
}

export const Logo = ({ className, iconClassName, style }: LogoProps) => {
  return (
    <div
      className={cn(
        "flex aspect-square items-center justify-center rounded-lg bg-gradient-to-tr from-amber-300 to-orange-600 p-2",
        className,
      )}
      style={style}
    >
      <Sparkles
        className={cn("text-background h-full w-full", iconClassName)}
      />
    </div>
  );
};
