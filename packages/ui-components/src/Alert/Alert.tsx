import React, { ReactNode, TableHTMLAttributes } from "react";
import Modal, { ModalProps } from "../Modal/Modal";
import { BsCheck2Circle } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import Button from "../Button/Button";
import { cn } from "@tx/util-helpers";

type TAlert = "Success" | "Danger" | "Warning";

interface Props extends ModalProps {
  type: TAlert;
  confirmClick?: () => void;
  confirmLoading?: boolean;
}

export function Alert({
  type,
  confirmClick,
  confirmLoading,
  children,
  ...props
}: Props) {
  return (
    <Modal size="md" titleVariant={type} {...props}>
      <div className="space-y-8">
        <div className="text-center ">
          {type === "Success" && (
            <BsCheck2Circle size="10rem" className="text-Success mx-auto" />
          )}

          {type === "Danger" && (
            <IoWarningOutline size="10rem" className="text-Danger mx-auto" />
          )}

          {type === "Warning" && (
            <RiErrorWarningLine size="10rem" className="text-Warning mx-auto" />
          )}
        </div>
        <div>{children}</div>
        {type === "Danger" && (
          <div className="flex w-full gap-4">
            <Button
              isLoading={confirmLoading}
              className="w-full"
              onClick={confirmClick}
              variant="Danger"
            >
              تأكيد
            </Button>

            <Button
              className="w-full"
              variant="Danger-Outline"
              onClick={props.onClose}
            >
              إلغاء
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default Alert;
