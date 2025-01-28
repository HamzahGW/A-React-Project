import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@tx/util-helpers";
import { forwardRef } from "react";

export const CarouselArrow = forwardRef(
  (
    {
      direction,
      onClick,
      isDisabled,
      className,
    }: {
      direction: "right" | "left";
      onClick: () => void;
      className?: string;
      isDisabled: boolean;
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          ` hidden ${isDisabled ? "hidden" : "lg:block"} `,
          className,
        )}
        onClick={onClick}
      >
        <FontAwesomeIcon
          className={` transition-colors hover:cursor-pointer
      ${direction === "right" ? "-rotate-90" : "rotate-90"} text-4xl`}
          icon={faCircleChevronDown}
        />
      </button>
    );
  },
);
