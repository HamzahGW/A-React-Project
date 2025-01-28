import { cn } from "@tx/util-helpers";
import React, { ReactNode } from "react";
import { InView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  className: string;
  onView: string;
  triggerOnce?: boolean;
};

export function Observer({
  children,
  onView,
  className,
  triggerOnce = true,
}: Props) {
  return (
    <InView triggerOnce={triggerOnce}>
      {({ inView, ref }) => (
        <div className={cn(className, inView && onView)} ref={ref}>
          {children}
        </div>
      )}
    </InView>
  );
}

export default Observer;
