import { cn } from "@tx/util-helpers";
import React, { ReactNode } from "react";
import Text from "../Text/Text";
import { TColors, TSizes } from "../../types";

interface IProps {
  label: string | ReactNode;
  className?: string;
  lineColor?: string;
  color?: TColors;
  size?: TSizes;
  lineClassName?: string;
}

export function LineHeader({
  className,
  label,
  lineColor,
  color = "primary",
  size,
  lineClassName,
}: IProps) {
  return (
    <div className={`flex items-center gap-10 ${className || ""}`}>
      <div className="whitespace-nowrap text-2xl md:text-3xl">
        {size ? (
          <Text color={color} size={size}>
            {label}
          </Text>
        ) : (
          <>{label}</>
        )}
      </div>
      <div
        className={cn(
          `bg-primary h-2 w-full rounded-lg opacity-[13%]`,
          lineClassName,
          size === "lg" && "h-1",
        )}
      />
    </div>
  );
}

export default LineHeader;
