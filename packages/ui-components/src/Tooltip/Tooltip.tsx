import React, { useState } from "react";
import { cn } from "@tx/util-helpers";
import { FC, ReactNode, useRef } from "react";
import * as RadTooltip from "@radix-ui/react-tooltip";

interface Props {
  children: ReactNode;
  className?: string;
  tooltip?: ReactNode | string;
}

export const Tooltip = ({ children, className, tooltip }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <RadTooltip.Provider>
      <RadTooltip.Root open={open}>
        <RadTooltip.Trigger
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
          onFocus={() => {
            setOpen(true);
          }}
          onBlur={() => {
            setOpen(false);
          }}
          asChild
        >
          {children}
        </RadTooltip.Trigger>
        <RadTooltip.Portal>
          <RadTooltip.Content
            className={cn("TooltipContent mx-2", "z-10 rounded-lg", className)}
            sideOffset={5}
          >
            <div dir="rtl">{tooltip}</div>
            <RadTooltip.Arrow />
          </RadTooltip.Content>
        </RadTooltip.Portal>
      </RadTooltip.Root>
    </RadTooltip.Provider>
  );
};

export default Tooltip;

// export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
