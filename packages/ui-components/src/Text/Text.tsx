import { cn } from "@tx/util-helpers";
import React, { ReactNode } from "react";
import { TColors, TSizes } from "../../types";

interface Props {
  color?: TColors;
  className?: string;
  size?: TSizes;
  children: ReactNode;
}

const colors: Record<TColors, string> = {
  white: "text-white",
  Warning: "text-Warning",
  Success: "text-Success",
  Danger: "text-Danger",
  primary: "text-primary",
  Accent: "text-Accent",
  AccentAlternative: "text-AccentAlternative",
  None: "",
};

const sizes: Record<TSizes, string> = {
  xs: "text-xs md:text-sm",
  sm: "text-sm md:text-base",
  base: "text-base md:text-lg",
  lg: "text-lg md:text-xl",
  xl: "text-xl md:text-2xl",
  "2xl": "text-2xl md:text-3xl",
  "3xl": "text-3xl md:text-4xl",
  "4xl": "text-4xl md:text-5xl",
  "5xl": "text-5xl md:text:text-6xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
};

export function Text({
  color = "primary",
  className,
  children,
  size = "base",
}: Props) {
  return (
    <div className={cn(`${colors[color]} ${sizes[size]}`, className)}>
      {children}
    </div>
  );
}

export default Text;
