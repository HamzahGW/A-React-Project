import { cn } from "@tx/util-helpers";
import React from "react";

type Props = {
  text: string;
  className?: string;
};

export default function ErrorHint({ text, className }: Props) {
  return (
    <div className={cn("text-Danger mt-1 text-sm font-normal", className)}>
      {text}
    </div>
  );
}
