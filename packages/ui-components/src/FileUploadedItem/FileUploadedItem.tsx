/* eslint-disable react/jsx-no-useless-fragment */
import { IoIosClose } from "react-icons/io";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useMemo } from "react";
import Button from "../Button/Button";
import { cn } from "@tx/util-helpers";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
// import "./FileUploadedItem.scss";

function humanFileSize(bytes: number | undefined, dp = 1) {
  const thresh = 1024;
  if (typeof bytes === "undefined") return undefined;

  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }

  const units = ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return `${bytes.toFixed(dp)} ${units[u]}`;
}

interface IProps {
  fileName?: string;
  fileType?: string;
  size?: number;
  onClick?: () => void;
  className?: string;
  link?: string;
  isLoading?: boolean;
}

export function FileUploadedItem({
  fileName,
  fileType,
  size,
  className,
  onClick,
  link,
  isLoading,
}: IProps) {
  const readableSize = useMemo(() => {
    return humanFileSize(size);
  }, [size]);
  return (
    <>
      {link && (
        <div
          className={cn(
            "bg-primary-50 mx-auto mt-4 flex flex-wrap items-center justify-between gap-4 rounded-xl px-4 py-5 md:gap-0",
            className,
          )}
        >
          <div className="text-Accent">
            <div className="flex gap-2">
              {fileType && (
                <div>
                  ({fileType.includes("/") ? fileType?.split("/")[1] : fileType}
                  )
                </div>
              )}
              <div className="fileItemFileName">
                {fileName && fileName.split(".")[0]}
              </div>
            </div>
            <div className="text-AccentAlternative">{readableSize}</div>
          </div>
          <div className="flex items-center gap-4">
            <Button to={link} className="w-16 lg:w-24">
              عرض
            </Button>
            <div className="bg-Success border-Success  inline-block rounded-lg border-2 px-4 py-2 text-white">
              تم الرفع
            </div>
            {onClick && (
              <button
                onClick={onClick}
                role="button"
                className="bg-Danger hover:bg-LightDanger inline-flex  h-7 w-7 items-center justify-center rounded-full text-white transition-colors"
              >
                <IoIosClose className="" size="2rem" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default FileUploadedItem;
