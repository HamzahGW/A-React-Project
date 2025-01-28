/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
import { useRef, useEffect, useCallback } from "react";
import { BsCloudArrowUp } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { cn, getSchema } from "@tx/util-helpers";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import FileUploadedItem from "../FileUploadedItem/FileUploadedItem";
import { useBoolean } from "@tx/util-hooks";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";
import { TFile } from "@tx/util-models";
import { EAttachmentOwnerSubject } from "@tx/data-access";

// const fileSchema = getSchema("FILE_OPTIONAL");
type TAcceptedFiles = "IMAGE" | "IMAGE_PDF";
type TAcceptedExtensions = "image/*" | "application/*";

const patterns: Record<TAcceptedFiles, RegExp> = {
  IMAGE_PDF: /image\/*|application\/pdf$/,
  IMAGE: /image\/*/,
};

const filePickerAccept: Record<TAcceptedFiles, Record<string, string[]>> = {
  IMAGE: {
    "image/*": [".png", ".gif", ".jpeg", ".jpg"],
  },
  IMAGE_PDF: {
    "image/*": [".png", ".gif", ".jpeg", ".jpg"],
    "application/pdf": [".pdf"],
  },
};

type Props<TFormValues extends FieldValues> = {
  label?: string;
  squared?: boolean;
  name: Path<TFormValues>;
  control: Control<TFormValues, any>;
  className?: string;
  accept: TAcceptedFiles;
  onDelete?: (index: number) => void;
  disableDrag?: boolean;
  isButton?: boolean;
  removeText?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  preventUploadWhenValue?: boolean;
  schema?: {
    size?: number;
    maxNumOfUploads?: number;
  };
  hideUploadItem?: boolean;
  handleUpload?: (
    name: string | EAttachmentOwnerSubject,
    files: File[],
  ) => Promise<string | undefined>;
  // onDelete: ()=>
  errors?: boolean;
};

export function FileInputUpload<TFormValues extends FieldValues>({
  label,
  squared,
  name,
  className,
  disableDrag,
  onDelete,
  preventUploadWhenValue,
  isButton,
  removeText,
  accept,
  multiple,
  schema = {
    size: 1000000 * 5,
  },
  control,
  hideUploadItem,
  disabled,
  handleUpload,
  errors,
}: Props<TFormValues>) {
  const { field } = useController({ control, name: name });
  const isLoading = useBoolean(false);
  // TODO: REFACTOR
  const onDrop = async (acceptedFiles: File[]) => {
    if (!multiple) {
      if (field?.value?.url && preventUploadWhenValue) {
        toast.warn("عذرا, عليك حذف الملف الذي تم رفعه مسبقا");
        return;
      }
    }

    const files = acceptedFiles;
    isLoading.setTrue();
    if (!patterns[accept].test(files[0].type)) {
      toast.error("عذرا, أدخل نوع ملف صحيح");
      isLoading.setFalse();
      return;
    }

    if (schema?.size && schema.size < files[0].size) {
      toast.error("عذرا, تخطيت الحجم المسموح لحجم الملف");
      isLoading.setFalse();
      return;
    }

    if (handleUpload) {
      try {
        let ownerSubject: string = name;
        if (multiple) {
          const attachments = field.value as TFile[];
          const findFirstEmpty = attachments.findIndex((i) => !i.url);
          if (findFirstEmpty === -1) {
            toast.error("تخطيت العدد المسموح به لرفع الملفات");
            isLoading.setFalse();
            return;
          }
          ownerSubject = `${name}_${findFirstEmpty + 1}`;
        }

        toast.loading("رفع الملف...", {
          isLoading: true,
          toastId: "fileUpload_" + name,
        });

        const res = await handleUpload(ownerSubject, files);
        toast.update("fileUpload_" + name, {
          isLoading: false,
          type: "success",
          render: "تم رفع الملف",
          autoClose: 3000,
        });

        const newFile: TFile = {
          file: files[0],
          size: files[0].size,
          type: files[0].type,
          url: res as string,
        };

        if (multiple) {
          const attachments = field.value as TFile[];
          const findFirstEmpty = attachments.findIndex((i) => !i.url);
          attachments[findFirstEmpty] = newFile;
          field.onChange(attachments);
        } else {
          field.onChange(newFile);
        }
      } catch (err) {
        // console.log(err);
      }
    }
    isLoading.setFalse();
  };
  // console.log(field.value);

  const handleChange = (acceptedFiles: any) => {
    const { files } = acceptedFiles.target;
    if (handleUpload) handleUpload(name, files);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: accept ? filePickerAccept[accept] : undefined,
    disabled: disabled,
  });

  return (
    <>
      <div
        className={`${
          squared ? "" : ""
        } rounded-2xl focus:border-none focus:outline-none focus:ring-1`}
        {...(!disableDrag && getRootProps())}
      >
        <input
          type="file"
          hidden
          disabled={disabled}
          onChange={disableDrag ? handleChange : undefined}
          name={name}
          id={disableDrag ? name : undefined}
          {...(!disableDrag && getInputProps())}
        />
        <label
          htmlFor={name}
          className={cn(
            `${
              !squared
                ? "hover:bg-primary hover:text-primary relative flex cursor-pointer items-center justify-between gap-20 rounded-lg px-8 py-4"
                : "bg-primary-100 text-primary-300 flex cursor-pointer flex-col-reverse items-center justify-center rounded-2xl py-12 text-center focus:border-none focus:outline-none"
            } ${isButton ? "justify-center" : ""}`,
            className,
          )}
        >
          {squared && !removeText ? (
            <div>
              <div className="text-Accent mt-1">اختر ملف او اسحبه هنا</div>
              <div className="text-AccentAlternative mt-2">
                حجم الملف الأقصى 5MB
              </div>
            </div>
          ) : (
            <div>{label}</div>
          )}
          {!isButton && (
            <BsCloudArrowUp size={`${squared ? "7rem" : "2rem"}`} />
          )}
        </label>
      </div>

      {multiple ? (
        <>
          {Array.isArray(field?.value) &&
            !hideUploadItem &&
            (field.value as TFile[]).map(
              (item: TFile, index) =>
                item.url && (
                  <FileUploadedItem
                    key={index}
                    fileName={item?.file?.name}
                    link={item?.url}
                    onClick={() => {
                      const attachments = field.value as (TFile | {})[];
                      attachments[index] = {};
                      field.onChange(attachments);
                    }}
                    fileType={item?.type}
                    size={item?.size}
                  />
                ),
            )}
        </>
      ) : (
        <>
          {field?.value && !hideUploadItem && (
            <FileUploadedItem
              fileName={field.value?.file?.name}
              link={field.value?.url}
              onClick={() => {
                field.onChange({});
              }}
              fileType={field.value?.type}
              size={field.value?.size}
            />
          )}
        </>
      )}
      {errors && <div className="text-Danger mt-2 text-center">مرفق مطلوب</div>}
    </>
  );
}

export default FileInputUpload;
