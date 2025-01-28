import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.css";
import { ReactNode } from "react";
import { cn } from "@tx/util-helpers";
import { TColors } from "../../types";

type TModalSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

type TTitleVariant = Exclude<
  TColors,
  "AccentAlternative" | "Accent" | "None" | "Alternative" | "white"
>;
export interface ModalProps {
  isOpen: boolean;
  onClose: () => any;
  headerTitle?: string | null;
  children?: ReactNode;
  contentClassName?: string;
  TitleClassName?: string;
  size?: TModalSize;
  titleVariant?: TTitleVariant;
  isSibling?: boolean;
}

const sizes: { [key in TModalSize]: string } = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  xs: "max-w-xs",
};

const closeIconColor: Record<TTitleVariant, string> = {
  primary: "bg-primary-600/30 text-white hover:bg-white hover:text-primary ",
  Danger: "bg-white bg-opacity-30 text-white hover:bg-white hover:text-Danger ",
  Success:
    "bg-white bg-opacity-30 text-white hover:bg-white hover:text-Success ",
  Warning:
    "bg-white bg-opacity-30 text-white hover:bg-white hover:text-Warning ",
};

const titleColor: Record<TTitleVariant, string> = {
  primary: "bg-primary",
  Danger: "bg-Danger",
  Success: "bg-Success",
  Warning: "bg-Warning",
};

export function Modal({
  isOpen,
  onClose,
  children,
  titleVariant = "primary",
  contentClassName,
  headerTitle,
  size = "xl",
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`${styles["animateOverlay"]} fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#000000] bg-opacity-50 py-2`}
        >
          <Dialog.Content
            dir="rtl"
            className={`${
              styles["dialogContent"]
            } w-[95vw] bg-white focus:outline-none ${
              headerTitle ? "rounded-b-2xl rounded-t-3xl " : "rounded-2xl"
            } shadow-xl ${sizes[size]}`}
          >
            {headerTitle && (
              <Dialog.Title
                className={cn(
                  titleColor[titleVariant],
                  "-mt-1 flex items-center justify-between rounded-t-2xl px-6 py-3 md:py-4 md:text-2xl",
                )}
              >
                <div className="text-white">{headerTitle}</div>
                <div
                  role="button"
                  className={cn(
                    closeIconColor[titleVariant],
                    "flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:cursor-pointer md:h-10 md:w-10",
                  )}
                  onClick={onClose}
                >
                  <FontAwesomeIcon className="text-lg" icon={faXmark} />
                </div>
              </Dialog.Title>
            )}
            {/* <Dialog.Description >
            </Dialog.Description> */}
            <div className={cn("p-6", contentClassName)}>{children}</div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
