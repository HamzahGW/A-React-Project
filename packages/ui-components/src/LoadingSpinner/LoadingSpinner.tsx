import { cn } from "@tx/util-helpers";
import "./LoadingSpinner.css";

interface IProps {
  size?: string;
  containerClassName?: string;
}

export function LoadingSpinner({ containerClassName }: IProps) {
  return (
    <div className={cn("flex justify-center", containerClassName)}>
      <div className="lds-ellipsis">
        <div className="bg-primary"></div>
        <div className="bg-primary"></div>
        <div className="bg-primary"></div>
        <div className="bg-primary"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
