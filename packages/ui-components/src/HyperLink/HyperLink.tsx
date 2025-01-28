import { cn } from "@tx/util-helpers";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type Props = {
  type: "button" | "link";
  className?: string;
  as?: "a";
  label: string;
  link?: string;
  onClick?: () => void;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export function HyperLink({
  label,
  link,
  type,
  onClick,
  as,
  className,
  ...props
}: Props) {
  return (
    <>
      {type === "link" ? (
        <>
          {as === "a" ? (
            <a
              className={cn(
                "text-primary hover:text-primary-500 transition-colors ",
                className,
              )}
              target={props.target || "_blank"}
              href={link as string}
              {...props}
            >
              {label}
            </a>
          ) : (
            <Link
              className={cn(
                "text-primary hover:text-primary-500 transition-colors ",
                className,
              )}
              target={props.target || "_blank"}
              to={link as string}
              {...props}
            >
              {label}
            </Link>
          )}
        </>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cn(
            "text-primary hover:text-primary-500 transition-colors ",
            className,
          )}
          {...props}
        >
          {label}
        </button>
      )}
    </>
  );
}

export default HyperLink;
