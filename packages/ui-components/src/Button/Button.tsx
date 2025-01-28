import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCircleArrowDown,
  faAnglesRight,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "@tx/util-helpers";
import React, { forwardRef } from "react";

type TIcons = "ARROW_DOWN";

const ICONS: { [key in TIcons]: IconDefinition } = {
  ARROW_DOWN: faCircleArrowDown,
};

type TButtonBaseProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: any;
  variant?: TButtonVariant;
  name?: string;
  action?: "stepper";
  disabled?: boolean;
  icon?: TIcons;
  direction?: "next" | "prev";
  labelNext?: string;
  isLoading?: boolean;
  iconClassName?: string;
};

export type ButtonProps = TButtonBaseProps &
  (
    | LinkProps
    | (Omit<JSX.IntrinsicElements["button"], "onClick" | "ref"> & {
        to?: never;
      })
  );

export type TButtonVariant =
  | "primary"
  | "primary-highlight"
  | "White-Outline"
  | "primary-Outline"
  | "white"
  | "Warning"
  | "Warning-Outline"
  | "Danger"
  | "Danger-Outline"
  | "Success"
  | "Success-Outline"
  | "Accent-Outline";

const transition = "transition-colors ease-in-out duration-300";

const buttonVariants: Record<TButtonVariant, string> = {
  primary: `bg-primary hover:bg-primary/90 border-2 border-primary text-white focus:outline-primary-300 ${transition}`,
  Success: `bg-Success hover:bg-Success/90 border-2 border-Success text-white focus:outline-Success-300 ${transition}`,
  Danger: `bg-Danger hover:bg-Danger/90 border-2 border-Danger text-white focus:outline-Danger-300 ${transition}`,
  Warning: `bg-Warning hover:bg-Warning/90 border-2 border-Warning text-white focus:outline-Warning ${transition}`,
  "primary-Outline": `bg-transparent border-2 border-primary hover:bg-primary hover:text-white text-primary focus:outline-primary-300 ${transition}`,
  "Accent-Outline": `bg-transparent border-2 border-Accent hover:bg-Accent hover:text-white text-Accent focus:outline-Accent ${transition}`,
  "Warning-Outline": `bg-transparent border-2 border-Warning hover:bg-Warning hover:text-white text-Warning focus:outline-Warning/20 ${transition}`,
  "Danger-Outline": `bg-transparent border-2 border-Danger hover:bg-Danger hover:text-white text-Danger focus:outline-Danger-300 ${transition}`,
  "Success-Outline": `bg-transparent border-2 border-Success hover:bg-Success hover:text-white text-Success focus:outline-Success-300 ${transition}`,
  "primary-highlight": `bg-primary-highlight/60 hover:bg-primary-highlight ${transition} focus:outline-primary-100`,
  white: `bg-white hover:bg-white/90 border-2 border-white text-primary focus:outline-white-300 ${transition}`,
  "White-Outline": `border-white border-2 hover:bg-white text-white hover:text-primary ${transition}`,
};

export const Button = forwardRef<LinkProps | HTMLButtonElement, ButtonProps>(
  function Button(props: ButtonProps, forwardedRef) {
    const {
      isLoading = false,
      variant = "primary",
      action,
      labelNext,
      iconClassName,
      type = "button",
      direction,
      icon,
      // attributes propagated from `HTMLAnchorProps` or `HTMLButtonProps`
      ...passThroughProps
    } = props;
    // Buttons are **always** disabled if we're in a `loading` state
    const disabled = props.disabled || isLoading;
    // If pass an `href`-attr is passed it's `<div>`, otherwise it's a `<button />`
    const isLink = typeof props.to !== "undefined";
    const elementType = isLink ? "div" : "button";
    const element = React.createElement(
      elementType,
      {
        ...passThroughProps,
        disabled,
        type: !isLink ? type : undefined,
        ref: forwardedRef,
        className: cn(
          buttonVariants[variant],
          disabled &&
            "border-Alternative bg-white text-Alternative border-2 hover:bg-transparent cursor-default",
          "rounded-lg p-2 outline-offset-2 text-center",
          icon && "flex items-center justify-around",
          props.className,
        ),
        // if we click a disabled button, we prevent going through the click handler
        onClick: disabled
          ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
              e.preventDefault();
            }
          : props.onClick,
      },
      <>
        {!isLoading ? (
          <>
            {action === "stepper" ? (
              direction === "next" ? (
                <span className="flex items-center justify-center gap-4">
                  <span className="lh-sm block">{labelNext || "التالي"}</span>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="rotate-180"
                  />
                </span>
              ) : (
                <span className="flex items-center justify-center gap-4">
                  <FontAwesomeIcon icon={faAnglesRight} />
                  <span className="lh-sm block">السابق</span>
                </span>
              )
            ) : (
              <>{props.children}</>
            )}
          </>
        ) : (
          <FontAwesomeIcon icon={faCircleNotch} className={`animate-spin`} />
        )}
        {icon && (
          <FontAwesomeIcon
            className={`text-xl ${iconClassName || ""}`}
            icon={ICONS[icon]}
          />
        )}
      </>,
    );

    return isLink ? (
      <Link
        className={props.className}
        target={props.target}
        aria-disabled={props.disabled}
        onClick={props.onClick}
        to={props.to}
      >
        {element}
      </Link>
    ) : (
      <>{element}</>
    );
  },
);

export default Button;
