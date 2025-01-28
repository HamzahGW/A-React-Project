import { cn } from "@tx/util-helpers";
import React from "react";
import { TSizes } from "../../types";

type Props = {
  label: string;
  className?: string;
  size?: TSizes;
};

const sizes: Record<TSizes, string> = {
  xs: "text-xs md:text-sm",
  sm: "text-sm md:text-base",
  base: "text-base md:text-lg",
  lg: "text-lg md:text-xl",
  xl: "text-xl md:text-2xl",
  "2xl": "text-2xl md:text-3l",
  "3xl": "text-3xl md:text-4xl",
  "4xl": "text-4xl md:text-5xl",
  "5xl": "text-5xl md:text:text-6xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
};

export function Title({ label, size = "xl", className }: Props) {
  return (
    <div
      className={cn(
        sizes[size],
        "bg-primary-100 text-primary inline-flex rounded-lg bg-opacity-50 px-4 py-4 font-medium md:px-8",
        className,
      )}
    >
      {label}
    </div>
  );
}

export default Title;
